import Time from "atoms/Time";
import ResumeWorkExperienceModel from "models/Resume/WorkExperience";

interface WorkExperienceSegmentProps {
  workExperience: ResumeWorkExperienceModel;
}

const WorkExperienceSegment = (props: WorkExperienceSegmentProps) => {
  return (
    <>
      <h3>
        <Time
          date={
            new Date(
              props.workExperience.time.from.year,
              props.workExperience.time.from.monthIndex,
            )
          }
        />{" "}
        -{" "}
        <Time
          date={
            !props.workExperience.time.to
              ? undefined
              : new Date(
                  props.workExperience.time.to.year,
                  props.workExperience.time.to.monthIndex,
                )
          }
        />
        <br />
        {props.workExperience.designation}, {props.workExperience.employer}
      </h3>
      <ul>
        {props.workExperience.experience.map(
          (experience, experiencePointIndex) => (
            <li key={experiencePointIndex}>{experience}</li>
          ),
        )}
      </ul>
    </>
  );
};

export default WorkExperienceSegment;
