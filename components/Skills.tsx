import { Badge } from "@/components/ui/badge";

const skills = [
  {
    category: "Frontend",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "ReactJS",
      "NextJS",
      "Tailwind CSS"
    ]
  },
  { category: "Backend", items: ["Node.js", "Express", "Python"] },
  { category: "Databases", items: ["MongoDB", "Firebase"] },
  {
    category: "Other",
    items: ["Git", "RESTful APIs", "WebSockets", "OpenAI", "Lemon Squeezy"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-card rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-4">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
