"use client";

import { JSONContent } from "novel";
import { useMemo } from "react";
import { generateHTML } from "@tiptap/html";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Link from "@tiptap/extension-link";
import Text from "@tiptap/extension-text";
import Underline from "@tiptap/extension-underline";
import Heading from "@tiptap/extension-heading";
import List from "@tiptap/extension-list-item";
import BulletList from "@tiptap/extension-bullet-list";
import Code from "@tiptap/extension-code";
import BlockQuote from "@tiptap/extension-blockquote";
import CodeBlock from "@tiptap/extension-code-block";
import TextStyle from "@tiptap/extension-text-style";

export function RenderArticle({ json }: { json: JSONContent }) {
  const outPut = useMemo(() => {
    return generateHTML(json, [
      Document,
      Paragraph,
      Link,
      Text,
      Underline,
      Heading,
      List,
      BulletList,
      Code,
      BlockQuote,
      CodeBlock,
      TextStyle,
      Code,
    ]);
  }, [json]);

  return (
    <div
      className="prose m-auto w-11/12 sm:prose-lg dark:prose-invert sm:w-2/3 prose-li:marker:text-primary"
      dangerouslySetInnerHTML={{ __html: outPut }}
    ></div>
  );
}
