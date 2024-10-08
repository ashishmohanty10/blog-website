import { requireUser } from "@/lib/requireUser";

export default async function Blogs() {
  const user = await requireUser();

  return <h1>{user.name}</h1>;
}
