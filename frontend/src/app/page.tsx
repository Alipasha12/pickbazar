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
  Apple,
  Croissant,
  BedDouble,
  Backpack,
} from "lucide-react";
import { data } from "../offline/data";
import { useState } from "react";

import Footer from "@/components/footer";
import Header from "@/components/header";
import { GiClothes, GiLipstick } from "react-icons/gi";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropDown] = useState(false);

  return (
    <div className="relative">
      <Header />
      <Image
        alt="hey"
        className="flex pt-13"
        src="/Gadget-banners.webp"
        width={2560}
        height={300}
      />
      <div className="flex sticky w-full top-[55px] bg-white justify-between p-4 *:border-2 *:m-2 *:w-50">
        <button
          className="flex p-2 gap-8 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <SlidersHorizontal />
          Filter
        </button>
        <div>
          <button
            className="flex p-2 gap-8"
            onClick={() => setDropDown(!dropdown)}
          >
            <Headphones />
            Gadget
            <div
              className={`flex bg-white z-120 top-17 right-6 w-50 ${
                dropdown ? "absolute" : "hidden"
              }`}
            >
              <ul className=" *:flex *:gap-3 *:items-center *:p-2 border-2 w-full">
                <li className="">
                  <Apple size={20} strokeWidth={0.5} />
                  Grocery
                </li>
                <li className="">
                  <Croissant size={20} strokeWidth={0.5} />
                  Bakery
                </li>
                <li className="">
                  <GiLipstick />
                  Makeup
                </li>
                <li className="">
                  <Backpack size={20} strokeWidth={0.5} />
                  Bags
                </li>
                <li className="">
                  <GiClothes />
                  Clothing
                </li>
                <li className="">
                  <BedDouble size={20} strokeWidth={0.5} />
                  Furniture
                </li>
                <li className="">
                  <Apple size={20} strokeWidth={0.5} />
                  Daily Needs
                </li>
              </ul>
            </div>
          </button>
        </div>
      </div>

      {/* filter slidebar */}

      <div
        className={`flex fixed flex-col slidebar z-120 w-full md:max-w-1/2 h-screen top-0 left-0 bottom-0 bg-gray-50 p-3 ${
          open ? "absolute" : "hidden"
        }`}
      >
        <nav className="flex items-center justify-between">
          <div>
            <Image
              alt="image is miising"
              className=""
              src="/Logo-new.webp"
              width={200}
              height={70}
            />
          </div>
          <div
            className="cursor-pointer rounded-2xl bg-gray-100"
            onClick={() => setOpen(false)}
          >
            <X />
          </div>
        </nav>
        <ul className="text-[25px]">
          <li>
            <div className="flex p-3 gap-3 text-[18px]">
              <Gamepad2 />
              Console
            </div>
          </li>
          <li>
            <div className="flex p-3 gap-3 text-[18px]">
              <LaptopMinimal />
              Laptop
            </div>
          </li>
          <li>
            <div className="flex p-3 gap-3 text-[18px]">
              <Monitor />
              Monitor
            </div>
          </li>
          <li>
            <div className="flex p-3 gap-3 text-[18px]">
              <Cable />
              Accessories
            </div>
          </li>
          <li>
            <div className="flex p-3 gap-3 text-[18px]">
              <Camera />
              Camera
            </div>
          </li>
          <li>
            <div className="flex p-3 gap-3 text-[18px]">
              <Headphones />
              Headphone
            </div>
          </li>
          <li>
            <div className="flex p-3 gap-3 text-[18px]">
              <FaMobile />
              Mobiles
            </div>
          </li>
          <li>
            <div className="flex p-3 gap-3 text-[18px]">
              <Router />
              Router
            </div>
          </li>
          <li>
            <div className="flex p-3 gap-3 text-[18px]">
              <Watch />
              Smart Watch
            </div>
          </li>
          <li>
            <div className="flex p-3 gap-3 text-[18px]">
              <Speaker />
              Sound Box
            </div>
          </li>
        </ul>
      </div>

      {/* Gadget dropdown */}

      <div
        className={` ${
          dropdown ? "top-151 z-10" : ""
        } grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8 justify-center items-center w-full mx-auto px-10 md:px-6`}
      >
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className="border border-slate-200 p-4 rounded-md shadow w-full"
            >
              <Image
                alt=""
                width={400}
                height={400}
                src={item.img}
                className="rounded"
              />
              <div className="flex flex-col ">
                <h1>{item.title}</h1>
                <p className="text-gray-400">{item.description}</p>
                <div className="flex justify-center border-2 hover:bg-emerald-500">
                  <div className="w-[90%] text-center">ADD</div>
                  <div className="flex rounded justify-center items-center w-[15%]">
                    <Plus />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
