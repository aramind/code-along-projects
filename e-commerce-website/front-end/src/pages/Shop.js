import React from "react";
import Hero from "../components/Hero/Hero";
import Popular from "../components/Popular/Popular";
import Offers from "../components/Offers/Offers";
import NewCollections from "../components/NewCollections/NewCollections";
import NewsLetter from "../components/news-letter/NewsLetter";
import "../App.css";

const Shop = () => {
  return (
    <div className="shop">
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </div>
  );
};

export default Shop;
