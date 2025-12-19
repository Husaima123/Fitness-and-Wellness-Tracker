import React from "react";
import styled from "styled-components";
import {
  FaHome,
  FaChartLine,
  FaBell,
  FaUser,
  FaBullseye,
} from "react-icons/fa";

const Footer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background: white;
  display: flex;
  justify-content: space-around;
  padding: 12px 0;
  box-shadow: 0 -5px 15px rgba(0, 0, 0, 0.15);
`;

const IconBtn = styled.button`
  background: none;
  border: none;
  font-size: 22px;
  color: #6b7280;
  cursor: pointer;

  &:hover {
    color: #7c3aed;
    transform: scale(1.15);
  }
`;

export default function FooterNav({ setPage }) {
  return (
    <Footer>
      <IconBtn onClick={() => setPage("dashboard")}>
        <FaHome />
      </IconBtn>

      <IconBtn onClick={() => setPage("progress")}>
        <FaChartLine />
      </IconBtn>

      <IconBtn onClick={() => setPage("goals")}>
        <FaBullseye />
      </IconBtn>

      <IconBtn onClick={() => setPage("notifications")}>
        <FaBell />
      </IconBtn>

      <IconBtn onClick={() => setPage("profile")}>
        <FaUser />
      </IconBtn>
    </Footer>
  );
}