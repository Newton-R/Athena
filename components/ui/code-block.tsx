// components/code-block.tsx
import { codeToHtml } from "shiki";
import { CopyButton } from "./copybutton";

interface Props {
  children: string;
  language?: string;
}

export async function CodeBlock({ children, language = "tsx" }: Props) {
  const html = await codeToHtml(children, {
    lang: language,
    theme: "vitesse-dark",
  });

  return (
    <div className="relative group">
      <CopyButton text={children} />
      <div className="p-2" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
