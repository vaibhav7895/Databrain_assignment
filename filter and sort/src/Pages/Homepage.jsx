import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../Components/ProductCard";

const Homepage = () => {
  const [products, setProducts] = useState([]);
  const [deleteAction, setDeleteAction] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOption, setSortOption] = useState("");

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://fakeapimock-server.onrender.com/products/${id}`);
      setDeleteAction((prevState) => !prevState);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchData = async () => {
    try {
      let apiUrl = selectedCategory
        ? `https://fakeapimock-server.onrender.com/products?category=${selectedCategory}`
        : `https://fakeapimock-server.onrender.com/products`;

      const response = await axios.get(apiUrl);

      let sortedProducts = [...response.data];

      if (sortOption === "asc") {
        sortedProducts.sort((a, b) => a.price - b.price);
      } else if (sortOption === "desc") {
        sortedProducts.sort((a, b) => b.price - a.price);
      }

      setProducts(sortedProducts);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [deleteAction, selectedCategory, sortOption]);

  const handleSortChange = (sortOption) => {
    setSortOption(sortOption);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
 

  return (
    <div className="flex">
      <div className="ml-5">
        <h2 className="text-xl font-semibold mb-4">Filter by Category</h2>
        <select
          className="p-2 border rounded"
          onChange={(e) => handleCategoryChange(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
          <option value="jewelery">Jewelry</option>
          <option value="electronics">Electronics</option>
        </select>

        <h2 className="text-xl font-semibold my-4">Sort by</h2>
        <select
          className="p-2 border rounded"
          onChange={(e) => handleSortChange(e.target.value)}
        >
          <option value="">Default</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5 ms-24">
          {products &&
            products.map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  product={product}
                  handleDelete={handleDelete}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
