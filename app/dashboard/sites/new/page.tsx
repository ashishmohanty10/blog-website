"use client";

import { CreateSiteAction } from "@/app/actions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useActionState } from "react";
import { siteSchema } from "@/app/utils/zodSchemas";

export default function NewSitePage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center ">
      <Card className="max-w-[450px]">
        <CardHeader>
          <CardTitle>Create Site</CardTitle>
          <CardDescription>
            Create your site here.Click the button below once your done...
          </CardDescription>
        </CardHeader>

        <form>
          <CardContent>
            <div className="flex flex-col gap-y-6 ">
              <div className="flex flex-col gap-3">
                <Label>Site Name</Label>
                <Input type="" placeholder="Site name..." />
              </div>
              <div className="flex flex-col gap-3">
                <Label>Sub-Directory</Label>
                <Input type="" placeholder="Sub-directory name..." />
              </div>
              <div className="flex flex-col gap-3">
                <Label>Description</Label>
                <Textarea placeholder="Small description for your site..." />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button>Submit</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
