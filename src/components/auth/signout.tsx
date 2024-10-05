import { signOut } from "@/auth";
import { Button } from "../ui/button";

export default function Singnout() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <Button type="submit">Log out</Button>
    </form>
  );
}
