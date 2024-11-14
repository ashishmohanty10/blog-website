import { Background } from "@/components/background";
import { Navbar } from "@/components/landing-page/landing-page-navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="relative min-h-screen w-full dark:bg-zinc-900">
      <Background />
      <Navbar />

      <div className="mx-5 md:mx-10 lg:mx-20 flex flex-col items-center justify-center py-36 z-50">
        <h3 className="text-5xl font-extrabold text-slate-800 mb-5 underline decoration-wavy decoration-black/70 dark:decoration-slate-300 -tracking-tight dark:text-slate-50">
          Your Stories,Your Platform
        </h3>

        <p className="text-base font-normal mb-8 text-slate-700 dark:text-slate-200">
          Transform your thoughts into stories and connect with readers who
          care. Start sharing your passion today.
        </p>

        <div className="flex items-center justify-center gap-5 z-50">
          <Button className="text-sm" variant={"default"} asChild>
            <Link href={"/blogs/create"}>Start Blogging</Link>
          </Button>
          <Button asChild className="text-sm shadow-xl  " variant={"secondary"}>
            <Link href={"/blogs"}>Browse Blogs</Link>
          </Button>
        </div>

        <div className="w-[850px] h-[500px] bg-gradient-to-r from-zinc-900 to-zinc-400  rounded-xl  my-10 shadow-2xl p-3">
          <div className="h-full w-full dark:bg-zinc-800"></div>
        </div>
      </div>
    </div>
  );
}
