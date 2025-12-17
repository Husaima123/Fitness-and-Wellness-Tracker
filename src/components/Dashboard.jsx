import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Card = styled.div`
  background: white;
  padding: 40px;
  border-radius: 30px;
  box-shadow: 0 15px 35px rgba(0,0,0,0.2);
  text-align: center;
  width: 320px;
`;

const Steps = styled.h1`
  font-size: 48px;
  margin: 10px 0;
  color: #8b5cf6;
`;

const Goal = styled.p`
  color: #6b7280;
  margin: 5px 0;
`;

const Calories = styled.p`
  color: #ef4444;
  margin: 5px 0;
`;

const CircleWrapper = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  margin: 0 auto 20px auto;
`;

export default function Dashboard() {
  const steps = 6200;
  const goal = 10000;
  const calories = 250;

  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const progress = (steps / goal) * circumference;

  return (
    <Card>
      <h2>FIT Track</h2>

      <CircleWrapper>
        <svg width="150" height="150">
          <circle
            cx="75"
            cy="75"
            r={radius}
            stroke="#e5e7eb"
            strokeWidth="10"
            fill="transparent"
          />
          <motion.circle
            cx="75"
            cy="75"
            r={radius}
            stroke="#8b5cf6"
            strokeWidth="10"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            animate={{ strokeDashoffset: circumference - progress }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ transform: "rotate(-90deg)", transformOrigin: "50% 50%" }}
          />
        </svg>
      </CircleWrapper>

      <Steps>{steps}</Steps>
      <Goal>Goal: {goal} Steps</Goal>
      <Calories>Calories Burned: {calories} Kcal</Calories>
    </Card>
  );
}
