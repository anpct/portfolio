import React, { useState, Fragment, useEffect } from "react";
import Loader from "../components/Loader/Loader";
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
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
    }, 2000);
  }, []);

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
    let maxZ = 0;
    Object.values(screenData).forEach((screen: ConstructedObject) => {
      //dataCopy[screen.screenName]["isVisible"] = false;
      if (maxZ < dataCopy[screen.screenName]["zIndex"]) {
        maxZ = dataCopy[screen.screenName]["zIndex"];
      }
    });
    dataCopy[screenName]["isOpened"] = true;
    dataCopy[screenName]["isVisible"] = true;
    dataCopy[screenName]["zIndex"] = maxZ + 1;
    setScreenData({ ...dataCopy });
  };

  const maximizeModal = (screenName: string) => {
    const dataCopy = { ...screenData };
    let maxZ = 0;
    Object.values(screenData).forEach((screen: ConstructedObject) => {
      //dataCopy[screen.screenName]["isVisible"] = false;
      if (maxZ < dataCopy[screen.screenName]["zIndex"]) {
        maxZ = dataCopy[screen.screenName]["zIndex"];
      }
    });
    dataCopy[screenName]["isVisible"] = true;
    dataCopy[screenName]["zIndex"] = maxZ + 1;
    setScreenData({ ...dataCopy });
  };

  const onFocus = (screenName: string) => {
    const dataCopy = { ...screenData };
    let maxZ = 0;
    Object.values(screenData).forEach((screen: ConstructedObject) => {
      if (maxZ < dataCopy[screen.screenName]["zIndex"]) {
        maxZ = dataCopy[screen.screenName]["zIndex"];
      }
    });
    if (dataCopy[screenName]["zIndex"] < maxZ) {
      dataCopy[screenName]["zIndex"] = maxZ + 1;
      setScreenData({ ...dataCopy });
    }
  };

  return (
    <BaseContainer>
      {showLoader && <Loader />}
      <ScreenContainer>
        <Desktop openModal={openModal} screenData={screenData} />
        {Object.values(screenData).map((screen) => (
          <Fragment key={screen.screenName}>
            {screen.isOpened && screen.isVisible && (
              <ScreenModal
                closeModal={closeModal}
                minimizeModal={minimizeModal}
                onFocus={onFocus}
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
