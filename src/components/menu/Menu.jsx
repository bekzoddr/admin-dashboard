import React from "react";
import Image from "next/image";
import ava from "@/assets/images/photo.svg";
import menu from "@/assets/images/menu.svg";
const Menu = () => {
  return (
    <div className="menu">
      <button>
        <Image src={menu} alt="menu" />
      </button>
      <Image className="ava" src={ava} alt="avatar" />
    </div>
  );
};

export default Menu;
