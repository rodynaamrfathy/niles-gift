import { NextResponse } from 'next/server';
import { IncomingForm } from 'formidable';
import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false, // Disable the default body parser
  },
};

interface FormDataFields {
  [key: string]: string[];
}

interface FormDataFiles {
  image: {
    filepath: string;
    originalFilename: string;
    mimetype: string;
    size: number;
  };
}

export async function POST(request: Request) {
  try {
    // Ensure the uploads directory exists
    const uploadDir = path.join(process.cwd(), 'uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const form = new IncomingForm();
    form.uploadDir = uploadDir; // Set the upload directory
    form.keepExtensions = true; // Keep the file extension

    // Parse the form data
    const data = await new Promise<{ fields: FormDataFields; files: FormDataFiles }>((resolve, reject) => {
      form.parse(request as any, (err, fields, files) => {
        if (err) {
          return reject(err);
        }
        resolve({ fields, files });
      });
    });

    // Access the uploaded file
    const file = data.files.image;
    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    // Construct the URL for the uploaded file
    const imageUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/uploads/${path.basename(file.filepath)}`;

    // Return the image URL in the response
    return NextResponse.json({ imageUrl }, { status: 200 });
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json({ error: 'Failed to upload file' }, { status: 500 });
  }
}