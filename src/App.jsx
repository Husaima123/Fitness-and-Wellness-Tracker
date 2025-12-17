import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

import Dashboard from "./components/Dashboard";
import Progress from "./components/Progress";
import Notifications from "./components/Notifications";
import Profile from "./components/Profile";
import Goals from "./components/Goals";          // 👈 NEW
import FooterNav from "./components/FooterNav";
import ClockBar from "./components/ClockBar";

/* Global styles */
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    background: linear-gradient(to bottom, #c084fc, #fbcfe8, #fef3c7);
  }
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export default function App() {
  const [page, setPage] = useState("dashboard");

  const renderPage = () => {
    switch (page) {
      case "dashboard":
        return <Dashboard />;
      case "progress":
        return <Progress />;
      case "notifications":
        return <Notifications />;
      case "profile":
        return <Profile />;
      case "goals":
        return <Goals />;          // 👈 Goals page
      default:
        return <Dashboard />;
    }
  };

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <ClockBar />
        <MainContent>{renderPage()}</MainContent>
        <FooterNav setPage={setPage} />
      </AppContainer>
    </>
  );
}
