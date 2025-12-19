import React from "react";
import styled from "styled-components";
import { FaUserCircle, FaWeight, FaBirthdayCake, FaHeartbeat } from "react-icons/fa";

/* Card */
const Card = styled.div`
  background: white;
  padding: 30px;
  border-radius: 30px;
  box-shadow: 0 15px 35px rgba(0,0,0,0.2);
  width: 340px;
  text-align: center;
`;

/* Avatar */
const Avatar = styled.div`
  font-size: 80px;
  color: #3b82f6;
  margin-bottom: 10px;
`;

/* Name */
const Name = styled.h2`
  margin: 10px 0 20px;
  color: #1f2933;
`;

/* Info list */
const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

/* Row */
const Row = styled.div`
  background: #eff6ff;
  padding: 12px 16px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  color: #1e40af;
`;

/* Icon */
const Icon = styled.span`
  font-size: 18px;
  color: #2563eb;
`;

export default function Profile() {
  // Dummy user data
  const user = {
    name: "John Doe",
    age: 25,
    weight: "70 kg",
    heartRate: "98 bpm",
  };

  return (
    <Card>
      <Avatar>
        <FaUserCircle />
      </Avatar>

      <Name>{user.name}</Name>

      <Info>
        <Row>
          <Icon><FaBirthdayCake /></Icon>
          Age: {user.age}
        </Row>

        <Row>
          <Icon><FaWeight /></Icon>
          Weight: {user.weight}
        </Row>

        <Row>
          <Icon><FaHeartbeat /></Icon>
          Heart Rate: {user.heartRate}
        </Row>
      </Info>
    </Card>
  );
}