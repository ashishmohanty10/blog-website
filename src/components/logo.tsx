import { PenTool } from "lucide-react";
import Link from "next/link";

export function Logo() {
  return (
    <>
      <Link href={"/"} className="text-2xl font-bold flex items-center gap-2">
        <PenTool className="size-8" />
        Inspire-Ink
      </Link>
    </>
  );
}
