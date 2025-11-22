"use client";
import Image from "next/image";
import { FaMobile } from "react-icons/fa";
import {
  Headphones,
  Plus,
  SlidersHorizontal,
  Gamepad2,
  LaptopMinimal,
  Monitor,
  Cable,
  Camera,
  Router,
  Watch,
  Speaker,
  X,
 
} from "lucide-react";
import { data } from "../offline/data";
import { useState } from "react";

import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <Header/>
      <Image
        alt="hey"
        className="flex pt-13"
        src="/Gadget-banners.webp"
        width={2560}
        height={300}
      />
      <div className="flex sticky w-full top-13 bg-white justify-between p-4 *:border-2 *:m-2 *:w-50">
        <button
          className="flex p-2 gap-8 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <SlidersHorizontal />
          Filter
        </button>
        <button className="flex p-2 gap-8">
          <Headphones />
          Gadget
        </button>
      </div>

      <div
        className={`sticky w-full max-w-screen md:max-w-1/2 h-screen grid  top-0 left-0 bottom-0 bg-gray-50 p-3 ${
          open ? "block" : "hidden"
        }`}
      >
        <nav className="flex items-center justify-between">
          <div>
            <Image alt="image is miising" className="" src="/Logo-new.webp"
            width={250}
            height={80} />
          </div>
          <div>
            <div
              className="cursor-pointer border-1 rounded-2xl bg-gray-100"
              onClick={() => setOpen(false)}
            >
              <X />
            </div>
          </div>
        </nav>
        <ul className="text-[25px]">
          <li>
            <div className="flex p-3 gap-3 text-[18px]">
              <span className="flex items-center">
                <Gamepad2 />
              </span>
              <span>Console</span>
            </div>
          </li>
          <li>
            <div className="flex p-3 gap-3 text-[18px]">
              <span className="flex items-center">
                <LaptopMinimal />
              </span>
              <span>Laptop</span>
            </div>
          </li>
          <li>
            <div className="flex p-3 gap-3 text-[18px]">
              <span className="flex items-center">
                <Monitor />
              </span>
              <span>Monitor</span>
            </div>
          </li>
          <li>
            <div className="flex p-3 gap-3 text-[18px]">
              <span className="flex items-center">
                <Cable />
              </span>
              <span>Accessories</span>
            </div>
          </li>
          <li>
            <div className="flex p-3 gap-3 text-[18px]">
              <span className="flex items-center">
                <Camera />
              </span>
              <span>Camera</span>
            </div>
          </li>
          <li>
            <div className="flex p-3 gap-3 text-[18px]">
              <span className="flex items-center">
                <Headphones />
              </span>
              <span>Headphone</span>
            </div>
          </li>
          <li>
            <div className="flex p-3 gap-3 text-[18px]">
              <span className="flex items-center">
                <FaMobile />
              </span>
              <span>Mobiles</span>
            </div>
          </li>
          <li>
            <div className="flex p-3 gap-3 text-[18px]">
              <span className="flex items-center">
                <Router />
              </span>
              <span>Router</span>
            </div>
          </li>
          <li>
            <div className="flex p-3 gap-3 text-[18px]">
              <span className="flex items-center">
                <Watch />
              </span>
              <span>Smart Watch</span>
            </div>
          </li>
          <li>
            <div className="flex p-3 gap-3 text-[18px]">
              <span className="flex items-center">
                <Speaker />
              </span>
              <span>Sound Box</span>
            </div>
          </li>
        </ul>
      </div>

      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8 justify-center items-center w-full mx-auto px-10 md:px-6">
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className="border border-slate-200 p-4 rounded-md shadow w-full"
            >
              <Image alt="" width={400} height={400} src={item.img} className="rounded" />
              <div className="flex flex-col ">
                <h1>{item.title}</h1>
                <p className="text-gray-400">{item.description}</p>
                <div className="flex justify-center border-2 hover:bg-emerald-500">
                  <div className="w-[90%] text-center">ADD</div>
                  <div className="flex border-1 rounded justify-center items-center w-[15%]">
                    <Plus />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer/>
    </div>
  );
}
