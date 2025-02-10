"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react"; // Import Suspense
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Header from "./components/header";
import Footer from "../components/footer";

// Define TypeScript types
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


// Move the main logic to a separate component
function ProductsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categories = ["All", "Organic Herbals", "Oils", "Aloe Vera", "Other"];

  // Get category from URL or default to "All"
  const categoryFromURL = searchParams.get("category") || "All";

  // State management
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryFromURL);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Fetch products on mount
  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed to load products:", err));
  }, []);

  // Sync category with URL
  useEffect(() => {
    if (categories.includes(categoryFromURL)) {
      setSelectedCategory(categoryFromURL);
    } else {
      setSelectedCategory("All");
    }
  }, [categoryFromURL, categories]); // Add `categories` to the dependency array

  // Filtered products
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : selectedCategory === "Organic Herbals"
      ? products.filter((product) => ["Herbs", "Flowers", "Spices and Seeds"].includes(product.type || ""))
      : products.filter((product) => product.type === selectedCategory);

  // Handle category selection (both URL-based & in-page)
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);

    // Update URL query without reloading the page
    const newUrl = category === "All" ? "/products" : `/products?category=${category}`;
    router.push(newUrl, { scroll: false });
  };

  return (
    <>
      <Header />
      <main className="bg-[#F5F5F5] min-h-screen container mx-auto py-20 mt-20 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-[#1B4D3E]">Our Products</h1>

        {/* Mobile Menu */}
        <div className="sm:hidden flex flex-col items-center gap-2 mb-6">
          <h1 className="text-lg sm:text-2xl text-[#1B4D3E]">Select Filter</h1>
          <button
            className="p-2 bg-[#1B4D3E] text-white rounded-md"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div className="sm:hidden flex flex-col items-center bg-white shadow-lg rounded-lg p-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                className={`w-full py-2 text-lg font-semibold ${
                  selectedCategory === category ? "text-green-600 bg-gray-200" : "text-gray-700"
                }`}
                onClick={() => {
                  handleCategoryChange(category);
                  setMenuOpen(false);
                }}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {/* Desktop Category Buttons */}
        <div className="hidden sm:flex justify-center space-x-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                selectedCategory === category ? "text-green-600 bg-gray-200" : "text-gray-700"
              }`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-green-600 text-center mb-6">{selectedCategory}</h2>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="flex flex-col items-center text-center border p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-2xl transition bg-white"
              >
                <div className="w-full max-w-xs h-64 flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <p className="text-gray-500">Image not available</p>
                  )}
                </div>
                <h2 className="mt-4 text-lg sm:text-2xl font-semibold text-green-600">{product.name}</h2>
                {product.scientific_name && <p className="italic text-gray-600 text-sm sm:text-base">{product.scientific_name}</p>}
                <button
                  className="mt-4 px-4 py-2 bg-[#1B4D3E] text-white rounded-lg hover:bg-[#14372A] transition"
                  onClick={() => setSelectedProduct(product)}
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-lg sm:text-2xl text-center font-semibold text-gray-500 mt-10">Coming Soon...</p>
        )}

        {/* Product Details Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-green-600">{selectedProduct.name}</h2>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="w-full h-64 bg-gray-100 rounded-lg overflow-hidden">
                  {selectedProduct.image ? (
                    <Image
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      width={300}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <p className="text-gray-500">Image not available</p>
                  )}
                </div>
                <div className="space-y-4">
                  {selectedProduct.scientific_name && (
                    <p className="italic text-gray-600"><strong>Scientific Name:</strong> {selectedProduct.scientific_name}</p>
                  )}
                  {selectedProduct.color && (
                    <p className="text-gray-600"><strong>Color:</strong> {selectedProduct.color}</p>
                  )}
                  {selectedProduct.purity && (
                    <p className="text-gray-600"><strong>Purity:</strong> {selectedProduct.purity}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}

// Wrap the main component in Suspense
export default function ProductsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductsContent />
    </Suspense>
  );
}