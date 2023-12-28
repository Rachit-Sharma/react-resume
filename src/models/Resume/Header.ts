import ImagesModel from "./Images";

export default interface ResumeHeaderModel {
  name: string;
  profile: string;
  phone: string;
  email: string;
  linkedIn: string;
  images: ImagesModel;
}
