import "atoms/card.css";
import ResumeWorkExperienceModel from "models/Resume/WorkExperience";
import WorkExperienceSegment from "molecules/WorkExperienceSegment";

interface WorkExperienceProps {
  workExperienceData: Array<ResumeWorkExperienceModel>;
}

const WorkExperience = (props: WorkExperienceProps) => {
  return (
    <section className="card">
      <h2>Work Experience</h2>
      {props.workExperienceData.map((workExperience) => (
        <WorkExperienceSegment
          workExperience={workExperience}
          key={`${workExperience.time.from.monthIndex + 1}-${
            workExperience.time.from.year
          }`}
        />
      ))}
    </section>
  );
};

export default WorkExperience;
