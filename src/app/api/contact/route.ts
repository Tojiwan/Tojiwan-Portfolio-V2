// Per-IP rate limiting runs at the edge: Vercel WAF rule on POST /api/contact.
const FORMSPREE_ENDPOINT =
  process.env.FORMSPREE_ENDPOINT ?? "https://formspree.io/f/mljgaana";
const MAX_BODY_BYTES = 20_000;

type FieldError = { field: string; message: string };

function json(body: unknown, status = 200) {
  return Response.json(body, {
    status,
    headers: { "cache-control": "no-store" },
  });
}

function fail(field: string, message: string): FieldError {
  return { field, message };
}

export async function POST(request: Request) {
  const length = Number(request.headers.get("content-length") ?? 0);
  if (Number.isFinite(length) && length > MAX_BODY_BYTES) {
    return json({ errors: [fail("message", "Message is too long.")] }, 413);
  }

  let data: FormData;
  try {
    data = await request.formData();
  } catch {
    return json({ error: "Invalid form data." }, 400);
  }

  // Bots that fill the hidden field get a success response without forwarding.
  if (String(data.get("_gotcha") ?? "").trim()) {
    return json({ ok: true });
  }

  const name = String(data.get("name") ?? "").trim();
  const email = String(data.get("email") ?? "").trim();
  const message = String(data.get("message") ?? "").trim();
  const errors: FieldError[] = [];

  if (!name) errors.push(fail("name", "This field is required."));
  else if (name.length > 100) errors.push(fail("name", "Name is too long."));

  if (!email) errors.push(fail("email", "This field is required."));
  else if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push(fail("email", "Enter a valid email address."));
  }

  if (!message) errors.push(fail("message", "This field is required."));
  else if (message.length > 5_000) {
    errors.push(fail("message", "Message is too long."));
  }

  if (errors.length > 0) return json({ errors }, 422);

  const payload = new FormData();
  payload.set("name", name);
  payload.set("email", email);
  payload.set("message", message);
  payload.set("_subject", "New portfolio contact message");

  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: payload,
      cache: "no-store",
      signal: AbortSignal.timeout(15_000),
    });
    return new Response(await response.text(), {
      status: response.status,
      headers: {
        "cache-control": "no-store",
        "content-type":
          response.headers.get("content-type") ?? "application/json",
      },
    });
  } catch {
    return json({ error: "Contact service unavailable." }, 502);
  }
}
