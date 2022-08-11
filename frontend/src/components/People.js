import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { peopleAtom } from "../States.js";
import { v4 as uuidv4 } from "uuid";

const People = () => {
  const [people, setPeople] = useAtom(peopleAtom);

  const navigate = useNavigate();
  const handleNavToPerson = (id) => {
    navigate(`/findpeople/${id}`);
  };

  useEffect(() => {
    fetch("/people").then((res) => {
      if (res.ok) {
        res.json().then(setPeople);
      }
    });
  }, []);

  return (
    <div
      style={{
        display: "grid",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <img src="/people.jpg"></img>
      <br></br>
      <div style={{ fontFamily: "Roboto", fontSize: "20px" }}>
        Make Some Friends!
      </div>
      <div className="grid">
        {people
          ? people.map((y) => (
              <div
                style={{
                  background: "white",
                  borderRadius: "8px",
                }}
                key={uuidv4()}
              >
                <p></p>
                <img
                  src={y.img}
                  alt={y.first_name}
                  onClick={(e) => handleNavToPerson(y.id)}
                  style={{ cursor: "pointer" }}
                />
                <h3
                  onClick={(e) => handleNavToPerson(y.id)}
                  style={{ cursor: "pointer" }}
                >
                  {y.first_name}
                </h3>
                <h4>
                  Total cash saved: $
                  {y.person_budget.weekOneGoals +
                    y.person_budget.weekTwoGoals +
                    y.person_budget.weekThreeGoals +
                    y.person_budget.weekFourGoals +
                    y.person_budget.weekFiveGoals +
                    y.person_budget.weekSixGoals}
                </h4>
                <p style={{ maxWidth: "25em" }}>
                  About {y.first_name}: {y.bio}
                </p>
                <p></p>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default People;
