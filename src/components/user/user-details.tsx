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

export async function UserDetails() {
  const session = await auth();
  const user = session?.user;

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src={user?.image} />
            <AvatarFallback className="font-semibold text-sm">
              {user?.name?.slice(0, 1)}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="px-5">
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Link href="#">Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="#">Your Stories</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="#">Settings</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>{user?.email}</DropdownMenuItem>
            <DropdownMenuItem className="w-full ">
              <Singnout varient="outline" className="w-full" />
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
