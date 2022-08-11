import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/profiledelete.css";
import { useAtom } from "jotai";
import { userAtom, isAuthenticatedAtom } from "../States.js";

const ProfileDelete = () => {
  const [user, setUser] = useAtom(userAtom);
  const [isAuthenticated, setIsAuthenticated] = useAtom(isAuthenticatedAtom);
  const [toggle, setToggle] = useState(true);
  const navigate = useNavigate();

  const deleteTimeout = (e) => {
    e.preventDefault();
    setToggle(false);
    setTimeout(handleDeleteAccount, 3000);
  };

  const handleDeleteAccount = () => {
    fetch(`/users/${user.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then(
      // console.log("Account Deleted"),
      setUser(null),
      setIsAuthenticated(false),
      navigate("/login")
    );
  };

  return (
    <>
      {toggle ? (
        <div className="div1">
          {user ? user.username : null}, are you sure you want to delete your
          account?
          <form onSubmit={deleteTimeout}>
            <br></br>
            <input required type="checkbox" />
            Yes, I'm sure
            <br></br>
            <br></br>
            <button className="btn-delete" type="submit">
              DELETE ACCOUNT
            </button>
          </form>
        </div>
      ) : (
        <div>We're sorry to see you go. Redirecting...</div>
      )}
    </>
  );
};

export default ProfileDelete;
