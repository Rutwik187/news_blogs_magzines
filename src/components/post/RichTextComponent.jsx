import React from "react";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const CustomNumberedList = ({ children }) => {
  let currentNumber = 1;

  const processChildren = (nodes) => {
    return nodes
      .map((node) => {
        if (node.listItem === "number") {
          const number = currentNumber++;
          return (
            <li key={node._key} value={number}>
              <PortableText value={node.children} />
            </li>
          );
        }
        return null;
      })
      .filter(Boolean);
  };

  return (
    <ol className="ms-4 my-8 list-decimal">{processChildren(children)}</ol>
  );
};

const PortableTextComponent = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="position-relative w-100 h-100 my-4">
          <Image
            className="object-fit-cover"
            src={urlFor(value).url()}
            alt={value.alt || " "}
            fill
          />
          {value.caption && (
            <div className="position-absolute bottom-0 start-0 bg-white bg-opacity-75 p-2 small">
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
          className="rounded my-3"
        >
          {value.code}
        </SyntaxHighlighter>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className="ms-4 my-3 list-disc">{children}</ul>
    ),
    number: CustomNumberedList,
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: CustomNumberedList,
  },
  block: {
    h1: ({ children }) => (
      <h1 className="display-4 fw-bold my-3">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="display-5 fw-bold my-3">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="display-6 fw-bold my-3">{children}</h3>
    ),
    h4: ({ children }) => <h4 className="h2 fw-bold my-3">{children}</h4>,
    h5: ({ children }) => <h5 className="h3 fw-bold my-3">{children}</h5>,
    h6: ({ children }) => <h6 className="h4 fw-bold my-3">{children}</h6>,
    blockquote: ({ children }) => (
      <blockquote className="border-start border-4 border-secondary ps-3 py-3 my-3 fst-italic">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => <p className="my-3">{children}</p>,
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
          className="text-primary text-decoration-underline hover-text-primary-dark"
        >
          {children}
        </Link>
      );
    },
    code: ({ children }) => (
      <code className="bg-light rounded p-1 font-monospace small">
        {children}
      </code>
    ),
  },
};

const RichTextComponent = ({ content }) => {
  return <PortableText value={content} components={PortableTextComponent} />;
};

export default RichTextComponent;
