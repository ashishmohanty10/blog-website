import { signOut } from "@/auth";
import { Button } from "../ui/button";

interface SingnoutProps {
  varient?: "ghost" | "link" | "secondary" | "outline";
  className?: string;
}

export default function Singnout({ className, varient }: SingnoutProps) {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <Button type="submit" className={className} variant={varient}>
        Log out
      </Button>
    </form>
  );
}
