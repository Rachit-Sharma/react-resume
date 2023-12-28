export default interface ResumeWorkExperienceModel {
  time: {
    from: {
      year: number;
      monthIndex: number;
    };
    to?: {
      year: number;
      monthIndex: number;
    };
  };
  designation: string;
  employer: string;
  experience: Array<string>;
}
