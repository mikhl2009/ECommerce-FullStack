import React, { useState } from "react";
import { Search, ShoppingBag, User } from "lucide-react";
import "../styles/styles.css";

const ProductPage = () => {
  const [quantities, setQuantities] = useState({});

  const products = [
    {
      id: 1,
      name: "VID Perfect Pear",
      price: 149,
      pricePerUnit: "29,80 kr/st",
      image: "/placeholder.svg",
    },
    {
      id: 2,
      name: "VID Perfect Pear",
      price: 149,
      pricePerUnit: "29,80 kr/st",
      image: "/placeholder.svg",
    },
    {
      id: 3,
      name: "VID Perfect Pear",
      price: 149,
      pricePerUnit: "29,80 kr/st",
      image: "/placeholder.svg",
    },
    {
      id: 4,
      name: "VID Perfect Pear",
      price: 149,
      pricePerUnit: "29,80 kr/st",
      image: "/placeholder.svg",
    },
  ];

  const handleQuantityChange = (id, value) => {
    setQuantities((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className="page-container">
      <header>
        <div className="header-content">
          <a href="/" className="logo">
            SnusDirekt
          </a>
          <div className="header-icons">
            <button aria-label="Search">
              <Search />
            </button>
            <button aria-label="Shopping cart">
              <ShoppingBag />
            </button>
            <button aria-label="User account">
              <User />
            </button>
          </div>
        </div>
        <nav>
          <div className="nav-content">
            <div className="nav-links">
              <a href="/products">Alla Produkter</a>
              <a href="/best-sellers">Bäst säljare</a>
              <a href="/news">Nyheter</a>
            </div>
            <div className="country-selector">
              <span>Sverige</span>
              <svg
                className="flag"
                viewBox="0 0 36 36"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  fill="#006AA7"
                  d="M15.5 31H32c2.209 0 4-1.791 4-4.5v-6H15.5V31zM32 5H15.5v10.5H36V9a4 4 0 0 0-4-4zM10.5 5H4a4 4 0 0 0-4 3.997V15.5h10.5V5zM0 20.5v6.004C.002 29.211 1.792 31 4 31h6.5V20.5H0z"
                ></path>
                <path
                  fill="#FECC00"
                  d="M15.5 5h-5v10.5H0v5h10.5V31h5V20.5H36v-5H15.5z"
                ></path>
              </svg>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>BURSTING WITH FLAVOR</h1>
            <div className="flavor-icons">
              <div className="icon"></div>
              <div className="icon"></div>
              <div className="icon"></div>
              <div className="icon"></div>
            </div>
          </div>
          <img
            src="/placeholder.svg"
            alt="Product display"
            className="hero-image"
          />
          <div className="warning-banner">
            Denna produkt innehåller nikotin som är ett mycket
            beroendeframkallande ämne.
          </div>
        </section>

        <section className="features">
          <div className="feature">
            <h3>Snabb leverans</h3>
            <p>1-2 dagar inom Sverige</p>
          </div>
          <div className="feature">
            <h3>Bäst-pris garanti</h3>
            <p>Pris matching</p>
          </div>
          <div className="feature">
            <h3>Säker betalning</h3>
            <p>Allt sker via Stripe</p>
          </div>
        </section>

        <section className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <div className="price-info">
                <div className="price">{product.price} kr</div>
                <div className="price-per-unit">({product.pricePerUnit})</div>
              </div>
              <div className="product-actions">
                <select
                  value={quantities[product.id] || "10"}
                  onChange={(e) =>
                    handleQuantityChange(product.id, e.target.value)
                  }
                >
                  <option value="10">10 st</option>
                  <option value="20">20 st</option>
                  <option value="30">30 st</option>
                </select>
                <button className="buy-button">KÖP</button>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default ProductPage;
