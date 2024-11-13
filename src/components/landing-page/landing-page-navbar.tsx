import Link from "next/link";
import SignIn from "../auth/signin";
import { auth } from "@/auth";
import Singnout from "../auth/signout";
import { Button } from "../ui/button";
import X from "@/../public/logo-black.png";
import Image from "next/image";
import { ModeToggle } from "../theme/theme-toggler";
import { Logo } from "../logo";

export async function Navbar() {
  const session = await auth();
  const user = session?.user;

  return (
    <>
      <div className="print:hidden h-5"></div>
      <nav className="max-w-7xl min-w-[400px] mx-auto py-4 px-10 flex items-center justify-between  rounded-lg  backdrop-blur-sm bg-white/5 sticky top-0 shadow-2xl z-50">
        <Logo />

        <div className="flex items-center gap-4">
          <ModeToggle />
          <Button
            size={"icon"}
            variant={"secondary"}
            className="rounded-full relative dark:bg-foreground"
            asChild
          >
            <Link href="https://x.com/tw_sk1llz" target="_blank">
              <div className="w-2 h-2 rounded-full bg-green-500 absolute top-0 right-1 animate-pulse"></div>
              <Image src={X} alt="X logo " className="size-4" />
            </Link>
          </Button>

          {user ? <Singnout /> : <SignIn />}
        </div>
      </nav>
    </>
  );
}
