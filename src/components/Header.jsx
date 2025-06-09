import React, { useState, useEffect } from "react";
import "../styles/Header.css";

const Header = () => {
  const [text, setText] = useState("");
  const [headerData, setHeaderData] = useState(null);
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/assets/data/header.json`)
      .then((response) => response.json())
      .then((data) => setHeaderData(data));
  }, []);
  console.log(headerData);
  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="p-d-Header">
      <div className="c1-d-header">
        <div>
          <img
            src="assets/images/amzone-log-header.png"
            alt="logo"
            width={110}
            height={60}
          />
        </div>
        <div className="location-container">
          <div>Delivery</div>
          <div>
            <img
              src="assets/images/location-dot-solid.svg"
              width={20}
              height={20}
              alt="location"
            />
            Bhubaneswar 757050
          </div>
        </div>
        <div className="search-container">
          <button className="buton-all">
            ALL <img src="assets/images/down-arrow.png" width={10} height={10} />
          </button>
          <input
            type="text"
            value={text}
            onChange={handleInputChange}
            placeholder="Search products..."
          />
          <button className="search-button">
            <img
              src="assets/images/magnifying-glass-solid.svg"
              width={20}
              height={20}
              alt="search"
            />
          </button>
        </div>
        <div className="header-right-section">
          <div className="language-selector">
            <img
              src="assets/images/india-flag.png"
              alt="logo"
              width={20}
              height={10}
            />
            EN
          </div>
          <div className="account-section">
            <div>Hello, sign in</div>
            <div>Account & Lists</div>
          </div>
          <div className="orders-section">
            <div>Returns</div>
            <div>& Orders</div>
          </div>
          <div className="cart-section">🛒 Cart</div>
        </div>
      </div>
      <div
        className="c2-d-header"
        style={{
          display: "flex",
          color: "white",
          gap: "10px",
          overflow: "scroll",
          scrollbarWidth: "none",
          backgroundColor: "#232f3e",
        }}
      >
        <img src="assets/images/bars-solid.svg" width={20} height={20}/>
        {headerData &&
          headerData.map((i, index) => (
            <div key={index}>
              <div>{i}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Header;
