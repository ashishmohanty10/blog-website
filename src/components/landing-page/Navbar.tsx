import Link from "next/link";
import SignIn from "../auth/signin";
import { auth } from "@/auth";
import Singnout from "../auth/signout";
import { PenTool } from "lucide-react";
import { Button } from "../ui/button";
import X from "@/../public/logo-black.png";
import Image from "next/image";

export async function Navbar() {
  const session = await auth();
  const user = session?.user;

  return (
    <>
      <div className="print:hidden h-5"></div>
      <nav className="max-w-7xl min-w-[400px] mx-auto py-4 px-10 flex items-center justify-between  rounded-md  backdrop-blur-sm bg-white/30 sticky top-0 shadow-2xl z-50">
        <Link href={"/"} className="text-2xl font-bold flex items-center gap-2">
          <PenTool className="size-8" />
          Inspire-Ink
        </Link>

        <div className="flex items-center gap-4">
          {user ? <Singnout /> : <SignIn />}

          <Button
            size={"icon"}
            variant={"secondary"}
            className="rounded-full relative"
            asChild
          >
            <Link href={"https://github.com/ashishmohanty10"} target="_blank">
              <div className="w-2 h-2 rounded-full bg-green-500 absolute top-0 right-1 animate-pulse"></div>
              <Image src={X} alt="X logo " className="size-4" />
            </Link>
          </Button>
        </div>
      </nav>
    </>
  );
}