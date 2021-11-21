import React, { useState, Fragment, useContext } from "react";
import {
  MenuIconSVG,
  ShutdownIconSVG,
  StartIconSVG,
} from "../../resources/svgs/svgs";
import { GlobalState } from "../../state/GlobalState";
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
import useListener from "../../hooks/useListener";
import TaskbarTime from "./Taskbar.Time";

const Taskbar: React.FC<TaskbarProps> = (props: TaskbarProps) => {
  const { minimizeModal, maximizeModal, screenData, openModal } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [showList, setShowList] = useState(true);
  const { state } = useContext(GlobalState);

  const toggleTaskbar = () => {
    setIsOpen(!isOpen);
  };
  const toggleList = () => {
    setShowList(!showList);
  };
  const { childRef, parentRef } = useListener(() => setIsOpen(false));

  const data = Object.keys(screenData).reduce(
    (r: ConstructedObject, e: string) => {
      const group = e[0];
      if (!r[group]) r[group] = [e];
      else r[group].push(e);
      return r;
    },
    {},
  );

  const handleClickOfItem = (screenName: string) => {
    toggleTaskbar();
    openModal(screenName);
  };

  const maxZObj = Object.values(screenData).reduce(
    (acc, cur) => {
      if (acc?.zIndex < cur?.zIndex) {
        acc = cur;
      }
      return acc;
    },
    {
      zIndex: 0,
    },
  );

  return (
    <TaskbarContainer>
      <EnabledIconsContainer>
        <IconContainer onClick={toggleTaskbar} ref={parentRef}>
          <StartIconSVG />
        </IconContainer>
        {Object.values(screenData).map((screen) => {
          if (screen?.isOpened) {
            return (
              <IconContainer
                key={screen.screenName}
                onClick={() => {
                  screen?.isVisible && maxZObj?.screenName === screen.screenName
                    ? minimizeModal(screen.screenName)
                    : maximizeModal(screen.screenName);
                }}
                selected={
                  screen?.isVisible && maxZObj?.screenName === screen.screenName
                }>
                {screen.icon}
              </IconContainer>
            );
          } else {
            return <Fragment key={screen.screenName}></Fragment>;
          }
        })}
      </EnabledIconsContainer>
      <TimeContainer>
        <TaskbarTime />
      </TimeContainer>
      {isOpen && (
        <TaskbarModal isTransparent={state.transparency} ref={childRef}>
          <TaskbarControl>
            <IconDivider>
              <IconContainer onClick={toggleList}>
                <MenuIconSVG />
              </IconContainer>
            </IconDivider>
            <IconDivider>
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
