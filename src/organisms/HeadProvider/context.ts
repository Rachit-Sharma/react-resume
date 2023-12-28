import { Dispatch, SetStateAction, createContext, useContext } from "react";

interface HeadContextValue {
  name: string;
  smallPhotoPath: string;
}

interface HeadContextSetters {
  setName: Dispatch<SetStateAction<string>>;
  setSmallPhotoPath: Dispatch<SetStateAction<string>>;
}

export const headContext = createContext<HeadContextValue & HeadContextSetters>(
  {
    name: "",
    setName: (_args: SetStateAction<string>) => {},
    smallPhotoPath: "",
    setSmallPhotoPath: (_args: SetStateAction<string>) => {},
  },
);

export const { Provider: HeadContextProvider } = headContext;

export const useHeadContext = () => {
  const { name, smallPhotoPath } = useContext(headContext);

  return { name, smallPhotoPath };
};

export const useHead = () => {
  const { setName, setSmallPhotoPath } = useContext(headContext);

  return { setName, setSmallPhotoPath };
};
