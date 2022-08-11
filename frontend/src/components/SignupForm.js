import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Stack from "@mui/material/Stack";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import "../css/loginform.css";
import { useAtom } from "jotai";
import { userAtom } from "../States.js";
import { v4 as uuidv4 } from "uuid";

const Signup = () => {
  const [, setUser] = useAtom(userAtom);
  const [signupFirstName, setSignupFirstName] = useState("");
  const [signupErrors, setSignupErrors] = useState([]);
  const [signupEmail, setSignupEmail] = useState("");
  const navigate = useNavigate();

  // first password
  // first password
  const [initialPassword, setInitialPassword] = useState({
    password: "",
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setInitialPassword({ ...initialPassword, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setInitialPassword({
      ...initialPassword,
      showPassword: !initialPassword.showPassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // confirm password
  // confirm password
  const [confirmPassword, setConfirmPassword] = useState({
    password: "",
    showPassword: false,
  });
  const handleChange2 = (prop) => (event) => {
    setConfirmPassword({ ...confirmPassword, [prop]: event.target.value });
  };
  const handleClickShowPassword2 = () => {
    setConfirmPassword({
      ...confirmPassword,
      showPassword: !confirmPassword.showPassword,
    });
  };
  const handleMouseDownPassword2 = (event) => {
    event.preventDefault();
  };

  function signupOnSubmit(e) {
    e.preventDefault();
    setSignupErrors([]);
    const newUser = {
      email: signupEmail,
      first_name: signupFirstName,
      password: initialPassword.password,
      password_confirmation: confirmPassword.password,
    };
    fetch("/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    }).then((res) => {
      if (res.ok) {
        res.json().then((x) => {
          setUser(x);
          navigate("/goals");
        });
      } else {
        res.json().then((json) => {
          setSignupErrors(Object.entries(json.error));
        });
      }
    });
  }

  return (
    <form className="div-form" onSubmit={signupOnSubmit}>
      <br></br>

      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Input
            className="test1"
            type="text"
            id="email"
            placeholder="Email"
            variant="standard"
            value={signupEmail}
            onChange={(e) => setSignupEmail(e.target.value)}
          />
        </div>

        <br></br>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Input
            className="test1"
            type="text"
            id="firstname"
            placeholder="First name"
            variant="standard"
            value={signupFirstName}
            onChange={(e) => setSignupFirstName(e.target.value)}
          />
        </div>

        <br></br>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Input
            id="first-password"
            type={initialPassword.showPassword ? "text" : "password"}
            value={initialPassword.password}
            onChange={handleChange("password")}
            placeholder="Password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {initialPassword.showPassword ? (
                    <VisibilityOff />
                  ) : (
                    <Visibility />
                  )}
                </IconButton>
              </InputAdornment>
            }
          />
        </div>
        <br></br>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Input
            id="confirm-password"
            type={confirmPassword.showPassword ? "text" : "password"}
            value={confirmPassword.password}
            onChange={handleChange2("password")}
            placeholder="Confirm password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword2}
                  onMouseDown={handleMouseDownPassword2}
                >
                  {confirmPassword.showPassword ? (
                    <VisibilityOff />
                  ) : (
                    <Visibility />
                  )}
                </IconButton>
              </InputAdornment>
            }
          />
        </div>
      </div>

      <div>
        {signupErrors
          ? signupErrors.map((error) => <p key={uuidv4()}>{error[1]}</p>)
          : null}
      </div>

      <br></br>
      <br></br>

      <div className="btn-div">
        <Stack className="btn" direction="row" spacing={2}>
          <Button
            variant="outlined"
            endIcon={<CheckCircleOutlineIcon />}
            type="Submit"
          >
            Submit
          </Button>

          <Button
            variant="outlined"
            endIcon={<ArrowBackIcon />}
            onClick={(e) => navigate("/login")}
          >
            Login
          </Button>
        </Stack>
      </div>
    </form>
  );
};

export default Signup;
