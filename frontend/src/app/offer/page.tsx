"use client";
import Footer from "@/components/footer";
import Footnav from "@/components/footnav";
import Header from "@/components/header";
import { ChevronDown, Facebook, House, Instagram, Twitter } from "lucide-react";
import Image from "next/image";

export default function offer() {
    return (
        <div>

            <Header/>
            <div className="flex items-center flex-col bg-gray-300 pt-50 pb-40">
                <h1 className="text-[35px]">Offers</h1>
                <div>
                   <ul className="flex items-center flex-row gap-2">
                    <li><House size={20}/></li>
                    <li>home</li>
                    <li><ChevronDown size={20} /></li>
                    <li>Offers</li>
                   </ul>
                </div>
            </div>
            <div className="grid items-center justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 bg-gray-200 pb-50 px-25 *:h-40 gap-4 pt-20 *:rounded">
                <Image alt="image is mising" src="/2-off.webp" width={200} height={300} />
                <Image alt="image is mising" src="/4-off.webp" width={200} height={300} />
                <Image alt="image is mising" src="/5-off.webp" width={200} height={300} />
                <Image alt="image is mising" src="/6-off.webp" width={200} height={300}/>
                <Image alt="image is mising" src="/8-off.webp" width={200} height={300}/>
                <Image className="hidden md:block" alt="image is mising" src="/10-off.webp" width={200} height={300}/>
                <Image className="hidden md:block" alt="image is mising" src="/12-off.webp" width={200} height={300}/>
                <Image className="hidden md:block" alt="image is mising" src="/15-off.webp" width={200} height={300}/>
                <Image className="hidden md:block" alt="image is mising" src="/18-off.webp" width={200} height={300}/>
                <Image className="hidden md:block" alt="image is mising" src="/20-off.webp" width={200} height={300}/>
            </div>
           <Footnav/>
           <Footer/>
        </div>
    )
}