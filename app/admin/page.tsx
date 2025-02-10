'use client';

import { useState, useEffect, useCallback } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import Card from './components/Card';
import Table from './components/Table';
import TableHead from './components/TableHead';
import TableRow from './components/TableRow';
import TableCell from './components/TableCell';
import TableBody from './components/TableBody';
import Image from "next/image"

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

type Category = {
  name: string;
  subcategories: { name: string; status?: string }[];
};

export default function AdminPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsRes, categoriesRes] = await Promise.all([
          fetch('/api/products'),
          fetch('/api/categories'),
        ]);
  
        if (!productsRes.ok || !categoriesRes.ok) {
          throw new Error(`Failed to fetch data: ${productsRes.status}, ${categoriesRes.status}`);
        }
  
        const productsData = await productsRes.json();
        const categoriesData = await categoriesRes.json();
  
        console.log("Fetched products:", productsData);
        console.log("Fetched categories:", categoriesData);
  
        setProducts((prev) => (JSON.stringify(prev) !== JSON.stringify(productsData) ? productsData : prev));
        setCategories(Array.isArray(categoriesData) ? categoriesData : categoriesData?.categories || []);
      } catch (error) {
        console.error('Error loading data:', error);
        setError('Failed to load data');
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);
  
  const handleProductChange = useCallback((id: number, key: keyof Product, value: string) => {
    setProducts((prev) => prev.map((prod) => (prod.id === id ? { ...prod, [key]: value } : prod)));
  }, []);

  const handleImageUpload = async (id: number, file: File) => {
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch('/api/save', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to upload image');
      }

      const { imageUrl } = await response.json();
      handleProductChange(id, 'image', imageUrl);
    } catch (error) {
      console.error('Error uploading image:', error);
      setError('Failed to upload image');
    }
  };

  const handleDeleteProduct = useCallback((id: number) => {
    setProducts((prev) => prev.filter((prod) => prod.id !== id));
  }, []);

  const handleAddProduct = () => {
    setProducts((prev) => [...prev, { id: Date.now(), name: '', image: '' }]);
  };

  /*const handleAddCategory = () => {
    setCategories((prev) => [...prev, { name: '', subcategories: [] }]);
  };*/

  /*const handleAddSubCategory = (categoryIndex: number) => {
    setCategories((prev) => prev.map((cat, i) => i === categoryIndex ? { ...cat, subcategories: [...cat.subcategories, { name: '' }] } : cat));
  };*/

  const saveData = async () => {
    try {
      await fetch('/api/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ products, categories }),
      });
    } catch (err) {
      console.error('Error saving data:', err);
      setError('Failed to save data');
    }
  };

  if (loading) return <div className="p-6 text-lg text-black">Loading...</div>;
  if (error) return <div className="p-6 text-lg text-red-500">{error}</div>;

  return (
    <div className="p-6 text-black">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>

      <Card>
        <h2 className="text-xl font-semibold">Products</h2>
        <Button className="mb-2" onClick={handleAddProduct}>Add Product</Button>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Scientific Name</TableCell>
              <TableCell>Color</TableCell>
              <TableCell>Purity</TableCell>
              <TableCell>Moisture</TableCell>
              <TableCell>Volatile Oils</TableCell>
              <TableCell>Oil Content</TableCell>
              <TableCell>Product Specs</TableCell>
              <TableCell>Export Packaging</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell>
                  <Input 
                    value={product.name} 
                    onChange={(e) => handleProductChange(product.id, 'name', e.target.value)} 
                  />
                </TableCell>
                <TableCell>
                  <Input 
                    value={product.scientific_name || ""} 
                    onChange={(e) => handleProductChange(product.id, 'scientific_name', e.target.value)} 
                  />
                </TableCell>
                <TableCell>
                  <Input 
                    value={product.color || ""} 
                    onChange={(e) => handleProductChange(product.id, 'color', e.target.value)} 
                  />
                </TableCell>
                <TableCell>
                  <Input 
                    value={product.purity || ""} 
                    onChange={(e) => handleProductChange(product.id, 'purity', e.target.value)} 
                  />
                </TableCell>
                <TableCell>
                  <Input 
                    value={product.moisture || ""} 
                    onChange={(e) => handleProductChange(product.id, 'moisture', e.target.value)} 
                  />
                </TableCell>
                <TableCell>
                  <Input 
                    value={product.volatile_oils || ""} 
                    onChange={(e) => handleProductChange(product.id, 'volatile_oils', e.target.value)} 
                  />
                </TableCell>
                <TableCell>
                  <Input 
                    value={product.oil_content || ""} 
                    onChange={(e) => handleProductChange(product.id, 'oil_content', e.target.value)} 
                  />
                </TableCell>
                <TableCell>
                  <Input 
                    value={product.product_specs || ""} 
                    onChange={(e) => handleProductChange(product.id, 'product_specs', e.target.value)} 
                  />
                </TableCell>
                <TableCell>
                  <Input 
                    value={product.export_packaging_options || ""} 
                    onChange={(e) => handleProductChange(product.id, 'export_packaging_options', e.target.value)} 
                  />
                </TableCell>
                <TableCell>
                  <Input 
                    value={product.type || ""} 
                    onChange={(e) => handleProductChange(product.id, 'type', e.target.value)} 
                  />
                </TableCell>
                <TableCell>
                  <Input 
                    value={product.status || ""} 
                    onChange={(e) => handleProductChange(product.id, 'status', e.target.value)} 
                  />
                </TableCell>
                <TableCell>
                  <input 
                    type="file" 
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        handleImageUpload(product.id, e.target.files[0]);
                      }
                    }} 
                  />
                {product.image && (
                  <Image
                    src={product.image}
                    alt="Product"
                    width={64}
                    height={64}
                    className="w-16 h-16"
                  />
                )}              
                </TableCell>
                <TableCell>
                  <Button className="bg-red" onClick={() => handleDeleteProduct(product.id)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
          
      {/* 
      <Card className="mt-6">
        <h2 className="text-xl font-semibold">Categories</h2>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Category Name</TableCell>
              <TableCell>Subcategories</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((category, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Input className="text-black" value={category.name} onChange={(e) => setCategories((prev) => prev.map((cat, i) => i === index ? { ...cat, name: e.target.value } : cat))} />
                </TableCell>
                <TableCell>
                  {category.subcategories.map((sub, subIndex) => (
                    <div key={subIndex} className="mb-2">
                      <Input className="text-black" value={sub.name} onChange={(e) => setCategories((prev) => prev.map((cat, i) => i === index ? { ...cat, subcategories: cat.subcategories.map((s, j) => j === subIndex ? { ...s, name: e.target.value } : s) } : cat))} />
                    </div>
                  ))}
                  <Button onClick={() => handleAddSubCategory(index)}>Add Subcategory</Button>
                </TableCell>
                <TableCell>
                  <Button variant="destructive" onClick={() => setCategories((prev) => prev.filter((_, i) => i !== index))}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>*/}

      <Button className="mt-4" onClick={saveData}>
        Save Changes
      </Button>
    </div>
  );
}