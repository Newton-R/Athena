// components/code-block.tsx
import { codeToHtml } from "shiki";
import { CopyButton } from "./copybutton";
import Image from "next/image";

interface Props {
  children: string;
  language?: string;
  justview?: boolean;
  file?: string;
}

export async function CodeSnippetBlock({
  children,
  language = "tsx",
  justview = false,
  file,
}: Props) {
  const html = await codeToHtml(children, {
    lang: language,
    theme: "github-light",
  });

  if (file) {
    return (
      <div className="w-full my-4 rounded-lg overflow-hidden max-w-full">
        <div className="p-2 flex justify-between items-center bg-secondary">
          <div className="flex text-xs text-muted-foreground gap-2 items-center">
            <Image
              src={"/typescript.svg"}
              width={24}
              height={24}
              className="opacity-40"
              alt="move"
            />
            {file}
          </div>
          <CopyButton
            text={children}
            className="bg-transparent hover:bg-secondary w-fit rounded-md px-2.5"
          />
        </div>
        <div
          className="[&>pre]:p-4 [&>pre]:w-full [&>pre]:max-h-130 [&>pre]:max-w-205.75 [&>pre]:overflow-hidden [&>pre]:flex-1  [&>pre]:text-[14px]"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    );
  }

  if (justview) {
    return (
      <div className="relative group my-4">
        <div
          className="[&>pre]:p-4 [&>pre]:text-[14px] [&>pre]:rounded-lg"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    );
  }

  return (
    <div className="relative group my-4">
      <CopyButton
        text={children}
        className="bg-transparent absolute right-2 top-4 hover:bg-secondary w-fit rounded-md px-2.5"
      />
      <div
        className="[&>pre]:p-4 [&>pre]:w-full [&>pre]:flex-1 [&>pre]:overflow-hidden [&>pre]:max-h-100 [&>pre]:text-[14px] [&>pre]:rounded-lg"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
