import ResumeHeaderModel from "./Header";
import ResumePersonalProjectsModel from "./PersonalProjects";
import ResumeWorkExperienceModel from "./WorkExperience";

export default interface ResumeModel {
  header: ResumeHeaderModel;
  workExperience: Array<ResumeWorkExperienceModel>;
  personalProjects?: Array<ResumePersonalProjectsModel>;
}
