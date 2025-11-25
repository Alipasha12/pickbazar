"use client";
import Header from "@/components/header";
import { Facebook, Instagram, MapPin, Twitter } from "lucide-react";
import Image from "next/image";
import Shop from "@/offline/shop";
import Footnav from "@/components/footnav";

export default function shops() {
  return (
    <div>
      <Header />
      <h1 className="pt-25 text-[30px] font-bold inline-flex bg-white mx-45">
        All Shops
      </h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 pt-10 px-20 sm:px-30 xl:px-50 ">
        {Shop.map((item: any) => (
          <div
            key={item.id}
            className="border-slate-200 p-4 rounded-md shadow w-full"
          >
            <div className="flex gap-4 items-center">
              <div >
                <Image
                  alt={item.title}
                  width={65}
                  height={65}
                  src={item.img}
                  className="rounded-4xl"
                />
              </div>
              <div className="mt-2">
                <h1 className="text-lg font-medium pl-1">{item.description}</h1>
                <h1 className="flex gap-1 pt-2 text-xs cursor-pointer"><MapPin size={16} strokeWidth={0.5} />{item.title}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>

   <Footnav/>
    </div>
  );
}
