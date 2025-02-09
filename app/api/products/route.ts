import { NextResponse } from "next/server";

export async function GET() {
  try {
    const products = await import("@/data/products.json"); // Use dynamic import
    return NextResponse.json(products.default);
  } catch {
    return NextResponse.json({ error: "Failed to load products" }, { status: 500 });
  }
}
