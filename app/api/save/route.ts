import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Define the paths to the JSON files
const productsFilePath = path.join(process.cwd(), 'data', 'products.json');
const categoriesFilePath = path.join(process.cwd(), 'data', 'categories.json');

export async function POST(request: Request) {
  try {
    // Parse the request body
    const { products, categories } = await request.json();

    // Validate the data (optional but recommended)
    if (!Array.isArray(products) || !Array.isArray(categories)) {
      return NextResponse.json(
        { error: 'Invalid data format' },
        { status: 400 }
      );
    }

    // Write the updated products data to products.json
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));

    // Write the updated categories data to categories.json
    fs.writeFileSync(categoriesFilePath, JSON.stringify({ categories }, null, 2));

    // Return a success response
    return NextResponse.json(
      { message: 'Data saved successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error saving data:', error);
    return NextResponse.json(
      { error: 'Failed to save data' },
      { status: 500 }
    );
  }
}