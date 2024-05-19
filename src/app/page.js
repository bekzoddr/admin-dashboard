import Image from "next/image";
import admin from "@/assets/images/admin.gif";
export default function Home() {
  return (
    <div className="home">
      <Image src={admin} alt="admin" />
      <marquee behavior="" direction="left">
        <div className="text">
          <h1 className="one">Welcome to admin panel</h1>
          <h1 className="two">Welcome to admin panel</h1>
          <h1 className="three">Welcome to admin panel</h1>
        </div>
      </marquee>
    </div>
  );
}
