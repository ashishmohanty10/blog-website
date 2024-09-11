"use client";

import { UploadDropzone } from "@/app/utils/uploadthingComponents";
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
import { Textarea } from "@/components/ui/textarea";
import { Atom } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";
import TailwindEditor from "../editorWrapper";
import { SubmitButton } from "../submit-button";
import { useState } from "react";
import { JSONContent } from "novel";
import { useFormState } from "react-dom";
import { CreateArticleAction, EditPostAction } from "@/app/actions";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { postSchema } from "@/app/utils/zodSchemas";
import slugify from "react-slugify";

interface iAppProps {
  data: {
    title: string;
    slug: string;
    smallDescription: string;
    articleContent: any;
    id: string;
    image: string;
  };
  siteId: string;
}

export function EditArticleForm({ data, siteId }: iAppProps) {
  const [imageUrl, setImageurl] = useState<undefined | string>(data.image);
  const [value, setValue] = useState<JSONContent | undefined>(
    data.articleContent
  );
  const [title, setTitle] = useState<undefined | string>(data.title);
  const [slugValue, setSlugValue] = useState<undefined | string>(data.slug);

  const [lastResult, actions] = useFormState(EditPostAction, undefined);

  const [form, fields] = useForm({
    lastResult,

    onValidate({ formData }) {
      return parseWithZod(formData, {
        schema: postSchema,
      });
    },

    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  function handleSlugGenerator() {
    const titleInput = title;

    if (titleInput?.length === 0 || titleInput === undefined) {
      return toast.error("Please create a title first");
    }

    setSlugValue(slugify(titleInput));

    return toast.success("Slug created successfully");
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Articles Details</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>

      <CardContent>
        <form
          className="flex flex-col  gap-6 "
          id={form.id}
          onSubmit={form.onSubmit}
          action={actions}
        >
          <input type="hidden" name="articleId" value={data.id} />
          <input type="hidden" name="siteId" value={siteId} />
          <div className="grid gap-3">
            <Label>Title</Label>
            <Input
              placeholder="Blogging site.."
              key={fields.title.key}
              name={fields.title.name}
              defaultValue={fields.title.initialValue}
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />

            <p className="text-red-500 text-sm">{fields.title.errors}</p>
          </div>

          <div className="grid gap-3">
            <Label>Slug</Label>
            <Input
              placeholder="Article slug.."
              key={fields.slug.key}
              name={fields.slug.name}
              defaultValue={fields.slug.initialValue}
              onChange={(e) => setSlugValue(e.target.value)}
              value={slugValue}
            />
            <Button
              className="w-fit"
              variant={"secondary"}
              type="button"
              onClick={handleSlugGenerator}
            >
              <Atom className="size-4 mr-2" />
              Generate Slug
            </Button>
            <p className="text-red-500 text-sm">{fields.slug.errors}</p>
          </div>

          <div className="grid gap-3">
            <Label>Small Description</Label>
            <Textarea
              placeholder="Small Description for your article..."
              key={fields.smallDescription.key}
              name={fields.smallDescription.name}
              defaultValue={data.smallDescription}
            />
            <p className="text-red-500 text-sm">
              {fields.smallDescription.errors}
            </p>
          </div>

          <div className="grid gap-3">
            <Label>Create Image</Label>
            <input
              type="hidden"
              name={fields.coverimage.name}
              key={fields.coverimage.key}
              defaultValue={fields.coverimage.initialValue}
              value={imageUrl}
            />
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt="uploaded Img"
                className="object-cover w-[200px] h-[200px] rounded-lg"
                width={200}
                height={200}
              />
            ) : (
              <UploadDropzone
                onClientUploadComplete={(res) => {
                  setImageurl(res[0].url);
                  toast.success("Image Uploaded Successfully");
                }}
                endpoint="imageUploader"
                onUploadError={() => {
                  toast.error("Something went wrong...");
                }}
              />
            )}

            <p className="text-red-500 text-sm">{fields.coverimage.errors}</p>
          </div>

          <div className="grid gap-3">
            <Label>Article Content</Label>
            <input
              type="hidden"
              name={fields.articleContent.name}
              key={fields.articleContent.key}
              defaultValue={fields.articleContent.initialValue}
              value={JSON.stringify(value)}
            />
            <TailwindEditor onChange={setValue} initialValue={value} />
            <p className="text-red-500 text-sm">
              {fields.articleContent.errors}
            </p>
          </div>

          <SubmitButton text="Edit Article" />
        </form>
      </CardContent>
    </Card>
  );
}
