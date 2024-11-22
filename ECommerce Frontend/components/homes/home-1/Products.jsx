"use client";
import React, { useEffect, useState } from "react";
import { ProductCard } from "../../shopCards/ProductCard";
import { fetchProductsFromStrapi } from "@/utils/api"; // Adjust the path as necessary

export default function Products() {
  const [loading, setLoading] = useState(true);
  const [loaded, setLoaded] = useState(false); // This will manage the "Load more" button
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchProductsFromStrapi();
      setAllProducts(products);
      setLoading(false);
    };
    getProducts();
  }, []);

  const handleLoad = () => {
    // Implement load more functionality if your API supports pagination
    // For now, we'll just set loaded to true to hide the button
    setLoaded(true);
  };

  if (loading) {
    return <div>Loading products...</div>; // You can replace this with a spinner or skeleton
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
          {allProducts.map((product, i) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
        {!loaded && (
          <div className="tf-pagination-wrap view-more-button text-center">
            <button
              className={`tf-btn-loading tf-loading-default style-2 btn-loadmore ${
                loading ? "loading" : ""
              } `}
              onClick={() => handleLoad()}
            >
              <span className="text">Load more</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
