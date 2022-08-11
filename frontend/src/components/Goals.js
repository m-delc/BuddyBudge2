import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import "../css/budget.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { useAtom } from "jotai";
import { userAtom, userFriendsAtom } from "../States.js";

const Budget = () => {
  const [user, setUser] = useAtom(userAtom);
  const [, setUserFriends] = useAtom(userFriendsAtom);

  const [weekOneGoals, setweekOneGoals] = useState("");
  const [weekTwoGoals, setweekTwoGoals] = useState("");
  const [weekThreeGoals, setweekThreeGoals] = useState("");
  const [weekFourGoals, setweekFourGoals] = useState("");
  const [weekFiveGoals, setweekFiveGoals] = useState("");
  const [weekSixGoals, setweekSixGoals] = useState("");
  const [goals, setGoals] = useState([]);
  const [toggleSubmitUpdate, setToggleSubmitUpdate] = useState(true);
  const [toggleGraph, setToggleGraph] = useState(true);
  const [submitMessage, setSubmitMessage] = useState("");

  // i think this stops the problem i had before, where for a split second the previous user's friends were visible when I clicked on user's "friends'"
  // i think this stops the problem i had before, where for a split second the previous user's friends were visible when I clicked on user's "friends'"
  useEffect(() => {
    const fetchFriends = async () => {
      const data = await fetch("/friends");
      const json = await data.json();
      setUserFriends(json);
    };
    fetchFriends().catch(console.error);
  }, []);

  const chartData = [
    {
      name: "Week 1",
      // Savings: savings1 ? savings1 : null,
      Goal: weekOneGoals ? weekOneGoals : null,
    },
    {
      name: "Week 2",
      // Savings: savings1 ? savings1 : null,
      Goal: weekTwoGoals ? weekTwoGoals : null,
    },
    {
      name: "Week 3",
      // Savings: savings1 ? savings1 : null,
      Goal: weekThreeGoals ? weekThreeGoals : null,
    },
    {
      name: "Week 4",
      // Savings: savings1 ? savings1 : null,
      Goal: weekFourGoals ? weekFourGoals : null,
    },
    {
      name: "Week 5",
      // Savings: savings1 ? savings1 : null,
      Goal: weekFiveGoals ? weekFiveGoals : null,
    },
    {
      name: "Week 6",
      // Savings: savings1 ? savings1 : null,
      Goal: weekSixGoals ? weekSixGoals : null,
    },
  ];

  const chartData2 = [
    {
      name: "Week 1",
      // Savings: goals.savings1 ? goals.savings1 : null,
      Goal: goals.weekOneGoals ? goals.weekOneGoals : null,
    },
    {
      name: "Week 2",
      // Savings: savings1 ? savings1 : null,
      Goal: goals.weekTwoGoals ? goals.weekTwoGoals : null,
    },
    {
      name: "Week 3",
      // Savings: savings1 ? savings1 : null,
      Goal: goals.weekThreeGoals ? goals.weekThreeGoals : null,
    },
    {
      name: "Week 4",
      // Savings: savings1 ? savings1 : null,
      Goal: goals.weekFourGoals ? goals.weekFourGoals : null,
    },
    {
      name: "Week 5",
      // Savings: savings1 ? savings1 : null,
      Goal: goals.weekFiveGoals ? goals.weekFiveGoals : null,
    },
    {
      name: "Week 6",
      // Savings: savings1 ? savings1 : null,
      Goal: goals.weekSixGoals ? goals.weekSixGoals : null,
    },
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newObj = {
      weekOneGoals: weekOneGoals,
      weekTwoGoals: weekTwoGoals,
      weekThreeGoals: weekThreeGoals,
      weekFourGoals: weekFourGoals,
      weekFiveGoals: weekFiveGoals,
      weekSixGoals: weekSixGoals,
      user_id: user.id,
    };
    fetch("/budgets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newObj),
    })
      .then((res) => res.json())
      .then((x) => {
        setGoals(x);
        setToggleGraph(!toggleGraph);
        setweekOneGoals("");
        setweekTwoGoals("");
        setweekThreeGoals("");
        setweekFourGoals("");
        setweekFiveGoals("");
        setweekSixGoals("");
        // navigate("/dashboard");
        setSubmitMessage(`Your goals are set, ${user.first_name}!`);
      });
  };

  // submit/update form toggle
  // submit/update form toggle
  // submit/update form toggle
  const handleToggle = () => {
    setToggleSubmitUpdate(!toggleSubmitUpdate);
  };

  // update route
  // update route
  // update route
  const handleFormUpdate = (e) => {
    e.preventdefault();
  };

  return (
    <div className="grid">
      <div>Set your goals!<br></br><br></br>  
        {/* toggles submit/update forms */}
        {/* toggles submit/update forms */}
        {/* toggles submit/update forms */}
        {toggleSubmitUpdate ? (
          // initial submit form
          // initial submit form
          // initial submit form
          <form onSubmit={handleFormSubmit}>
            <input
              type="number"
              placeholder="Week 1"
              value={weekOneGoals}
              onChange={(e) => setweekOneGoals(e.target.value)}
            />
            <br></br>
            <br></br>
            <input
              type="number"
              placeholder="Week 2"
              value={weekTwoGoals}
              onChange={(e) => setweekTwoGoals(e.target.value)}
            />
            <br></br>
            <br></br>
            <input
              type="number"
              placeholder="Week 3"
              value={weekThreeGoals}
              onChange={(e) => setweekThreeGoals(e.target.value)}
            />
            <br></br>
            <br></br>
            <input
              type="number"
              placeholder="Week 4"
              value={weekFourGoals}
              onChange={(e) => setweekFourGoals(e.target.value)}
            />
            <br></br>
            <br></br>
            <input
              type="number"
              placeholder="Week 5"
              value={weekFiveGoals}
              onChange={(e) => setweekFiveGoals(e.target.value)}
            />
            <br></br>
            <br></br>
            <input
              type="number"
              placeholder="Week 6"
              value={weekSixGoals}
              onChange={(e) => setweekSixGoals(e.target.value)}
            />
            <br></br>
            <br></br>
            <button type="submit">Submit</button>
          </form>
        ) : (
          // update form
          // update form
          // update form
          <form onSubmit={handleFormUpdate}>
            <input
              type="number"
              placeholder="Update Week 1"
              value={weekOneGoals}
              onChange={(e) => setweekOneGoals(e.target.value)}
            />
            <br></br>
            <br></br>
            <input
              type="number"
              placeholder="Update Week 2"
              value={weekTwoGoals}
              onChange={(e) => setweekTwoGoals(e.target.value)}
            />
            <br></br>
            <br></br>
            <input
              type="number"
              placeholder="Update Week 3"
              value={weekThreeGoals}
              onChange={(e) => setweekThreeGoals(e.target.value)}
            />
            <br></br>
            <br></br>
            <input
              type="number"
              placeholder="Update Week 4"
              value={weekFourGoals}
              onChange={(e) => setweekFourGoals(e.target.value)}
            />
            <br></br>
            <br></br>
            <input
              type="number"
              placeholder="Update Week 5"
              value={weekFiveGoals}
              onChange={(e) => setweekFiveGoals(e.target.value)}
            />
            <br></br>
            <br></br>
            <input
              type="number"
              placeholder="Update Week 6"
              value={weekSixGoals}
              onChange={(e) => setweekSixGoals(e.target.value)}
            />
            <br></br>
            <br></br>
            <button type="submit">Submit</button>
          </form>
        )}
        <br></br>
        {submitMessage ? submitMessage : null}
      </div>
      {/* this toggles the onChange event live as it's happening on the chart, with (upon submission) the submitted values persisting on the chart as  */}
      {/* this toggles the onChange event live as it's happening on the chart, with (upon submission) the submitted values persisting on the chart as  */}
      {/* this toggles the onChange event live as it's happening on the chart, with (upon submission) the submitted values persisting on the chart as  */}
      {toggleGraph ? (
        <BarChart
          width={500}
          height={300}
          data={chartData}
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
          <Bar dataKey="Goal" fill="#82ca9d" />
        </BarChart>
      ) : (
        <BarChart
          width={500}
          height={300}
          data={chartData2}
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
          <Bar dataKey="Goal" fill="#82ca9d" />
        </BarChart>
      )}
    </div>
  );
};

export default Budget;
