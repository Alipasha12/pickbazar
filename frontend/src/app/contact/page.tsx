"use client";
import Header from "@/components/header";
import {
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import Image from "next/image";

export default function Contact() {
  return (
    <div>
      <div className="bg-gray-200">
        <Header />
        <div className="flex gap-4 px-40 py-40 ">
          <div className="bg-white p-5 rounded-xl">
            <Image
              alt="image is missing"
              className="mx-5 mt-10"
              src="/illusion.svg"
              width={300}
              height={400}
            />
            <h1 className="pt-4 text-[18px] font-semibold">Address</h1>
            <p className="pt-2">NY State Thurway, New York, USA</p>
            <h1 className="pt-4 text-[18px] font-semibold">Phone</h1>
            <p className="pt-2">+129290122122</p>
            <h1 className="pt-4 text-[18px] font-semibold">Email Address</h1>
            <p className="pt-2">demo@demo.com</p>
            <h1 className="pt-4 text-[18px] font-semibold">Website</h1>
            <p className="pt-2">https://redq.io</p>
            <h1 className="pt-4 text-[18px] font-semibold">Follow Us</h1>
            <ul className="flex gap-8 pt-2">
              <li>
                <Facebook />
              </li>
              <li>
                <Twitter />
              </li>
              <li>
                <Instagram />
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-5">
            <h1 className="text-[30px]">How can we improve your experience?</h1>
            <form>
              <div className="flex pt-4 gap-3">
                <div>
                  <label>Name</label>
                  <br />
                  <input
                    className="w-93 h-10 rounded border-2"
                    type="text"
                    id="name"
                    required
                  />
                </div>
                <div>
                  <label>Email</label>
                  <br />
                  <input
                    className="w-93 h-10 rounded border-2"
                    type="email"
                    id="email"
                    required
                  />
                </div>
              </div>
              <div className="pt-4">
                <label className="">Subject</label>
                <br />
                <input
                  className="w-full h-10 rounded border-2"
                  type="text"
                  id="text"
                  required
                />
              </div>
              <div className="pt-4">
                <label>Description</label>
                <br />
                <textarea
                  className="rounded border-2 w-full h-50"
                  id="comment"
                  name="comment"
                  placeholder="Type your description here..."
                ></textarea>
                <button type="submit" className="border-2 rounded p-2 bg-emerald-500">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="flex gap-6 *:w-100 pt-40 mx-20">
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
              <input
                className="border-1"
                type="Gmail"
                id="Gmail"
                name="Gmail"
                placeholder="enter the email"
                required
              />
              <button>submit</button>
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
