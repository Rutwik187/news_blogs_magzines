import React from "react";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const PortableTextComponent = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="relative w-full h-96 my-8">
          <Image
            className="object-cover"
            src={urlFor(value).url()}
            alt={value.alt || " "}
            fill
          />
          {value.caption && (
            <div className="absolute bottom-2 left-2 bg-white bg-opacity-75 p-2 text-sm">
              {value.caption}
            </div>
          )}
        </div>
      );
    },
    code: ({ value }) => {
      return (
        <SyntaxHighlighter
          language={value.language || "text"}
          style={atomDark}
          className="rounded-md my-4"
        >
          {value.code}
        </SyntaxHighlighter>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className="ml-10 my-5 list-disc space-y-5">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="ml-10 my-5 list-decimal space-y-5">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-5xl font-bold my-5">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-4xl font-bold my-5">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-3xl font-bold my-5">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-2xl font-bold my-5">{children}</h4>
    ),
    h5: ({ children }) => (
      <h5 className="text-xl font-bold my-5">{children}</h5>
    ),
    h6: ({ children }) => (
      <h6 className="text-lg font-bold my-5">{children}</h6>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-500 pl-5 py-5 my-5 italic">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => <p className="my-5">{children}</p>,
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      const target = value.blank ? "_blank" : undefined;
      return (
        <Link
          href={value.href}
          rel={rel}
          target={target}
          className="underline text-blue-500 hover:text-blue-700"
        >
          {children}
        </Link>
      );
    },
    code: ({ children }) => (
      <code className="bg-gray-100 rounded-md p-1 font-mono text-sm">
        {children}
      </code>
    ),
  },
};

const RichTextComponent = ({ content }) => {
  return <PortableText value={content} components={PortableTextComponent} />;
};

export default RichTextComponent;
