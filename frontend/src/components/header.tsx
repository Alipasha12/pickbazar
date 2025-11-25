import { ChevronDown, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "./ui/dialog";
import LoginPage from "./login";

export default function Header(){

    return(
        <div className="flex justify-between fixed w-full p-3 px-10 bg-white">
        <div className=" h-10 w-60 flex">
          <Image
            alt="image is missing"
            className="bg-cover"
            src="/Logo-new.webp"
            width={200}
            height={70}
          />
        </div>
        <div className="">
          <ul className="flex flex-row gap-6 pr-4 ">
            <li className="p-2 hidden lg:block hover:text-emerald-500">
              <Link href="/shops">Shops</Link>
            </li>
            <li className="p-2 hidden lg:block hover:text-emerald-500">
              <Link href="/offer">Offers</Link>
            </li>
            <li className="p-2 hidden lg:block hover:text-emerald-500">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="relative hidden lg:block p-2 group">
              <button className="flex items-center gap-1">
                Pages
                <ChevronDown />
              </button>

              <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg border rounded-md hidden group-hover:block">
                <li className="p-2 hover:bg-gray-100">Flash Sale</li>
                <li className="p-2 hover:bg-gray-100">
                  Manufacturers/Publishers
                </li>
                <li className="p-2 hover:bg-gray-100">Authors</li>
                <li className="p-2 hover:bg-gray-100">FAQ</li>
                <li className="p-2 hover:bg-gray-100">Terms & Condition</li>
                <li className="p-2 hover:bg-gray-100">
                  Customer Refund Policy
                </li>
                <li className="p-2 hover:bg-gray-100">Vendor Refund Policy</li>
              </ul>
            </li>

            <li className="hidden lg:block p-2 h-11 border-2 rounded-3xl  ">
              <Search />
            </li>
            <li className="hidden lg:block h-10 w-13 text-white bg-emerald-500 p-2 rounded">
              <Dialog>
                <DialogTrigger>Join</DialogTrigger>
                <DialogContent>
                  {/* <DialogTitle>DASD</DialogTitle> */}
                  {/* <DialogDescription>DASDAS</DialogDescription> */}
                  <LoginPage />
                </DialogContent>
              </Dialog>
            </li>
            <div className="hidden md:block h-10 w-32 text-white bg-emerald-500 p-2 justify-center rounded">
              Become a Seller
            </div>
          </ul>
        </div>
      </div>
    )
}