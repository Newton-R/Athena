import { notFound } from "next/navigation";

const docs: Record<string, () => Promise<any>> = {
  started: () => import("@/mdx/docs/started.mdx"),
  intro: () => import("@/mdx/docs/intro.mdx"),
  vercel: () => import("@/mdx/docs/vercel.mdx"),
  useChat: () => import("@/mdx/docs/useChat.mdx"),
};

export async function generateStaticParams() {
  return Object.keys(docs).map((slug) => ({ slug }));
}

export default async function DocPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const load = docs[slug];

  if (!load) notFound();

  const { default: Content } = await load();

  return (
    <div className="w-full">
      <Content />
    </div>
  );
}
