import Image from "next/image";
import LoginPage from "./login";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

import { useState } from "react";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  }

  async function for_register(e) {
    e.preventDefault();

    const res = await fetch("http://127.0.0.1:8000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const response = await res.json();
    console.log(response);
  }

  return (
    <form
      onSubmit={for_register}
      className="flex flex-col gap-7 max-h-130 max-w-full"
    >
      <div className="flex flex-col items-center text-center pb-3 gap-3">
        <Image
          alt="image is missing"
          src="/Logo-new.webp"
          width={250}
          height={80}
        />
        <p>By signing up, you agree to our terms & policy</p>
      </div>

      <div className="grid gap-4 w-full ">
        <div className="grid gap-3 w-full h-full">
          <label>Name</label>
          <input
            className="px-4 py-2 w-full rounded border-black border-2"
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="grid gap-3 w-full h-full">
          <label>Gmail</label>
          <input
            className="px-4 py-2 w-full rounded border-black border-2"
            type="email"
            id="email"
            value={formData.email}
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
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 w-full rounded border-black border-2"
        >
          Register
        </button>
      </div>

      <div className="flex gap-2 py-2 justify-center items-center">
        <span>Already have an account?</span>

        <Dialog>
          <DialogTrigger>Login</DialogTrigger>

          <DialogContent>
            <DialogTitle>Login</DialogTitle>
            <DialogDescription>Please log in to continue.</DialogDescription>

            <LoginPage />
          </DialogContent>
        </Dialog>
      </div>
    </form>
  );
}
