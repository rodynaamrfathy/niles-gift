/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static site export
  images: {
    unoptimized: true, // Disables automatic image optimization (needed for static hosting)
  },
};

export default nextConfig;
