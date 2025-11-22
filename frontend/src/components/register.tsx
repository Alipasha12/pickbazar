import Image from "next/image";
import LoginPage from "./login";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTrigger,
} from "./ui/dialog";

export default function RegisterPage() {

  // async function for_register() {
  //   const data = await fetch("http://127.0.0.1:8000/Register", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       long_url: "data",
  //       short_url: "sss",
  //     }),
  //   });
  //   const response = await data.json();
  //   console.log(response);
  // }


  return (
    <form className="flex flex-col gap-7 max-h-130 max-w-full">
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
            type="name"
            id="text"
            required
          />
        </div>
        <div className="grid gap-3 w-full h-full">
          <label>Gmail</label>
          <input
            className="px-4 py-2 w-full rounded border-black border-2"
            type="email"
            id="email"
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
            required
          />
        </div>
        <button
          className="px-4 py-2 w-full rounded border-black border-2"
          type="submit"
          // onClick={for_register}
        >
          Register
        </button>
      </div>
      <div className="flex gap-2 py-2 justify-center items-center">
        <span>Already have any account?</span>
        <span>
          <Dialog>
            <DialogTrigger>Login</DialogTrigger>
            <DialogContent>
              {/* <VisuallyHidden> */}
              {/* <DialogTitle></DialogTitle> */}
              <DialogDescription></DialogDescription>
              <LoginPage />
            </DialogContent>
          </Dialog>
        </span>
      </div>
    </form>
  );
}
