"use client";
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
            <div className="flex flex-wrap bg-gray-200 pb-50 *:mx-3 *:h-40 gap-4 pt-20 *:rounded">
                <Image alt="image is mising" src="/2-off.webp" width={200} height={300} />
                <Image alt="image is mising" src="/4-off.webp" width={200} height={300} />
                <Image alt="image is mising" src="/5-off.webp" width={200} height={300} />
                <Image alt="image is mising" src="/6-off.webp" width={200} height={300}/>
                <Image alt="image is mising" src="/8-off.webp" width={200} height={300}/>
                <Image alt="image is mising" src="/10-off.webp" width={200} height={300}/>
                <Image alt="image is mising" src="/12-off.webp" width={200} height={300}/>
                <Image alt="image is mising" src="/15-off.webp" width={200} height={300}/>
                <Image alt="image is mising" src="/18-off.webp" width={200} height={300}/>
                <Image alt="image is mising" src="/20-off.webp" width={200} height={300}/>
            </div>
            <div className="flex gap-6 *:w-100 pt-40 mx-20">
            <div>
                <Image alt="image is miising" className="inline-flex h-8" src="/Logo-new.webp"
            width={250}
            height={80} />
            <p className="pt-5">NY State Thruway, New York, USA</p>
            <p className="pt-4">demo@demo.com</p>
            <p>+129290122122</p>
            <ul className="flex gap-2 pt-2">
                <li><Facebook color="#14947b" /></li>
                <li><Twitter color="#14947b" /></li>
                <li><Instagram color="#14947b"/> </li>
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
            <p className="pt-5">Subscribe your email for newsletter and featured news based on your interest</p>
            <div><form action="">
                <label htmlFor=""></label>
	        <input className="border-1" type="Gmail" id="Gmail" name="Gmail" placeholder="enter the email" required/>
            <button type="submit">submit</button>
            </form>     
            </div>
            </div>
        </div>
            <p className="pt-10 mx-20 m-10">©2025 Pickbazar. Copyright © REDQ. All rights reserved worldwide. RED</p>
            
        </div>
    )
}