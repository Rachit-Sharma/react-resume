import ImagesModel from "models/Resume/Images";
import "./style.css";

interface PassportPhotoProps {
  name: string;
  images: ImagesModel;
}

const PassportPhoto = (props: PassportPhotoProps) => {
  return (
    <picture
      className="passport-photo"
      style={{
        backgroundImage: `url("${props.images.small}")`,
      }}
    >
      <source type="image/avif" srcSet={props.images.avif} />
      <source type="image/webp" srcSet={props.images.avif} />
      <img src={props.images.jpg} alt={props.name} />
    </picture>
  );
};

export default PassportPhoto;
