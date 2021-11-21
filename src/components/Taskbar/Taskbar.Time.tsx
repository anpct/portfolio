import React, { useState, useEffect } from "react";

const TaskbarTime = () => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });
  return (
    <>
      <div>
        {date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
      </div>
      <div>{date.toLocaleDateString()}</div>
    </>
  );
};

export default TaskbarTime;
