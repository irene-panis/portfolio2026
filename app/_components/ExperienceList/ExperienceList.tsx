import { LIST_OF_EXPERIENCES, Experience } from "./_helpers";

const ExperienceList = () => {
  return (
    <div>
      <h2 className="text-muted uppercase font-semibold tracking-wider border-b-1 border-accent mb-4">Experience</h2>
      <div className="flex flex-col gap-6">
        {LIST_OF_EXPERIENCES.map((exp: Experience) => (
          <a href={`work/${exp.slug}`} key={exp.title} className="hover:bg-accent/15 transition duration-100 ease-in-out">
            <div className="flex w-full justify-between">
              <span>{exp.title}</span>
              <span className="text-sm uppercase text-muted font-semibold">{exp.type}</span>
            </div>
            <span className="text-sm text-muted italic">{exp.date}</span>
          </a>
        ))}
      </div>
    </div>
  )
}

export default ExperienceList;
