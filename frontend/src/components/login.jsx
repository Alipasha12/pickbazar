import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import RegisterPage from "./register";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [Data, setData] = useState({
    email: "",
    password: "",
  });
    
  const router = useRouter();

  function handleChange(e) {
    setData({
      ...Data,
      [e.target.id]: e.target.value,
    });
  }
  async function for_login(e) {
    e.preventDefault();
    
    const res = await fetch("http://127.0.0.1:8000/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(Data),
    });
    const response = await res.json();
    if (response.token)
      router.push("/")
    else
      alert("something is invalid")
    console.log(response)
    console.log("Login response",JSON.stringify(response,null,2));
  }

  return (
    <form
      className="flex flex-col gap-7 max-h-130 max-w-full py-9"
      onSubmit={for_login}
    >
      <div className="flex flex-col items-center text-center pb-10 gap-3">
        <Image
          alt="image is missing"
          src="/Logo-new.webp"
          width={250}
          height={80}
        />
        <p>Login with gmail or password</p>
      </div>
      <div className="grid gap-4 w-full ">
        <div className="grid gap-3 w-full h-full">
          <label>Gmail</label>
          <input
            className="px-4 py-2 w-full rounded border-black border-2"
            type="email"
            id="email"
            value={Data.email}
            onChange={handleChange}
            placeholder="pickbazar@gmail.com"
            required
          />
        </div>
        <div className="grid gap-4">
          <label>Password</label>
          <input
            className="px-4 py-2 w-full rounded border-black border-2"
            type="password"
            id="password"
            value={Data.password}
            onChange={handleChange}
            placeholder="********"
            required
          />
        </div>
        <button
          className="px-4 py-2 w-full rounded border-black border-2"
          type="submit"
        >
          Log in
        </button>
      </div>
      <div className="flex gap-2 py-2 justify-center items-center">
        <span>Don't have any account?</span>
        <span>
          <Dialog>
            <DialogTrigger>register</DialogTrigger>
            <DialogContent>
              <DialogContent>
                <DialogTitle></DialogTitle>
                <DialogDescription></DialogDescription>
                <RegisterPage />
              </DialogContent>
            </DialogContent>
          </Dialog>
        </span>
      </div>
    </form>
  );
}
