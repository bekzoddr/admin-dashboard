import Menu from "@/components/menu/Menu";
import { Container } from "@mui/material";
import React from "react";
import ProductWrapper from "@/components/productsWrapper/ProductsWrapper";
async function getData() {
  const res = await fetch("https://dummyjson.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Products = async () => {
  let data = await getData();
  return (
    <Container maxWidth="xl">
      <div className="products">
        <Menu />
        <ProductWrapper data={data} />
      </div>
    </Container>
  );
};

export default Products;
