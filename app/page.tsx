import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen flex w-screen items-center justify-center">
      <Button className={"p-4 rounded-4xl"} size={"lg"}>
        Get Started
      </Button>
    </main>
  );
}
