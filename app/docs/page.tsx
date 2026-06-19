import { Button } from "@/components/ui/button";
import { GitHubIcon } from "@/components/ui/githubicon";
import { KBD } from "@/components/ui/kbd";
import { learningTopics, tools } from "@/lib/data";
import { ArrowLeft, ArrowRight, BrainIcon, ZapIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

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
    <div className="rounded-md cursor-pointer hover:shadow-xl transition-all duration-400 flex flex-col border bg-secondary overflow-hidden">
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

const IntroPage = () => {
  return (
    <div className="w-full">
      <div className="w-full flex flex-col">
        <div className="w-full flex justify-between items-center">
          <span className="text-muted-foreground text-[14px]">
            Αθηνά greek for Athena
          </span>
          <Button>Github</Button>
        </div>
      </div>
      <section id="intro" className="mt-6">
        <h1 className="font-bold text-3xl ">What is Αθηνά</h1>
        <p className="mt-8">
          Athena is an open-source AI Project Architect designed to help
          developers transform ideas into structured, actionable software
          projects.
        </p>
        <p className="mt-2">At its core, Athena helps developers move from:</p>
        <div className="flex mt-4 items-center text-[14px] gap-2">
          <KBD>Idea</KBD>
          <ArrowRight size={14} />
          <KBD>Planning</KBD>
          <ArrowRight size={14} />
          <KBD>Architecture</KBD>
          <ArrowRight size={14} />
          <KBD>Execution</KBD>
        </div>
        <div className="flex flex-col gap-4">
          <p className="mt-2">
            By analyzing project requirements, recommending technologies,
            creating development roadmaps, and breaking complex ideas into
            manageable milestones, Athena acts as a technical thinking partner
            throughout the planning process.
          </p>
          <p>
            But Athena is more than just an AI tool. It is also an educational
            project created to explore, understand, and demonstrate how modern
            agentic AI systems are built.
          </p>
        </div>
      </section>
      <section className="mt-8 py-6 border-t border-border flex flex-col gap-4">
        <h2 className="text-2xl font-bold ">What you'll learn</h2>
        <p>
          Explore the concepts, technologies, and design patterns behind modern
          AI agents through Athena's codebase, documentation, and development
          journey.
        </p>
        <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-6">
          {learningTopics.map((topic, i) => (
            <LearningTopicCard
              key={i}
              icon={topic.icon}
              heading={topic.heading}
              description={topic.description}
            />
          ))}
        </div>
      </section>
      <section className="mt-8 py-6 border-t border-border flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Tech Stack</h2>
        <p>
          Built with modern web and AI technologies, Athena combines a powerful
          application stack with AI development tools to create an intelligent,
          scalable, and open-source agent platform.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tools.map((tool, i) => (
            <div
              key={i}
              className="rounded-md border border-border flex flex-col min-h-50 p-4"
            >
              <span className="font-semibold">{tool.name}</span>
              <div className="flex-1 flex items-center justify-center w-full">
                <Image
                  src={tool.image}
                  width={50}
                  height={50}
                  alt={tool.name}
                />
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
      </section>
    </div>
  );
};

export default IntroPage;
