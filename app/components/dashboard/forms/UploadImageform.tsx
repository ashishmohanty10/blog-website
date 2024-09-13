"use client";

import { UploadDropzone } from "@/app/utils/uploadthingComponents";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";
import { SubmitButton } from "../submit-button";
import { toast } from "sonner";
import { UpdateSiteImage } from "@/app/actions";

interface iAppProps {
  siteId: string;
}

export function UploadImageForm({ siteId }: iAppProps) {
  const [imgUrl, setImgUrl] = useState<undefined | string>(undefined);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upload Image</CardTitle>
        <CardDescription>
          This is the image of your site, you can change it here{" "}
        </CardDescription>
      </CardHeader>

      <CardContent>
        {imgUrl ? (
          <Image
            src={imgUrl}
            alt="uploaded image"
            width={200}
            height={200}
            className="size-[200px] object-cover rounded-lg"
          />
        ) : (
          <UploadDropzone
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              setImgUrl(res[0].url);
              toast.success("Iamge has been uploaded");
            }}
            onUploadError={() => {
              toast.error("Image upload un-successfull");
            }}
          />
        )}
      </CardContent>

      <CardFooter>
        <form action={UpdateSiteImage}>
          <input type="hidden" name="siteId" value={siteId} />
          <input type="hidden" name="imageUrl" value={imgUrl} />
          <SubmitButton text="Chenge Image" />
        </form>
      </CardFooter>
    </Card>
  );
}
