import Menu from "@/components/menu/Menu";
import { Container } from "@mui/material";
import React from "react";
import UserWrapper from "@/components/userWrapper/UserWrapper";

async function getData() {
  const res = await fetch("https://dummyjson.com/users");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
const Users = async () => {
  let data = await getData();
  return (
    <Container maxWidth="xl">
      <div className="products">
        <UserWrapper data={data} />
      </div>
    </Container>
  );
};

export default Users;
