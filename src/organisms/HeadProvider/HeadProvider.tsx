import { ReactNode, useState } from "react";
import { createPortal } from "react-dom";
import { HeadContextProvider, useHeadContext } from "./context";

const BareHead = () => {
  const { name, smallPhotoPath } = useHeadContext();
  return createPortal(
    <>
      <link rel="icon" type="image/svg+xml" href={smallPhotoPath} />
      <title>Resume{!name ? "" : ` | ${name}`}</title>
    </>,
    document.getElementsByTagName("head")[0],
  );
};

interface HeadProps {
  children: ReactNode;
}
const HeadProvider = (props: HeadProps) => {
  const [name, setName] = useState("");
  const [smallPhotoPath, setSmallPhotoPath] = useState("");

  return (
    <HeadContextProvider
      value={{ name, setName, smallPhotoPath, setSmallPhotoPath }}
    >
      <BareHead />
      {props.children}
    </HeadContextProvider>
  );
};

export default HeadProvider;
