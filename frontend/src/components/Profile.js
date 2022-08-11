import React, { useState } from "react";
import "../css/profile.css";
import { NavLink } from "react-router-dom";
import { useAtom } from "jotai";
import { userAtom } from "../States.js";

const Profile = () => {
  const [user, setUser] = useAtom(userAtom);
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [newFirstName, setNewFirstName] = useState("");
  const [errors, setErrors] = useState([]);
  const [firstNameMessage, setFirstNameMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [usernameMessage, setUsernameMessage] = useState("");

  const handleUsernameChange = (e) => {
    e.preventDefault();
    const newInfo = {
      email: newEmail,
    };

    fetch(`/users/${user.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newInfo),
    }).then((res) => {
      if (res.ok) {
        res.json().then((userNewEmail) => {
          setUser(userNewEmail);
          setNewEmail("");
          setUsernameMessage(
            `Your email is now "${userNewEmail.email}"`
          );
        });
      } else {
        res.json().then(setErrors(Object.entries.err.errors));
      }
    });
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    const newInfo = {
      password: newPassword,
      password_confirmation: confirmNewPassword,
    };

    fetch(`/users/${user.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newInfo),
    }).then((res) => {
      if (res.ok) {
        res.json().then((userNewPassword) => {
          setUser(userNewPassword);
          setNewPassword("");
          setConfirmNewPassword("");
          setPasswordMessage("Your password has been changed");
        });
      } else {
        res.json().then(setErrors(Object.entries.err.errors));
      }
    });
  };

  const handleNameChange = (e) => {
    e.preventDefault();
    const newInfo = {
      first_name: newFirstName,
    };
    fetch(`/users/${user.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newInfo),
    }).then((res) => {
      if (res.ok) {
        res.json().then((userNewFirstName) => {
          console.log(userNewFirstName)
          setUser(userNewFirstName);
          setNewFirstName("");
          setFirstNameMessage(
            `Your first name has been changed to ${userNewFirstName.first_name}`
          );
        });
      } else {
        res.json().then(setErrors(Object.entries.err.errors));
      }
    });
  };

  return (
    <>
      <h2 className="header-top">{user ? user.first_name : null}'s Profile</h2>

      <div className="grid">
        <br></br>

        <h3 className="header1">Change Your Email</h3>

        <form className="form1" onSubmit={handleUsernameChange}>
          <input
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            className="input1"
            placeholder="change email"
          />

          <br></br>
          <button className="button1" type="submit">
            Submit
          </button>
          {usernameMessage ? usernameMessage : null}
          {errors}
        </form>

        <h3 className="header2">Change Your Password</h3>

        <form className="form2 grid-row-span2" onSubmit={handlePasswordChange}>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="input2"
            placeholder="new password"
          />
          <input
            type="password"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            className="input2"
            placeholder="confirm new password"
          />

          <br></br>
          <button className="button1" type="submit">
            Submit
          </button>
          {passwordMessage ? passwordMessage : null}
        </form>

        <h3 className="header3">Change Your First Name</h3>
        <form className="form3" onSubmit={handleNameChange}>
          <input
            className="input3"
            value={newFirstName}
            onChange={(e) => setNewFirstName(e.target.value)}
            placeholder="change first name"
          />
          <br></br>
          <button className="button1" type="submit">
            Submit
          </button>
          {firstNameMessage ? firstNameMessage : null}
        </form>
        <div className="div-delete-profile">
          <NavLink to="/profile/delete">delete your profile</NavLink>
        </div>
      </div>
    </>
  );
};

export default Profile;
