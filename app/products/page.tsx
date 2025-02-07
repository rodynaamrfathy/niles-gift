"use client";
import Image from "next/image";
import products from "@/public/products.json";
import categoriesData from "@/public/categories.json";
import { useState } from "react";
import Header from "./components/header";

// Define TypeScript type for Product
type Product = {
  id: number;
  name: string;
  scientific_name?: string;
  image: string;
  color?: string;
  purity?: string;
  moisture?: string;
  volatile_oils?: string;
  product_specs?: string;
  export_packaging_options?: string;
  type?: string;
  status?: string;
  oil_content?: string;
};

// Extract categories dynamically
const categories = ["All", ...categoriesData.categories.flatMap(category => category.subcategories.map(sub => sub.name))];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = selectedCategory === "All"
    ? products.filter(product => product.type)
    : products.filter(product => product.type === selectedCategory);

  return (
    <>
      <Header />
      <main className="bg-[#F5F5F5] container mx-auto py-20 mt-20 px-6">
        <h1 className="text-4xl font-bold text-center mb-10">Our Products</h1>
        
        {/* Category Filter Buttons */}
        <div className="flex justify-center space-x-4 mb-8">
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 py-2 rounded-lg font-semibold ${selectedCategory === category ? 'text-green-600' : 'text-gray-700'}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-green-600 text-center mb-6">{selectedCategory}</h2>

        {/* Display Products or "Coming Soon" */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product: Product) => (
              <div key={product.id} className="border p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
                <Image src={product.image} alt={product.name} width={300} height={300} className="rounded-lg" />
                <h2 className="mt-4 text-2xl font-semibold text-green-600">{product.name}</h2>
                {product.scientific_name && <p className="italic text-gray-600">{product.scientific_name}</p>}
                <ul className="mt-2 text-gray-700">
                  {product.color && <li>🌿 <strong>Color:</strong> {product.color}</li>}
                  {product.purity && <li>✔️ <strong>Purity:</strong> {product.purity}</li>}
                  {product.moisture && <li>💧 <strong>Moisture:</strong> {product.moisture}</li>}
                  {product.volatile_oils && <li>🛢️ <strong>Volatile Oils:</strong> {product.volatile_oils}</li>}
                  {product.oil_content && <li>🛢️ <strong>Oil Content:</strong> {product.oil_content}</li>}
                  {product.product_specs && <li>🌿 <strong>Specs:</strong> {product.product_specs}</li>}
                  {product.export_packaging_options && <li>📦 <strong>Packaging:</strong> {product.export_packaging_options}</li>}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-2xl text-center font-semibold text-gray-500 mt-10"> Coming Soon ...</p>
        )}
      </main>
    </>
  );
}
