import { NextResponse } from "next/server";

export async function GET() {
  try {
    const categories = await import("@/data/categories.json"); // Use dynamic import
    return NextResponse.json(categories.default);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to load categories" }, { status: 500 });
  }
}
