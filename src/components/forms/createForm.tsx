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
import slugify from "react-slugify";
import { useFormState } from "react-dom";
import { useForm } from "@conform-to/react";

import { postSchema } from "@/lib/zodSchema";
import { parseWithZod } from "@conform-to/zod";
import { createBlog } from "@/actions";
import { SubmitButton } from "../submitButton";

export default function CreateForm() {
  const [image, setImage] = useState<undefined | string>(undefined);
  const [value, setValue] = useState<JSONContent | undefined>(undefined);

  const [title, setTitle] = useState<undefined | string>(undefined);
  const [slug, setSlug] = useState<undefined | string>(undefined);
  const [smallDescription, setSmallDescription] = useState<undefined | string>(
    undefined
  );

  const [lastResult, action] = useFormState(createBlog, undefined);
  const [form, fields] = useForm({
    lastResult,

    onValidate({ formData }) {
      return parseWithZod(formData, { schema: postSchema });
    },

    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  function handleSlug() {
    const titleInput = title;

    if (titleInput?.length === 0 || titleInput === undefined) {
      return toast.error("Please create a title first");
    }

    const slugVAlue = title?.toLowerCase();

    setSlug(slugify(slugVAlue));

    return toast.success("Slug has been created");
  }

  return (
    <div className="flex items-center justify-center min-h-screen w-full my-12">
      <Card className="w-[800px]">
        <CardHeader>
          <CardTitle>Create Blogs</CardTitle>
          <CardDescription>Create your blogs here...</CardDescription>
        </CardHeader>

        <CardContent>
          <form
            id={form.id}
            onSubmit={form.onSubmit}
            action={action}
            className="grid gap-4"
          >
            {/* title */}
            <div className="grid gap-3">
              <Label>Blog Title</Label>
              <Input
                placeholder="Partial Pre-rendereing in Next JS"
                key={fields.title.key}
                name={fields.title.name}
                defaultValue={fields.title.initialValue}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <p className="text-red-500 text-sm">{fields.title.errors}</p>
            </div>

            {/* slug */}
            <div className="grid gap-3">
              <Label>Slug</Label>
              <Input
                placeholder="partial-pre-rendereing-in-next-js"
                key={fields.slug.key}
                name={fields.slug.name}
                defaultValue={fields.slug.initialValue}
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
              />

              <Button
                className="w-fit"
                variant={"secondary"}
                onClick={handleSlug}
                type="button"
              >
                <Atom />
                Generate Slug
              </Button>
              <p className="text-red-500 text-sm">{fields.slug.errors}</p>
            </div>
            {/* Small description */}
            <div className="grid gap-3">
              <Label>Small Description</Label>
              <Input
                placeholder="Partial Pre-rendereing in Next JS"
                key={fields.smallDescription.key}
                name={fields.smallDescription.name}
                defaultValue={fields.smallDescription.initialValue}
                value={smallDescription}
                onChange={(e) => setSmallDescription(e.target.value)}
              />
              <p className="text-red-500 text-sm">
                {fields.smallDescription.errors}
              </p>
            </div>

            {/* Image */}
            <div className="grid gap-3">
              <Label>Cover Image</Label>

              <Input
                type="hidden"
                name={fields.coverImage.name}
                key={fields.coverImage.key}
                defaultValue={fields.coverImage.initialValue}
                value={image}
              />

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
              <p className="text-red-500 text-sm">{fields.coverImage.errors}</p>
            </div>
            {/* BLog */}
            <div className="grid gap-3">
              <Label>Blog Content</Label>

              <Input
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

            <SubmitButton text="Create Blog" />
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
