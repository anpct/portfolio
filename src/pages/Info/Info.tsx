import React from "react";
import { InfoCardContainer, InfoContainer, InfoHeader } from "./Info.Styles";

const Info = () => {
  return (
    <InfoContainer>
      <InfoHeader>What am I seeing here?</InfoHeader>
      <InfoCardContainer>
        <div>Hi I am Anoop Thiparala and I am a full stack developer</div>
        <div>
          I have built this application to showcase the power of ReactJS, this
          application is built purely with React.
        </div>
        <div>
          You can learn more about me by opening the apps on the desktop
        </div>
        <div>Some features of this application are:</div>
        <div>
          <ul>
            <li>Start menu works as expected</li>
            <li>Double click on the desktop icons to open the apps</li>
            <li>Tabs allow maximizing, minimizing and resizing</li>
            <li>Tabs and icons are draggable in the bounds of the screen</li>
            <li>Clicking on shutdown closes the website</li>
          </ul>
        </div>
      </InfoCardContainer>
    </InfoContainer>
  );
};

export default Info;
