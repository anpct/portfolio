import React, { useState } from "react";
import {
  SettingsIconSVG,
  ShutdownIconSVG,
  StartIconSVG,
} from "../../resources/svgs/svgs";
import {
  IconContainer,
  TaskbarContainer,
  TaskbarControl,
  TaskbarLeft,
  TaskbarListItem,
  TaskbarModal,
  TaskbarRight,
} from "./Taskbar.Styles";
import { TaskbarProps } from "./Taskbar.Types";

const appList = ["a", "b", "c"];

const Taskbar: React.FC<TaskbarProps> = (props: TaskbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleTaskbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <TaskbarContainer>
      <IconContainer onClick={toggleTaskbar}>
        <StartIconSVG />
      </IconContainer>
      {isOpen && (
        <TaskbarModal>
          <TaskbarControl>
            <IconContainer>
              <SettingsIconSVG />
            </IconContainer>
            <IconContainer>
              <ShutdownIconSVG />
            </IconContainer>
          </TaskbarControl>
          <TaskbarLeft>
            {appList.map((app) => (
              <TaskbarListItem key={app}>{app}</TaskbarListItem>
            ))}
          </TaskbarLeft>
          <TaskbarRight></TaskbarRight>
        </TaskbarModal>
      )}
    </TaskbarContainer>
  );
};

export default Taskbar;
