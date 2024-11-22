"use client";
import React, { useEffect, useState } from "react";
import { ProductCard } from "../../shopCards/ProductCard";
import { getProducts } from "@/utlis/api"; // Adjust the path as necessary

export default function Products() {
  const [loading, setLoading] = useState(true);
  const [loaded, setLoaded] = useState(false); // This will manage the "Load more" button
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await getProducts();
        console.log("Fetched products:", response); // Debugging log
        // If the response has a nested `data` array, extract it
        const products = Array.isArray(response?.data) ? response.data : [];
        setAllProducts(products);
      } catch (error) {
        console.error("Error fetching products:", error);
        setAllProducts([]); // Set empty array on error
      } finally {
        setLoading(false); // Ensure loading stops regardless of success or error
      }
    };

    loadProducts();
  }, []);

  useEffect(() => {
    console.log("Updated allProducts:", allProducts); // Verify state updates
  }, [allProducts]);

  const handleLoad = () => {
    // Implement load more functionality if your API supports pagination
    setLoaded(true);
  };

  if (loading) {
    return <div>Loading products...</div>; // Replace with a spinner or skeleton
  }

  return (
    <section className="flat-spacing-5 pt_0 flat-seller">
      <div className="container">
        <div className="flat-title">
          <span className="title wow fadeInUp" data-wow-delay="0s">
            Products
          </span>
          <p className="sub-title wow fadeInUp" data-wow-delay="0s">
            Shop the Latest Products
          </p>
        </div>
        <div
          className="grid-layout wow fadeInUp"
          data-wow-delay="0s"
          data-grid="grid-4"
        >
          {allProducts.length > 0 ? (
            allProducts.map((product, i) => (
              <ProductCard product={product} key={product.id || i} />
            ))
          ) : (
            <div>No products found.</div> // Handle empty data
          )}
        </div>
        {!loaded && (
          <div className="tf-pagination-wrap view-more-button text-center">
            <button
              className={`tf-btn-loading tf-loading-default style-2 btn-loadmore`}
              onClick={handleLoad}
            >
              <span className="text">Load more</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
