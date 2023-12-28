import Anchor from "atoms/Anchor";
import PassportPhoto from "atoms/PassportPhoto";
import "atoms/card.css";
import "./style.css";
import ResumeHeaderModel from "models/Resume/Header";

interface ResumeHeaderProps {
  headerData: ResumeHeaderModel;
}

const ResumeHeader = (props: ResumeHeaderProps) => {
  return (
    <header className="card">
      <h1>{props.headerData.name}</h1>
      <p>
        {props.headerData.profile}
        <br />
        Phone: {props.headerData.phone}
        <br />
        Email: <Anchor email href={props.headerData.email} />
        <br />
        LinkedIn: <Anchor href={props.headerData.linkedIn} />
      </p>
      <PassportPhoto
        images={props.headerData.images}
        name={props.headerData.name}
      />
    </header>
  );
};

export default ResumeHeader;
