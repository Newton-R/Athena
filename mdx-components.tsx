import type { MDXComponents } from "mdx/types";
import {
  IdeaFlow,
  IntroHeader,
  LearningTopicsGird,
  ToolsGrid,
} from "./components/docs/intro";
import Link from "next/link";
import { KBD } from "./components/ui/kbd";
import { TextBlock } from "./components/ui/textblock";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CodeSnippetBlock } from "./components/ui/code-block";
import InstallationBlock from "./components/docs/installationBlock";
import { WarningBlock } from "./components/docs/warningblock";
import { RoutehandlerCodeSnippet } from "./components/docs/codesnippets/routehandler";
import {
  Boilerplateui,
  ButtonStatesUI,
  SampleMessagesMap,
  SendMessageSnippet,
  UIMessageType,
} from "./components/docs/codesnippets/boilerplateui";

const components: MDXComponents = {};

export function useMDXComponents(): MDXComponents {
  return {
    ...components,
    IdeaFlow,
    ToolsGrid,
    LearningTopicsGird,
    IntroHeader,
    KBD,
    TextBlock,
    CodeSnippetBlock,
    InstallationBlock,
    WarningBlock,
    RoutehandlerCodeSnippet,
    Boilerplateui,
    SendMessageSnippet,
    UIMessageType,
    SampleMessagesMap,
    ButtonStatesUI,
    h1: ({ children }) => (
      <h1 className="font-bold text-3xl w-full">{children}</h1>
    ),
    h2: ({ children }) => {
      const id = children?.toString().toLowerCase().replace(/\s+/g, "-");
      return (
        <h2
          id={id}
          className="text-2xl font-bold mt-8 pt-6 mb-4 border-t w-full border-border"
        >
          {children}
        </h2>
      );
    },
    h3: ({ children }) => {
      return (
        <h3 className="text-xl font-bold mt-6 mb-4 w-full ">{children}</h3>
      );
    },
    li: ({ children }) => {
      return (
        <li className="flex text-[14px] mt-1 items-center gap-2">
          <ChevronRight size={12} className="text-muted-foreground" />
          {children}
        </li>
      );
    },
    ul: ({ children }) => {
      return <ul className="mt-4 flex flex-col gap-2 mb-6">{children}</ul>;
    },
    ol: ({ children }) => {
      return (
        <ul className="mt-4 flex flex-col text-[14px] gap-2 mb-6">
          {children}
        </ul>
      );
    },
    p: ({ children }) => <p className="mt-4">{children}</p>,
    a: ({ href, children, ...props }) => {
      const isExternal = href?.startsWith("http") || href?.startsWith("https");

      if (isExternal) {
        return (
          <a
            href={href}
            className="px-2 py-1 hover:bg-link/25 cursor-pointer bg-link/20 text-link text-[14px] rounded-md"
            target="_blank"
            rel="noopener noreferrer"
            {...props}
          >
            {children}
          </a>
        );
      }

      return (
        <Link
          className="text-link underline cursor-pointer"
          href={href ?? "#"}
          {...props}
        >
          {children}
        </Link>
      );
    },
  };
}
