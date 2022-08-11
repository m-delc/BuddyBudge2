import React from "react";

const About = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src="/about.jpg"></img>
      </div>
          <br></br>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            maxWidth: "65%",
            display: "flex",
            justifyContent: "center",
            fontSize: "20px",
            fontFamily: "Roboto",
          }}
        >
          Do you want to save money? Do you like meeting new people? BuddyBudge
          combines those two things to help you save money. Your new friends
          will be saving cash, and so should you! Don't get left behind - Signup
          today to compete, make some friends, and save!
        </div>
      </div>
    </>
  );
};

export default About;
