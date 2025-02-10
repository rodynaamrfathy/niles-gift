import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import bcrypt from "bcryptjs";

const userFilePath = path.join(process.cwd(), "data", "users.json");

// Helper function to load user data
const loadUserData = () => {
  try {
    // Verify the file path
    console.log("User file path:", userFilePath);

    // Read the file
    const data = fs.readFileSync(userFilePath, "utf-8");
    console.log("File content:", data);

    // Parse the JSON data
    return JSON.parse(data);
  } catch (error) {
    console.error("Error loading user data:", error);
    return null;
  }
};

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    const users = loadUserData();

    if (!users || !Array.isArray(users)) {
      return NextResponse.json({ error: "User data not found or invalid" }, { status: 500 });
    }

    // Find the user with the matching email
    const user = users.find((u) => u.email.trim().toLowerCase() === email.trim().toLowerCase());

    if (!user) {
      return NextResponse.json({ error: "Invalid email" }, { status: 401 });
    }

    // Debugging: Log the emails and their lengths
    console.log("Stored email:", user.email);
    console.log("Provided email:", email);
    console.log("Stored email length:", user.email.length);
    console.log("Provided email length:", email.length);

    // Compare the provided password with the hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    // Return success response
    return NextResponse.json({ success: true, message: "Login successful" }, { status: 200 });
  } catch (error) {
    console.error("Authentication error:", error);
    return NextResponse.json({ error: "Authentication failed" }, { status: 500 });
  }
}