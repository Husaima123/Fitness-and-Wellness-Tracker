import React, { useState, useEffect } from "react";
import styled from "styled-components";

const TopBar = styled.div`
  width: 100%;
  background: rgba(255, 255, 255, 0.8);
  padding: 15px 0;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  color: #4b5563;
  box-shadow: 0 3px 10px rgba(0,0,0,0.1);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  backdrop-filter: blur(5px);
`;

export default function ClockBar() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString();
  const formattedDate = currentTime.toLocaleDateString();

  return (
    <TopBar>
      {formattedDate} | {formattedTime}
    </TopBar>
  );
}
