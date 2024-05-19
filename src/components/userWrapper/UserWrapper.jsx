"use client";
import Image from "next/image";
import React from "react";
import { Container } from "@mui/material";
import { images } from "@/static";
const UserWrapper = ({ data }) => {
  if (!data || !data.users || data.users.length === 0) {
    return <div>No users available</div>;
  }

  const userItems = data.users.map((el, index) => {
    const userImage = images[index].image;

    return (
      <div key={el.id} className="card user">
        <div className="image">
          <Image src={userImage} alt="product" width={40} height={40} />
          <div className="data">
            <h3>{el.address.city}</h3>
            <p>Updated {el.id} day ago</p>
          </div>
        </div>
        <div className="dates">
          <h3 className="date">
            {el.firstName} {el.lastName}
          </h3>
          <p>on {el.birthDate}</p>
        </div>
        <div className="time">
          <h3 className="profit">{el.birthDate}</h3>
        </div>
        <p className="number">{el.phone}</p>
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
          <h2>Tickets</h2>
          <div className="navigation">
            <div className="gray">...</div>
            <div className="green"></div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="users__wrap">
          <h2>All tickets</h2>
          <div className="card__info user">
            <p className="title">Ticket details</p>
            <p className="date datess">Customer name</p>
            <p className="loses">Date</p>
            <p className="phone">Priority</p>
          </div>

          {userItems}
        </div>
      </div>
    </Container>
  );
};

export default UserWrapper;
