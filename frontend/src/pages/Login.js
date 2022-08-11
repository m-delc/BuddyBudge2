import React from "react";
import { Paper, makeStyles } from "@material-ui/core";
import LoginForm from "../components/LoginForm";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
    background: "linear-gradient(45deg, pink 10%, lightblue 60%)",
  },
}));

const Login = () => {
  const classes = useStyles();
  
  return (
    <Paper className={classes.pageContent} elevation={24}>
      <LoginForm/>
    </Paper>
  );
};

export default Login;
