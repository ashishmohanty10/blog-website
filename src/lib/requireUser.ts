import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const requireUser = async () => {
  const session = await auth();
  const user = session?.user;

  if (!user) {
    return redirect("/api/auth/signin");
  }

  return user;
};
