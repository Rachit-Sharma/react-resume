import { useEffect, useState } from "react";
import Spinner from "atoms/Spinner";
import ResumeTemplate from "templates/ResumeTemplate";
import ResumeModel from "models/Resume";

const ResumePage = () => {
  const [resumeData, setResumeData] = useState<ResumeModel>();
  const [error, setError] = useState<unknown>();
  if (error) throw error;

  let resumePath = "/rachit";
  const actualPathSegments = window.location.pathname.split("/");
  if (actualPathSegments.length > 2) {
    throw new Error("Invalid path in the URL");
  } else if (actualPathSegments.length === 2 && actualPathSegments[1] !== "") {
    resumePath = window.location.pathname;
  }

  useEffect(() => {
    const abortController = new AbortController();
    (async () => {
      try {
        const response = await fetch(`${resumePath}.json`, {
          signal: abortController.signal,
          cache: "no-cache",
        });
        const data = await response.json();
        setResumeData(data);
      } catch (error) {
        console.error(error);
        if (!(error instanceof DOMException)) {
          setError(error);
        }
      }
    })();
    return () => {
      abortController.abort();
    };
  }, [resumePath]);

  return (
    <main>
      {!resumeData ? <Spinner /> : <ResumeTemplate resumeData={resumeData} />}
    </main>
  );
};

export default ResumePage;
