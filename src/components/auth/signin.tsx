import { signIn } from "@/auth";
import { Button } from "../ui/button";
import { redirect } from "next/navigation";

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn();

        redirect("/blogs");
      }}
    >
      <Button type="submit">Signin</Button>
    </form>
  );
}
