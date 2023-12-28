import Anchor from "atoms/Anchor";
import "atoms/card.css";
import ResumePersonalProjectsModel from "models/Resume/PersonalProjects";

interface PersonalProjectsProps {
  personalProjectsData: Array<ResumePersonalProjectsModel>;
}

const PersonalProjects = (props: PersonalProjectsProps) => {
  return (
    <section className="card">
      <h2>Personal Projects</h2>
      <ul>
        {props.personalProjectsData.map((project) => (
          <li key={project.heading}>
            <h4>{project.heading}</h4>
            <span
              dangerouslySetInnerHTML={{ __html: project.description }}
            ></span>
            {project.link && (
              <>
                <br />
                <Anchor href={project.link} />
              </>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PersonalProjects;
