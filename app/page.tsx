import { Button } from "@/components/ui/button";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Home() {
  const { getUser } = getKindeServerSession();
  const session = await getUser();

  return (
    <div className="p-10">
      <h2>Hello world</h2>
      {session ? (
        <div>
          <LogoutLink>
            <Button>Logout</Button>
          </LogoutLink>
        </div>
      ) : (
        <>
          <RegisterLink>
            <Button>Register</Button>
          </RegisterLink>
          <LoginLink>
            <Button>Login</Button>
          </LoginLink>
        </>
      )}
    </div>
  );
}