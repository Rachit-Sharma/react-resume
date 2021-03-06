import React from "react";
import {
  FlexRow,
  FrostedPanel,
  H2Link,
  Heading1,
  Heading2,
  Photograph
} from "../../shared/components";
import personalData from "../../shared/data/personal.json";

function Header() {
  return (
    <FrostedPanel>
      <FlexRow>
        <div>
          <Heading1>{personalData.name}</Heading1>
          <Heading2>{personalData.profile}</Heading2>
          <Heading2>Phone: {personalData.phone}</Heading2>
          <Heading2>Email: {personalData.email}</Heading2>
          <Heading2>
            LinkedIn:{" "}
            <H2Link href={personalData.linkedIn}>
              {personalData.linkedIn}
            </H2Link>
          </Heading2>
        </div>
        <Photograph src={personalData.image} alt={personalData.name} />
      </FlexRow>
    </FrostedPanel>
  );
}

export default Header;
