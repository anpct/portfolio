import React, { useState, Fragment } from "react";
import ScreenModal from "../components/ScreenModal/ScreenModal";
import Taskbar from "../components/Taskbar/Taskbar";
import Desktop from "../pages/Desktop/Desktop";
import screenDetails from "./Layout.Data";
import {
  BaseContainer,
  ControllerContainer,
  ScreenContainer,
} from "./Layout.Styles";

const Layout = () => {
  const [screenData, setScreenData] = useState<ConstructedObject>({
    ...screenDetails,
  });

  const closeModal = (screenName: string) => {
    const currentObject = { ...screenData[screenName] };
    currentObject["isOpened"] = false;
    currentObject["isVisible"] = false;
    setScreenData({ ...screenData, [screenName]: currentObject });
  };

  const minimizeModal = (screenName: string) => {
    const currentObject = { ...screenData[screenName] };
    currentObject["isVisible"] = false;
    setScreenData({ ...screenData, [screenName]: currentObject });
  };

  const openModal = (screenName: string) => {
    const dataCopy = { ...screenData };
    Object.values(screenData).forEach((screen: ConstructedObject) => {
      dataCopy[screen.screenName]["isVisible"] = false;
    });
    dataCopy[screenName]["isOpened"] = true;
    dataCopy[screenName]["isVisible"] = true;
    setScreenData({ ...dataCopy });
  };

  const maximizeModal = (screenName: string) => {
    const dataCopy = { ...screenData };
    Object.values(screenData).forEach((screen: ConstructedObject) => {
      dataCopy[screen.screenName]["isVisible"] = false;
    });
    dataCopy[screenName]["isVisible"] = true;
    setScreenData({ ...dataCopy });
  };

  return (
    <BaseContainer>
      <ScreenContainer>
        <Desktop openModal={openModal} screenData={screenData} />
        {Object.values(screenData).map((screen) => (
          <Fragment key={screen.screenName}>
            {screen.isOpened && screen.isVisible && (
              <ScreenModal
                closeModal={closeModal}
                minimizeModal={minimizeModal}
                screen={screen}>
                {screen.component}
              </ScreenModal>
            )}
          </Fragment>
        ))}
      </ScreenContainer>
      <ControllerContainer>
        <Taskbar
          maximizeModal={maximizeModal}
          minimizeModal={minimizeModal}
          screenData={screenData}
          openModal={openModal}
        />
      </ControllerContainer>
    </BaseContainer>
  );
};

export default Layout;
