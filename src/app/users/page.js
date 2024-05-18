import Menu from "@/components/menu/Menu";
import { Container } from "@mui/material";
import React from "react";

const Users = () => {
  return (
    <Container maxWidth="xl">
      <div className="users">
        <Menu />
        <h1>Users</h1>
      </div>
    </Container>
  );
};

export default Users;
