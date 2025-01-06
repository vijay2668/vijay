import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center">
          {/* <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © 2025 Vijay Singh Rathod. All rights reserved.
            </p>
          </div> */}
          <div className="flex space-x-4">
            <a
              href="https://github.com/vijay2668"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/vijay2668"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://x.com/rathodvijay2410"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary"
            >
              <Twitter className="h-6 w-6" />
            </a>
            <a
              href="mailto:vijay.rathod2668@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
