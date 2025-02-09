import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { default: categories } = await import("@/data/categories.json"); // Extract default export
    return NextResponse.json(categories); // Ensure it's an array
  } catch (error) {
    console.error("Error fetching categories:", error);
    return NextResponse.json({ error: "Failed to load categories" }, { status: 500 });
  }
}
