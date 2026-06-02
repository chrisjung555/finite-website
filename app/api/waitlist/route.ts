import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseAdmin } from "@/lib/supabase";

const schema = z.object({
  email: z.string().email("Please enter a valid email address."),
});

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid email." },
      { status: 400 },
    );
  }

  const supabase = createSupabaseAdmin();

  if (!supabase) {
    return NextResponse.json(
      {
        error:
          "Waitlist is not configured yet. Add SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.",
      },
      { status: 503 },
    );
  }

  const { error } = await supabase
    .from("waitlist")
    .insert({ email: parsed.data.email.toLowerCase().trim() });

  if (error) {
    if (error.code === "23505") {
      return NextResponse.json(
        { message: "You're already on the list." },
        { status: 200 },
      );
    }

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }

  return NextResponse.json({ message: "You're on the list." }, { status: 201 });
}
