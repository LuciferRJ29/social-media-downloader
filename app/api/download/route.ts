import { NextResponse } from "next/server";

const API = process.env.NEXT_PUBLIC_API_URL;

export async function POST(req: Request) {
  try {
    const { url } = await req.json();

    if (!API) {
      return NextResponse.json(
        { error: "API URL not set" },
        { status: 500 }
      );
    }

    const res = await fetch(`${API}/api/download`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    });

    const data = await res.json();
    return NextResponse.json(data);

  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
