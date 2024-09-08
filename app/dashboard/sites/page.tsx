import { Button } from "@/components/ui/button";
import { FileIcon, PlusCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function SitePage() {
  return (
    <>
      <div className="flex justify-end w-full">
        <Button asChild>
          <Link href="/dashboard/sites/new">
            <PlusCircle className="m-2 size-4" />
            Create Site
          </Link>
        </Button>
      </div>

      <div className="flex flex-col items-center justify-center rounded-md border border-dashed p-8 text-center animate-in fade-in-10 ">
        <div className="flex size-20 items-center justify-center rounded-full bg-primary/10 ">
          <FileIcon className="size-10 text-primary " />
        </div>
        <h2 className="mt-6 text-xl fotn-semibold">
          You dont have any site created!!
        </h2>

        <p className="mb-8 mt-2 text-center text-sm leading-tight text-muted-foreground max-w-sm  mx-auto">
          You currently dont have any sites created. Please create some so that
          you can see them here!
        </p>

        <Button asChild>
          <Link href="/dashboard/sites/new">
            <PlusCircle className="m-2 size-4" />
            Create Site
          </Link>
        </Button>
      </div>
    </>
  );
}
