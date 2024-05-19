"use client";
import Image from "next/image";
import React from "react";
import { Container } from "@mui/material";
import { dates, numbers } from "@/static";

const ProductWrapper = ({ data }) => {
  if (!data || !data.products || data.products.length === 0) {
    return <div>No products available</div>;
  }

  const productItems = data.products.map((el, index) => {
    const profit = el.price * 2 + 10;

    return (
      <div key={el.id} className="card">
        <div className="image">
          <Image src={el.images[0]} alt="product" width={40} height={40} />
          <p>{el.title}</p>
        </div>
        <p className="date">{dates[index]}</p>
        <p className="price">${el.price}</p>
        <p className="profit">${profit}</p>
        <p className="number">{numbers[index]}</p>
      </div>
    );
  });

  return (
    <Container maxWidth="xl">
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="products">
        <div className="navigate">
          <h2>Overview</h2>
          <div className="navigation">
            <div className="gray">...</div>
            <div className="green"></div>
          </div>
        </div>
        <div className="card__info">
          <p className="title">Owner</p>
          <p className="date">End date</p>
          <p className="amount">Profits</p>
          <p className="loses">Losses</p>
          <p className="phone">Phone</p>
        </div>

        {productItems}
      </div>
    </Container>
  );
};

export default ProductWrapper;
