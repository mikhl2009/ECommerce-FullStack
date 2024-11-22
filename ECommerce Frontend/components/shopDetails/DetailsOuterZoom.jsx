"use client";
import React, { useState, useEffect } from "react";
import CountdownComponent from "../common/Countdown";
import {
  colors,
  paymentImages,
  sizeOptions,
} from "@/data/singleProductOptions";
import StickyItem from "./StickyItem";
import Quantity from "./Quantity";

import Slider1ZoomOuter from "./sliders/Slider1ZoomOuter";
import { useContextElement } from "@/context/Context";
import { openCartModal } from "@/utlis/openCartModal";
import { useParams } from "next/navigation";
import { getProduct } from "@/utlis/api";

const DetailsOuterZoom = () => {
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizeOptions[1]);
  const [quantity, setQuantity] = useState(1);

  const params = useParams();
  const slug = params.id;

  const [product, setProduct] = useState(null); // Start with null to avoid unnecessary renders

  useEffect(() => {
    const loadProduct = async () => {
      if (!slug) {
        console.log("No slug provided");
        return;
      }

      try {
        console.log("Fetching product with slug:", slug);
        const response = await getProduct(slug);
        console.log("API response:", response);
        // Check if response and data are valid
        if (response?.data && Array.isArray(response.data)) {
          console.log("Fetched products:", response.data);
          setProduct(response.data[0]); // Assuming you're interested in the first product
        } else {
          console.error("Invalid API response:", response);
          setProduct(null); // If data is invalid, set product to null
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        setProduct(null); // On error, set product to null
      }
    };

    loadProduct();
  }, [slug]); // Re-fetch when slug changes

  const handleColor = (color) => {
    const updatedColor = colors.find(
      (elm) => elm.value.toLowerCase() === color.toLowerCase()
    );
    if (updatedColor) {
      setCurrentColor(updatedColor);
    }
  };

  const {
    addProductToCart,
    isAddedToCartProducts,
    addToCompareItem,
    isAddedtoCompareItem,
    addToWishlist,
    isAddedtoWishlist,
  } = useContextElement();

  if (product === null) {
    return <div>Loading...</div>; // Display loading or error message if product is not set
  }

  return (
    <section
      className="flat-spacing-4 pt_0"
      style={{ maxWidth: "100vw", overflow: "clip" }}
    >
      <div
        className="tf-main-product section-image-zoom"
        style={{ maxWidth: "100vw", overflow: "clip" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="tf-product-media-wrap sticky-top">
                <div className="thumbs-slider">
                  <Slider1ZoomOuter
                    handleColor={handleColor}
                    currentColor={currentColor.value}
                    firstImage={product?.imgSrc}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="tf-product-info-wrap position-relative">
                <div className="tf-zoom-main" />
                <div className="tf-product-info-list other-image-zoom">
                  <div className="tf-product-info-title">
                    <h5>{product?.title || "Cotton jersey top"}</h5>
                  </div>
                  <div className="tf-product-info-badges">
                    <div className="badges">Best seller</div>
                    <div className="product-status-content">
                      <i className="icon-lightning" />
                      <p className="fw-6">
                        Selling fast! 5600 people have this in their carts.
                      </p>
                    </div>
                  </div>
                  <div className="tf-product-info-price">
                    <div className="price-on-sale">
                      ${product?.price.toFixed(2)}
                    </div>
                    <div className="compare-at-price">
                      ${currentColor.oldPrice.toFixed(2)}
                    </div>
                    <div className="badges-on-sale">
                      <span>20</span>% OFF
                    </div>
                  </div>
                  <div className="tf-product-info-liveview">
                    <div className="liveview-count">20</div>
                    <p className="fw-6">People are viewing this right now</p>
                  </div>
                  <div className="tf-product-info-countdown">
                    <div className="countdown-wrap">
                      <div className="countdown-title">
                        <i className="icon-time tf-ani-tada" />
                        <p>HURRY UP! SALE ENDS IN:</p>
                      </div>
                      <div className="tf-countdown style-1">
                        <div className="js-countdown">
                          <CountdownComponent labels="Days :,Hours :,Mins :,Secs" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tf-product-info-variant-picker">
                    <div className="variant-picker-item">
                      <div className="variant-picker-label">
                        Color:
                        <span className="fw-6 variant-picker-label-value">
                          {currentColor.value}
                        </span>
                      </div>
                      <form className="variant-picker-values">
                        {colors.map((color) => (
                          <React.Fragment key={color.id}>
                            <input
                              id={color.id}
                              type="radio"
                              name="color1"
                              readOnly
                              checked={currentColor === color}
                            />
                            <label
                              onClick={() => setCurrentColor(color)}
                              className="hover-tooltip radius-60"
                              htmlFor={color.id}
                              data-value={color.value}
                            >
                              <span
                                className={`btn-checkbox ${color.className}`}
                              />
                              <span className="tooltip">{color.value}</span>
                            </label>
                          </React.Fragment>
                        ))}
                      </form>
                    </div>
                    <div className="variant-picker-item">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="variant-picker-label">
                          Size:
                          <span className="fw-6 variant-picker-label-value">
                            {currentSize.value}
                          </span>
                        </div>
                        <a
                          href="#find_size"
                          data-bs-toggle="modal"
                          className="find-size fw-6"
                        >
                          Find your size
                        </a>
                      </div>
                      <form className="variant-picker-values">
                        {sizeOptions.map((size) => (
                          <React.Fragment key={size.id}>
                            <input
                              type="radio"
                              name="size1"
                              id={size.id}
                              readOnly
                              checked={currentSize === size}
                            />
                            <label
                              onClick={() => setCurrentSize(size)}
                              className="style-text"
                              htmlFor={size.id}
                              data-value={size.value}
                            >
                              <p>{size.value}</p>
                            </label>
                          </React.Fragment>
                        ))}
                      </form>
                    </div>
                  </div>
                  <div className="tf-product-info-quantity">
                    <div className="quantity-title fw-6">Quantity</div>
                    <Quantity setQuantity={setQuantity} />
                  </div>
                  <div className="tf-product-info-buy-button">
                    <form onSubmit={(e) => e.preventDefault()} className="">
                      <a
                        onClick={() => {
                          openCartModal();
                          addProductToCart(product.id, quantity || 1);
                        }}
                        className="tf-btn btn-fill justify-content-center fw-6 fs-16 flex-grow-1 animate-hover-btn"
                      >
                        <span>
                          {isAddedToCartProducts(product?.id)
                            ? "Already Added"
                            : "Add to cart"}{" "}
                          -{" "}
                        </span>
                        <span className="tf-qty-price">
                          ${(product?.price * quantity).toFixed(2)}
                        </span>
                      </a>
                      <a
                        onClick={() => addToWishlist(product.id)}
                        className="tf-product-btn-wishlist hover-tooltip box-icon bg_white wishlist btn-icon-action"
                      >
                        <span
                          className={`icon icon-heart ${
                            isAddedtoWishlist(product?.id) ? "added" : ""
                          }`}
                        />
                        <span className="tooltip">
                          {isAddedtoWishlist(product?.id)
                            ? "Already Wishlisted"
                            : "Add to Wishlist"}
                        </span>
                      </a>
                      <a
                        onClick={() => addToCompareItem(product?.id)}
                        className="tf-product-btn-compare hover-tooltip box-icon bg_white compare btn-icon-action"
                      >
                        <span
                          className={`icon icon-compare ${
                            isAddedtoCompareItem(product?.id) ? "added" : ""
                          }`}
                        />
                        <span className="tooltip">
                          {isAddedtoCompareItem(product?.id)
                            ? "Already Added"
                            : "Add to Compare"}
                        </span>
                      </a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsOuterZoom;
