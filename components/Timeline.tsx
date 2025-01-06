import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const timelineEvents = [
  {
    year: "2023",
    title: "Senior Full Stack Developer",
    description: "Led development of a large-scale e-commerce platform using Next.js and Node.js."
  },
  {
    year: "2021",
    title: "Full Stack Developer",
    description: "Developed and maintained multiple web applications using React and Express."
  },
  {
    year: "2019",
    title: "Frontend Developer",
    description: "Specialized in creating responsive and accessible user interfaces with React."
  },
  {
    year: "2018",
    title: "Junior Web Developer",
    description: "Started career working on various web projects using HTML, CSS, and JavaScript."
  }
]

const Timeline = () => {
  return (
    <section id="timeline" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">My Journey</h2>
        <div className="space-y-8">
          {timelineEvents.map((event, index) => (
            <Card key={index} className="relative">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="text-primary font-bold mr-4">{event.year}</span>
                  {event.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{event.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline

