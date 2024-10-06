"use client";

import TailwindEditor from "@/components/editor/editor-wrapper";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UploadDropzone } from "@/lib/uploadthing";
import { Atom } from "lucide-react";
import Image from "next/image";
import { JSONContent } from "novel";
import { useState } from "react";
import { toast } from "sonner";

export default function CreateRoute() {
  const [image, setImage] = useState<undefined | string>(undefined);

  const [value, setValue] = useState<JSONContent | undefined>(undefined);

  return (
    <div className="flex items-center justify-center min-h-screen w-full my-16">
      <Card className="w-[600px]">
        <CardHeader>
          <CardTitle>Create Blogs</CardTitle>
          <CardDescription>Create your blogs here...</CardDescription>
        </CardHeader>

        <CardContent className="grid gap-4">
          <div className="grid gap-3">
            <Label>Blog Title</Label>
            <Input placeholder="Partial Pre-rendereing in Next JS" />
          </div>

          <div className="grid gap-3">
            <Label>Slug</Label>
            <Input placeholder="partial-pre-rendereing-in-next-js" />

            <Button className="w-fit" variant={"secondary"}>
              <Atom />
              Generate Slug
            </Button>
          </div>

          <div className="grid gap-3">
            <Label>Small Description</Label>
            <Input placeholder="Partial Pre-rendereing in Next JS" />
          </div>

          <div className="grid gap-3">
            <Label>Cover Image</Label>

            {image ? (
              <Image
                src={image}
                alt="uploaded image"
                width={200}
                height={200}
                className="object-cover w-[200px] h-[200px] rounded-lg"
              />
            ) : (
              <UploadDropzone
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                  setImage(res[0].url);
                  toast.success("Image uploaded successfully");
                }}
                onUploadError={() => {
                  toast.error("something went wrong...");
                }}
              />
            )}
          </div>

          <div className="grid gap-3">
            <Label>Blog Content</Label>

            <TailwindEditor onChange={setValue} initialValue={value} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
