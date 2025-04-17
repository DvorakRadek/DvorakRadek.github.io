import { products } from "../mockData/products";
import { useState } from "react";

type ProductsProps = {
  setTotal: (total: (prevTotal: number) => number) => void;
};

const Products = ({ setTotal }: ProductsProps) => {
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

  const handleQuantityChange = (productId: number, price: number, newQuantity: number) => {
    const currentQuantity = quantities[productId] || 0;
    const quantityDifference = newQuantity - currentQuantity;

    setQuantities({ ...quantities, [productId]: newQuantity });
    setTotal((prevTotal: number) => prevTotal + price * quantityDifference);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Product List</h2>
      <div className="space-y-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex justify-between items-center p-4 border border-gray-300 rounded-md bg-gray-50"
          >
            <span className="text-lg font-medium">
              #{product.id} {product.name} - ${product.price.toFixed(2)}
            </span>
            <input
              type="number"
              step={1}
              min={0}
              value={quantities[product.id] || 0}
              onChange={(e) => {
                const newQuantity = parseInt(e.target.value) || 0;
                handleQuantityChange(product.id, product.price, newQuantity);
              }}
              className="w-16 p-2 border border-gray-300 rounded-md text-center shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;