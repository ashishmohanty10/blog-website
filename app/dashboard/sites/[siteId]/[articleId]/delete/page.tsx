import { DeleteArtcle } from "@/app/actions";
import { SubmitButton } from "@/app/components/dashboard/submit-button";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function DeleteForm({
  params,
}: {
  params: {
    siteId: string;
    articleId: string;
  };
}) {
  return (
    <div className="flex flex-1 items-center justify-center">
      <Card className="max-w-xl p-5">
        <CardTitle className="mb-3">Are you absolutely sure</CardTitle>
        <CardDescription className="mb-6">
          This action cannot be undone. This will delete article and any data
          associated with it.
        </CardDescription>

        <CardFooter className="flex justify-between w-full">
          <Button variant={"secondary"} asChild>
            <Link href={`/dashboard/sites/${params.siteId}`}>Cancel</Link>
          </Button>
          <form action={DeleteArtcle}>
            <input type="hidden" name="articleId" value={params.articleId} />
            <input type="hidden" name="siteId" value={params.siteId} />
            <SubmitButton variant={"destructive"} text="Delete Article" />
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
