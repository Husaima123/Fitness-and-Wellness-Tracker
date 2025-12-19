import React from "react";
import styled from "styled-components";

/* Main Card */
const Card = styled.div`
  background: white;
  padding: 30px;
  border-radius: 30px;
  box-shadow: 0 15px 35px rgba(0,0,0,0.2);
  width: 340px;
`;

/* Title */
const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #6d28d9;
`;

/* Chart container */
const Chart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 160px;
  margin-bottom: 30px;
`;

/* Bar */
const Bar = styled.div`
  width: 18%;
  height: ${props => props.height}%;
  background: linear-gradient(to top, #8b5cf6, #ec4899);
  border-radius: 10px;
`;

/* Label row */
const LabelRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #6b7280;
  margin-top: 8px;
`;

/* Body condition cards */
const ConditionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
`;

const ConditionCard = styled.div`
  background: #f5f3ff;
  padding: 15px;
  border-radius: 15px;
  text-align: center;
`;

const Value = styled.h3`
  margin: 5px 0;
  color: #7c3aed;
`;

const Label = styled.p`
  font-size: 13px;
  color: #6b7280;
`;

export default function Progress() {
  return (
    <Card>
      <Title>Weekly Progress</Title>

      {/* Dummy Bar Chart */}
      <Chart>
        <Bar height={40} />
        <Bar height={65} />
        <Bar height={50} />
        <Bar height={80} />
        <Bar height={60} />
      </Chart>

      <LabelRow>
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
      </LabelRow>

      {/* Body Condition */}
      <ConditionGrid>
        <ConditionCard>
          <Value>72 kg</Value>
          <Label>Weight</Label>
        </ConditionCard>

        <ConditionCard>
          <Value>21%</Value>
          <Label>Body Fat</Label>
        </ConditionCard>

        <ConditionCard>
          <Value>98 bpm</Value>
          <Label>Heart Rate</Label>
        </ConditionCard>

        <ConditionCard>
          <Value>Good</Value>
          <Label>Condition</Label>
        </ConditionCard>
      </ConditionGrid>
    </Card>
  );
}