import Link from "next/link";
import { Logo } from "../logo";
import { Button } from "../ui/button";
import { UserDetails } from "../user/user-details";
import { Input } from "../ui/input";
import { Search } from "lucide-react";

export function BlogNavbar() {
  return (
    <>
      <div className="print:hidden h-5"></div>
      <div className="max-w-7xl min-w-[400px] mx-auto py-4 px-10 flex items-center justify-between  rounded-lg  backdrop-blur-md bg-white/5 sticky top-0 shadow-2xl z-50">
        <Logo />

        <div className="flex items-center gap-4">
          <div className="flex items-center bg-background px-4 rounded-md gap-2">
            <Search />
            <Input
              className="bg-transparent border-none focus-visible:ring-0 focus-visible:ring-offset-0"
              placeholder="Search..."
            />
          </div>

          <Button className="text-sm" asChild>
            <Link href={"/blogs/create"}>Start Blogging</Link>
          </Button>

          <UserDetails />
        </div>
      </div>
    </>
  );
}
