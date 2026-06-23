import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen flex w-screen items-center justify-center">
      <Link href={"/docs/intro"}>
        <Button variant={"link"} className={"p-4 rounded-4xl"} size={"lg"}>
          Get Started
        </Button>
      </Link>
    </main>
  );
}
