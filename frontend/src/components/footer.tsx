import { House, Menu, Search, ShoppingBag, User } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="block lg:hidden"
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        width: "100%",
        background: "#fff",
        textAlign: "center",
        padding: "10px",
        lineHeight: "60px",
      }}
    >
      <ul className="flex justify-between">
        <li>
          <a href="">
            <Menu />
          </a>
          <div className="hidden">
            <ul>
              <h1>
                <Image alt="image is missing" src="/Logo-new.webp" width={250} height={80} />
              </h1>
              <li>Shops</li>
              <li>Offers</li>
              <li>Contact</li>
              <li>Flash Sale</li>
              <li>Manufacturers/Publishers</li>
              <li>Authors</li>
              <li>FAQ</li>
              <li>Terms % Conditions</li>
              <li>Customer Refund Policy</li>
              <li>Vendor Refund Policy</li>
            </ul>
          </div>
        </li>
        <li>
          <a href="">
            <Search />
          </a>
        </li>
        <li>
          <a href="">
            <House />
          </a>
        </li>
        <li>
          <a href="">
            <ShoppingBag />
          </a>
        </li>
        <li>
          <a href="/join">
            <User />
          </a>
        </li>
      </ul>
    </footer>
  );
}
