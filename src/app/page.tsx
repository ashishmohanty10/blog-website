import { Navbar } from "@/components/landing-page/Navbar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full ">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10"></div>
      <Navbar />

      <div className="mx-5 md:mx-10 lg:mx-20 flex flex-col items-center justify-center py-40 z-10">
        <h3 className="text-5xl font-extrabold text-slate-800 mb-5 underline decoration-wavy decoration-black/70 -tracking-tight">
          Your Stories,Your Platform
        </h3>

        <p className="text-base font-normal mb-8 text-slate-700">
          Transform your thoughts into stories and connect with readers who
          care. Start sharing your passion today.
        </p>

        <div className="flex items-center justify-center gap-5">
          <Button className="text-sm " variant={"default"}>
            Start Blogging
          </Button>
          <Button className="text-sm shadow-xl  " variant={"secondary"}>
            Browse Blogs
          </Button>
        </div>
      </div>
    </div>
  );
}
