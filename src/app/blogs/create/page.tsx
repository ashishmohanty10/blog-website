import CreateForm from "@/components/forms/createForm";
import { Button } from "@/components/ui/button";
import { requireUser } from "@/lib/requireUser";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function CreateRoute() {
  const user = await requireUser();
  if (!user) {
    redirect("/api/auth/signin");
  }

  return (
    <>
      <div className="flex items-center justify-end w-[800px] mx-auto my-5">
        <Button
          size={"icon"}
          variant={"secondary"}
          className="mr-4 w-fit px-4"
          asChild
        >
          <Link href={"/blogs"}>
            <ArrowLeft size={20} className="dark:text-slate-100" />
            <span className="text-sm">Go back</span>
          </Link>
        </Button>
      </div>

      <CreateForm />
    </>
  );
}
