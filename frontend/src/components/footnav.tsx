import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";

export default function Footnav(){
    return(
        <div className="">
             <div className="grid lg:grid-cols-5 md:grid-cols-4 gap-10 pt-60 px-20">
        <div className="min-w-55">
          <Image
            alt="image is miising"
            className="inline-flex h-8"
            src="/Logo-new.webp"
            width={180}
            height={70}
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
        <div className="min-w-55">
          <h1 className="text-[20px]">Explore</h1>
          <ul className="pt-5 *:hover:text-red-700 *:cursor-pointer">
            <li>Shops</li>
            <li>Authors</li>
            <li>Flash Deals</li>
            <li>Coupon</li>
          </ul>
        </div>
        <div className="min-w-55">
          <h1 className="text-[20px]">Customer Service</h1>
          <ul className="pt-5 *:hover:text-red-700 *:cursor-pointer">
            <li>FAQ & Helps</li>
            <li>Vendor Refund Policies</li>
            <li>Customer Refund Policies</li>
          </ul>
        </div>
        <div className="min-w-55">
          <h1 className="text-[20px]">Our Information</h1>
          <ul className="pt-5 *:hover:text-red-700 *:cursor-pointer">
            <li>Manufacturers</li>
            <li>Privacy Policies</li>
            <li>Terms & Conditions</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className="min-w-55">
            <div className="bg-amber-900 w-70">
          <h1 className="text-[25px]">Subscribe Now</h1>
          <h1 className="flex flex-wrap">
            Subscribe your email for newsletter and
            featured news based on your
            interest
          </h1>
            </div>
          <div>
            <form action="">
              <input
                className="border-2 border-slate-200 rounded p-1"
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
    )
}