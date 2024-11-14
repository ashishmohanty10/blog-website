import { auth } from "@/auth";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Singnout from "../auth/signout";
import Link from "next/link";
import { redirect } from "next/navigation";

const userDetailsTexts = [
  {
    name: "Profile",
    href: "#",
  },

  {
    name: "Your Stories",
    href: "#",
  },

  {
    name: "Settings",
    href: "#",
  },
];

export async function UserDetails() {
  const session = await auth();
  const user = session?.user;

  if (!user) {
    redirect("/");
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src={user?.image} referrerPolicy="no-referrer" />
            <AvatarFallback className="bg-zinc-500 font-semibold text-sm">
              {user?.name
                ?.split(" ")
                .map((n) => n[0])
                .join(".")}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="px-5">
          <DropdownMenuGroup className="py-4">
            {userDetailsTexts.map((items) => (
              <Link href={items.href} key={items.name}>
                <DropdownMenuItem className="py-3 px-5">
                  {items.name}
                </DropdownMenuItem>
              </Link>
            ))}
            <DropdownMenuItem className="w-full">
              <Singnout varient="ghost" className="w-full px-5 m-0" />
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
