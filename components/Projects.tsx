import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "AnswerSnap",
    description:
      "Screenshot questions, get instant AI answers, and simplify your studies effortlessly!",
    technologies: ["React", "WXT.dev", "OpenAI", "TailwindCSS"],
    github: "",
    live: "https://chromewebstore.google.com/detail/answersnap/ojjadfolfaejifdmgodfoldppkjjfldg?hl=en&authuser=0"
  },
  {
    title: "Comment.ai",
    description:
      "AI-powered tool for managing YouTube comments with sentiment analysis, grouping, and bulk actions.",
    technologies: [
      "MongoDB",
      "Express",
      "ReactJS",
      "NodeJS",
      "TailwindCSS",
      "LemonSqueezy",
      "OpenAI"
    ],
    github: "",
    live: "https://comment-ai-beta.vercel.app"
  },
  {
    title: "DocMate",
    description:
      "SaaS for chatbot integration with FAQs, training, and easy deployment via copy-paste.",
    technologies: [
      "NextJS",
      "Vanilla JavaScript",
      "TailwindCSS",
      "MongoDB",
      "Python",
      "OpenAI"
    ],
    github: "",
    live: "https://docmate.vercel.app"
  },
  {
    title: "Todo List Webapp",
    description:
      "A simple, easy-to-use todo list webapp that helps you stay organized and on track",
    technologies: ["NextJS", "JavaScript", "TailwindCSS"],
    github: "https://github.com/vijay2668/todo-list",
    live: "https://todo-list-4u.netlify.app"
  },
  {
    title: "Background Generator",
    description: "Make Customizable Backgrounds",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/vijay2668/Background-Generator",
    live: "https://backgroundgenerator2668.netlify.app"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter
                className={cn(
                  project?.github ? "justify-between" : "justify-end",
                  "flex"
                )}
              >
                {project?.github && (
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project?.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                )}
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
