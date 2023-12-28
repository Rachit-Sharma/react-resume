import ResumeHeader from "organisms/ResumeHeader";
import "./style.css";
import WorkExperience from "organisms/WorkExperience";
import PersonalProjects from "organisms/PersonalProjects";
import ResumeModel from "models/Resume";
import { useHead } from "organisms/HeadProvider";
import { useEffect } from "react";

interface ResumeTemplateProps {
  resumeData: ResumeModel;
}

const ResumeTemplate = (props: ResumeTemplateProps) => {
  const { setName, setSmallPhotoPath } = useHead();

  useEffect(() => {
    setName(props.resumeData.header.name.split(" ")[0]);
    setSmallPhotoPath(props.resumeData.header.images.small);
  }, [
    props.resumeData.header.images.small,
    props.resumeData.header.name,
    setName,
    setSmallPhotoPath,
  ]);

  return (
    <article className="resume">
      <ResumeHeader headerData={props.resumeData.header} />
      <WorkExperience workExperienceData={props.resumeData.workExperience} />
      {props.resumeData.personalProjects && (
        <PersonalProjects
          personalProjectsData={props.resumeData.personalProjects}
        />
      )}
    </article>
  );
};

export default ResumeTemplate;
