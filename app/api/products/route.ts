import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { default: products } = await import("@/data/products.json");
    return NextResponse.json(products); // Ensure it's an array
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json({ error: "Failed to load products" }, { status: 500 });
  }
}
