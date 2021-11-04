import React, { useState, Fragment, useEffect } from "react";
import {
  MenuIconSVG,
  SettingsIconSVG,
  ShutdownIconSVG,
  StartIconSVG,
} from "../../resources/svgs/svgs";
import {
  EnabledIconsContainer,
  GroupHeader,
  IconContainer,
  IconDivider,
  TaskbarContainer,
  TaskbarControl,
  TaskbarLeft,
  TaskbarListItem,
  TaskbarListItemIcon,
  TaskbarListItemName,
  TaskbarModal,
  TimeContainer,
} from "./Taskbar.Styles";
import { TaskbarProps } from "./Taskbar.Types";

const Taskbar: React.FC<TaskbarProps> = (props: TaskbarProps) => {
  const { minimizeModal, maximizeModal, screenData, openModal } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [showList, setShowList] = useState(true);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });
  const toggleTaskbar = () => {
    setIsOpen(!isOpen);
  };
  const toggleList = () => {
    setShowList(!showList);
  };

  const data = Object.keys(screenData).reduce((r: any, e: any) => {
    const group = e[0];
    if (!r[group]) r[group] = [e];
    else r[group].push(e);
    return r;
  }, {});

  const handleClickOfItem = (screenName: string) => {
    toggleTaskbar();
    openModal(screenName);
  };

  return (
    <TaskbarContainer>
      <EnabledIconsContainer>
        <IconContainer onClick={toggleTaskbar}>
          <StartIconSVG />
        </IconContainer>
        {Object.values(screenData).map((screen) => {
          if (screen?.isOpened) {
            return (
              <IconContainer
                key={screen.screenName}
                onClick={() => {
                  screen?.isVisible
                    ? minimizeModal(screen.screenName)
                    : maximizeModal(screen.screenName);
                }}
                selected={screen?.isVisible}>
                {screen.icon}
              </IconContainer>
            );
          } else {
            return <Fragment key={screen.screenName}></Fragment>;
          }
        })}
      </EnabledIconsContainer>
      <TimeContainer>{date.toLocaleTimeString()}</TimeContainer>
      {isOpen && (
        <TaskbarModal>
          <TaskbarControl>
            <IconDivider>
              <IconContainer onClick={toggleList}>
                <MenuIconSVG />
              </IconContainer>
            </IconDivider>
            <IconDivider>
              <IconContainer
                onClick={() => {
                  handleClickOfItem("settings");
                }}>
                <SettingsIconSVG />
              </IconContainer>
              <IconContainer
                onClick={() => {
                  window.opener = self;
                  window.close();
                }}>
                <ShutdownIconSVG />
              </IconContainer>
            </IconDivider>
          </TaskbarControl>
          {showList && (
            <TaskbarLeft>
              {Object.keys(data)
                .sort()
                .map((group: string) => {
                  return (
                    <Fragment key={group}>
                      <GroupHeader>{group}</GroupHeader>
                      {data[group].map((screen: string) => (
                        <TaskbarListItem
                          key={screenData[screen].screenName}
                          onClick={() => {
                            handleClickOfItem(screenData[screen].screenName);
                          }}>
                          <TaskbarListItemIcon>
                            {screenData[screen].icon}
                          </TaskbarListItemIcon>
                          <TaskbarListItemName>
                            {screenData[screen].screenName}
                          </TaskbarListItemName>
                        </TaskbarListItem>
                      ))}
                    </Fragment>
                  );
                })}
            </TaskbarLeft>
          )}
        </TaskbarModal>
      )}
    </TaskbarContainer>
  );
};

export default Taskbar;
