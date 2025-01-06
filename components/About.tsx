import Image from "next/image";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-16 bg-muted">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/my-photo.png?height=400&width=400"
              alt="John Doe"
              width={400}
              height={400}
              className="rounded-full mx-auto"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg mb-4">
              Hi, I'm Vijay Singh Rathod, a passionate Full-Stack Developer with
              expertise in modern web technologies like React, Next.js, Tailwind
              CSS, and Node.js. I enjoy building intuitive and impactful
              applications, with one of my proudest creations being Comment.ai,
              an AI-powered web app for YouTube comment management. My
              experience also includes a UI/UX design internship, where I honed
              my skills in creating seamless user experiences.
            </p>
            <p className="text-lg mb-4">
              When I'm not coding, you can find me exploring new technologies.
            </p>

            <a href="/resume.pdf" download className="inline-block mb-4">
              <Button>Download Resume</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
