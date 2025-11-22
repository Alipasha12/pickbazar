"use client";
import Header from "@/components/header";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";

export default function shops() {
  return (
    <div>
      <Header />
      <h1 className="pt-25 text-[30px] font-bold inline-flex bg-white mx-45">
        All Shops
      </h1>
      <div></div>
      <div className="flex gap-6 *:w-100 pt-80 mx-20">
        <div>
          <Image
            alt="image is miising"
            className="inline-flex h-8"
            src="/Logo-new.webp"
            width={250}
            height={80}
          />
          <p className="pt-5">NY State Thruway, New York, USA</p>
          <p className="pt-4">demo@demo.com</p>
          <p>+129290122122</p>
          <ul className="flex gap-2 pt-2">
            <li>
              <Facebook color="#14947b" />
            </li>
            <li>
              <Twitter color="#14947b" />
            </li>
            <li>
              <Instagram color="#14947b" />{" "}
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-[20px]">Explore</h1>
          <ul className="pt-5 *:hover:text-red-700 *:cursor-pointer">
            <li>Shops</li>
            <li>Authors</li>
            <li>Flash Deals</li>
            <li>Coupon</li>
          </ul>
        </div>
        <div>
          <h1 className="text-[20px]">Customer Service</h1>
          <ul className="pt-5 *:hover:text-red-700 *:cursor-pointer">
            <li>FAQ & Helps</li>
            <li>Vendor Refund Policies</li>
            <li>Customer Refund Policies</li>
          </ul>
        </div>
        <div>
          <h1 className="text-[20px]">Our Information</h1>
          <ul className="pt-5 *:hover:text-red-700 *:cursor-pointer">
            <li>Manufacturers</li>
            <li>Privacy Policies</li>
            <li>Terms & Conditions</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div>
          <h1 className="text-[25px]">Subscribe Now</h1>
          <p className="pt-5">
            Subscribe your email for newsletter and featured news based on your
            interest
          </p>
          <div>
            <form action="">
              <label htmlFor=""></label>
              <input
                className="border-1"
                type="Gmail"
                id="Gmail"
                name="Gmail"
                placeholder="enter the email"
                required
              />
              <button type="submit">submit</button>
            </form>
          </div>
        </div>
      </div>
      <p className="pt-10 mx-20 m-10">
        ©2025 Pickbazar. Copyright © REDQ. All rights reserved worldwide. RED
      </p>
    </div>
  );
}
