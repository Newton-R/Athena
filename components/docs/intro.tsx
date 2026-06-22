import { KBD } from "@/components/ui/kbd";
import { ArrowRight } from "lucide-react";
import React from "react";
import { learningTopics, tools } from "@/lib/data";
import Image from "next/image";
import { Button } from "../ui/button";

export const IntroHeader = () => {
  return (
    <div className="w-full flex mb-8 flex-col">
      {" "}
      <div className="w-full flex justify-between items-center">
        {" "}
        <span className="text-muted-foreground text-[14px]">
          Αθηνά greek for Athena{" "}
        </span>
        <Button>Github</Button>{" "}
      </div>{" "}
    </div>
  );
};

// idea flow
export const IdeaFlow = () => {
  return (
    <div className="flex mt-4 mb-2 items-center text-[14px] gap-2">
      <KBD>Idea</KBD>
      <ArrowRight size={14} />
      <KBD>Planning</KBD>
      <ArrowRight size={14} />
      <KBD>Architecture</KBD>
      <ArrowRight size={14} />
      <KBD>Execution</KBD>
    </div>
  );
};

// Learning topic Grid

const LearningTopicCard = ({
  icon,
  heading,
  description,
}: {
  icon: React.ReactNode;
  heading: string;
  description: string;
}) => {
  return (
    <div className="rounded-md mt-2 cursor-pointer hover:shadow-xl transition-all duration-400 flex flex-col border bg-secondary overflow-hidden">
      <div className="bg-background h-24 flex items-center justify-center">
        {icon}
      </div>
      <div className="border-t border-border p-4 flex flex-col">
        <span className="font-semibold">{heading}</span>
        <p className="text-[14px] mt-1 text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export const LearningTopicsGird = () => {
  return (
    <div className="grid mt-2 w-full grid-cols-1 md:grid-cols-2 gap-6">
      {learningTopics.map((topic, i) => (
        <LearningTopicCard
          key={i}
          icon={topic.icon}
          heading={topic.heading}
          description={topic.description}
        />
      ))}
    </div>
  );
};

// Tools Grid

export const ToolsGrid = () => {
  return (
    <div className="grid grid-cols-1 mt-2 md:grid-cols-2 gap-6">
      {tools.map((tool, i) => (
        <div
          key={i}
          className="rounded-md border border-border flex flex-col min-h-50 p-4"
        >
          <span className="font-semibold">{tool.name}</span>
          <div className="flex-1 flex items-center justify-center w-full">
            <Image src={tool.image} width={50} height={50} alt={tool.name} />
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            {tool.tags.map((tag, i) => (
              <span
                key={i}
                className="p-2 px-4 rounded-full text-xs gap-2 bg-primary text-white flex items-center"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
