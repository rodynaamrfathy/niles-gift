import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import formidable from "formidable";
import { IncomingMessage } from "http";

// Disable Next.js body parsing
export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(request: Request) {
  try {
    // Handle JSON Data (Products & Categories)
    if (request.headers.get("content-type")?.includes("application/json")) {
      const { products, categories } = await request.json();

      // Validate data format
      if (!Array.isArray(products) || !Array.isArray(categories)) {
        return NextResponse.json(
          { error: "Invalid data format" },
          { status: 400 }
        );
      }

      // Define file paths
      const productsFilePath = path.join(process.cwd(), "data", "products.json");
      const categoriesFilePath = path.join(process.cwd(), "data", "categories.json");

      // Save JSON Data
      await fs.writeFile(productsFilePath, JSON.stringify(products, null, 2));
      await fs.writeFile(categoriesFilePath, JSON.stringify({ categories }, null, 2));

      return NextResponse.json({ message: "Data saved successfully" }, { status: 200 });
    }

    // Handle File Upload
    const form = formidable({ multiples: false });
    return new Promise((resolve, reject) => {
      form.parse(request as unknown as IncomingMessage, async (err, fields, files) => {
        if (err) {
          console.error("Error parsing form:", err);
          return reject(new NextResponse("Error parsing form", { status: 500 }));
        }

        try {
          // Ensure a file was uploaded
          if (!files || !files.file) {
            return reject(new NextResponse("No file uploaded", { status: 400 }));
          }

          const file = Array.isArray(files.file) ? files.file[0] : files.file;
          if (!file.originalFilename || !file.filepath) {
            return reject(new NextResponse("Invalid file", { status: 400 }));
          }

          // Save the file to /public/images
          const filePath = path.join(process.cwd(), "public/images", file.originalFilename);
          await fs.rename(file.filepath, filePath);

          resolve(new NextResponse(JSON.stringify({ message: "File uploaded successfully" }), { status: 200 }));
        } catch (error) {
          console.error("File save error:", error);
          reject(new NextResponse("Error saving file", { status: 500 }));
        }
      });
    });
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
