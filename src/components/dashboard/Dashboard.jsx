"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/assets/images/Logo.svg";
import icon1 from "@/assets/images/icon1.svg";
import icon2 from "@/assets/images/icon2.svg";
import icon3 from "@/assets/images/icon3.svg";
import icon4 from "@/assets/images/icon4.svg";
import icon5 from "@/assets/images/icon5.svg";
import icon6 from "@/assets/images/icon6.svg";
import Link from "next/link";
import Menu from "@/components/menu/Menu";

const Dashboard = () => {
  const [isClassActive, setIsClassActive] = useState(false);

  const toggleDashboardClass = () => {
    setIsClassActive(!isClassActive);
  };

  return (
    <div className={`dashboard ${isClassActive ? "active" : ""}`}>
      <Menu toggleDashboardClass={toggleDashboardClass} />
      <Link href="/">
        <div className="logo">
          <Image src={logo} alt="logo" />
          <h2>Dashboard</h2>
        </div>
      </Link>
      <div className="routes">
        <Link href="/products">
          <div className="route">
            <Image src={icon1} alt="icon" />
            <h2>Products</h2>
          </div>
        </Link>
        <Link href="/users">
          <div className="route">
            <Image src={icon2} alt="icon" />
            <h2>Users</h2>
          </div>
        </Link>
        <Link href="/posts">
          <div className="route">
            <Image src={icon3} alt="icon" />
            <h2>Posts</h2>
          </div>
        </Link>
        <Link href="/contacts">
          <div className="route">
            <Image src={icon4} alt="icon" />
            <h2>Contacts</h2>
          </div>
        </Link>
        <Link href="/agents">
          <div className="route">
            <Image src={icon5} alt="icon" />
            <h2>Agents</h2>
          </div>
        </Link>
        <Link href="/articles">
          <div className="route">
            <Image src={icon6} alt="icon" />
            <h2>Articles</h2>
          </div>
        </Link>
      </div>
      <br />
      <hr />
    </div>
  );
};

export default Dashboard;
