import React from "react";
import styled from "styled-components";
import { FaBell } from "react-icons/fa";

/* Card */
const Card = styled.div`
  background: white;
  padding: 30px;
  border-radius: 30px;
  box-shadow: 0 15px 35px rgba(0,0,0,0.2);
  width: 340px;
  text-align: center;
  position: relative;
`;

/* Bell icon */
const Bell = styled.div`
  font-size: 40px;
  color: #ef4444;
  margin-bottom: 15px;
`;

/* Title */
const Title = styled.h2`
  font-size: 22px;
  color: #dc2626;
  margin-bottom: 10px;
`;

/* Notification list */
const List = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

/* Notification item */
const Item = styled.div`
  background: #fef2f2;
  padding: 12px;
  border-radius: 15px;
  font-size: 14px;
  color: #7f1d1d;
`;

/* Empty text */
const Empty = styled.p`
  color: #6b7280;
  font-size: 14px;
`;

export default function Notifications() {
  // dummy data
  const notifications = [
    "🔥 You reached 6,000 steps today!",
    "💧 Don't forget to drink water",
    "⏰ Workout reminder at 6:00 PM",
  ];

  return (
    <Card>
      <Bell>
        <FaBell />
      </Bell>

      <Title>Notifications</Title>

      {notifications.length === 0 ? (
        <Empty>No new notifications</Empty>
      ) : (
        <List>
          {notifications.map((note, index) => (
            <Item key={index}>{note}</Item>
          ))}
        </List>
      )}
    </Card>
  );
}