import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

/* Card */
const Card = styled.div`
  background: white;
  padding: 30px;
  border-radius: 30px;
  box-shadow: 0 15px 35px rgba(0,0,0,0.2);
  width: 360px;
  text-align: center;
`;

/* Title */
const Title = styled.h2`
  color: #7c3aed;
  margin-bottom: 20px;
`;

/* Circle grid */
const CircleGrid = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

/* Circle wrapper */
const CircleWrap = styled.div`
  text-align: center;
`;

/* Label */
const Label = styled.p`
  font-size: 13px;
  margin-top: 8px;
  color: #6b7280;
`;

/* Goal list */
const GoalList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

/* Goal item */
const GoalItem = styled.div`
  background: #f5f3ff;
  padding: 12px;
  border-radius: 15px;
  font-size: 14px;
  color: #5b21b6;
`;

/* Button row */
const ButtonRow = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

/* Button */
const Button = styled.button`
  flex: 1;
  padding: 10px;
  border-radius: 15px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  background: ${props => props.secondary ? "#fee2e2" : "#ddd6fe"};
  color: ${props => props.secondary ? "#991b1b" : "#4c1d95"};
`;

function ProgressCircle({ percent, color, text }) {
  const radius = 30;
  const circumference = 2 * Math.PI * radius;

  return (
    <CircleWrap>
      <svg width="80" height="80">
        <circle
          cx="40"
          cy="40"
          r={radius}
          stroke="#e5e7eb"
          strokeWidth="8"
          fill="transparent"
        />
        <motion.circle
          cx="40"
          cy="40"
          r={radius}
          stroke={color}
          strokeWidth="8"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          animate={{
            strokeDashoffset:
              circumference - (percent / 100) * circumference,
          }}
          transition={{ duration: 1.5 }}
          style={{ transform: "rotate(-90deg)", transformOrigin: "50% 50%" }}
        />
        <text
          x="40"
          y="45"
          textAnchor="middle"
          fontSize="12"
          fill="#374151"
          fontWeight="bold"
        >
          {percent}%
        </text>
      </svg>
      <Label>{text}</Label>
    </CircleWrap>
  );
}

export default function Goals() {
  return (
    <Card>
      <Title>Fit Track Goals</Title>

      {/* Progress circles */}
      <CircleGrid>
        <ProgressCircle percent={10} color="#8b5cf6" text="Year" />
        <ProgressCircle percent={20} color="#ec4899" text="Month" />
        <ProgressCircle percent={10} color="#22c55e" text="Week" />
      </CircleGrid>

      {/* Goal settings */}
      <GoalList>
        <GoalItem>🚶 Daily Step Goal: 10,000</GoalItem>
        <GoalItem>🔥 Calories Burn Goal: 500 kcal</GoalItem>
        <GoalItem>💧 Water Intake Goal: 3 L</GoalItem>
      </GoalList>

      {/* Buttons */}
      <ButtonRow>
        <Button secondary>Reset Goal</Button>
        <Button>Insert Goal</Button>
      </ButtonRow>
    </Card>
  );
}
