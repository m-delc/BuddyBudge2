import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
} from "recharts";
import { useAtom } from "jotai";
import { userAtom } from "../States.js";

const Dashboard = () => {
  const [user] = useAtom(userAtom);
  const [personBudget, setPersonBudget] = useState([]);

  useEffect(() => {
    const fetchPersonBudget = async () => {
      const data = await fetch("/person_budgets");
      const json = await data.json();
      setPersonBudget(json);
    };
    fetchPersonBudget().catch(console.error);
  }, []);

  // data for Goals Chart
  // data for Goals Chart
  // data for Goals Chart
  const goalsChartData = [
    {
      name: "Week 1",
      Goal: user && user.budget ? user.budget.weekOneGoals : null,
    },
    {
      name: "Week 2",
      Goal: user && user.budget ? user.budget.weekTwoGoals : null,
    },
    {
      name: "Week 3",
      Goal: user && user.budget ? user.budget.weekThreeGoals : null,
    },
    {
      name: "Week 4",
      Goal: user && user.budget ? user.budget.weekFourGoals : null,
    },
    {
      name: "Week 5",
      Goal: user && user.budget ? user.budget.weekFiveGoals : null,
    },
    {
      name: "Week 6",
      Goal: user && user.budget ? user.budget.weekSixGoals : null,
    },
  ];

  // data for Friends Chart
  // data for Friends Chart
  // data for Friends Chart
  const friendsChartData = [
    {
      name: "Week 1",
      Sam: personBudget[0] ? personBudget[0].weekOneGoals : null,
      Kiera: personBudget[1] ? personBudget[1].weekOneGoals : null,
      Charlie: personBudget[2] ? personBudget[2].weekOneGoals : null,
    },
    {
      name: "Week 2",
      Sam: personBudget[0] ? personBudget[0].weekTwoGoals : null,
      Kiera: personBudget[1] ? personBudget[1].weekTwoGoals : null,
      Charlie: personBudget[2] ? personBudget[2].weekTwoGoals : null,
    },
    {
      name: "Week 3",
      Sam: personBudget[0] ? personBudget[0].weekThreeGoals : null,
      Kiera: personBudget[1] ? personBudget[1].weekThreeGoals : null,
      Charlie: personBudget[2] ? personBudget[2].weekThreeGoals : null,
    },
    {
      name: "Week 4",
      Sam: personBudget[0] ? personBudget[0].weekFourGoals : null,
      Kiera: personBudget[1] ? personBudget[1].weekFourGoals : null,
      Charlie: personBudget[2] ? personBudget[2].weekFourGoals : null,
    },
    {
      name: "Week 5",
      Sam: personBudget[0] ? personBudget[0].weekFiveGoals : null,
      Kiera: personBudget[1] ? personBudget[1].weekFiveGoals : null,
      Charlie: personBudget[2] ? personBudget[2].weekFiveGoals : null,
    },
    {
      name: "Week 6",
      Sam: personBudget[0] ? personBudget[0].weekSixGoals : null,
      Kiera: personBudget[1] ? personBudget[1].weekSixGoals : null,
      Charlie: personBudget[2] ? personBudget[2].weekSixGoals : null,
    },
  ];

  return (
    <>
      <div
        style={{
          background: "inherit",
          display: "grid",
          justifyContent: "center",
        }}
      >
        <h4 style={{ textAlign: "center" }}>
          {user ? `${user.first_name}'s Goals` : "Goals"}
        </h4>
        <BarChart
          width={500}
          height={300}
          data={goalsChartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={30}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="Goal" fill="#8884d8" />
        </BarChart>
        <LineChart
          width={500}
          height={300}
          data={friendsChartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {/* <h4>Sam, Kiera and Charlie's Goals</h4> */}
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Kiera"
            stroke="#8884d8"
            strokeDasharray="5 5"
          />
          <Line
            type="monotone"
            dataKey="Sam"
            stroke="#82ca9d"
            strokeDasharray="3 4 5 2"
          />{" "}
          <Line
            type="monotone"
            dataKey="Charlie"
            stroke="#e21c7f"
            strokeDasharray="3 4 5 2"
          />
        </LineChart>
      </div>
    </>
  );
};

export default Dashboard;
