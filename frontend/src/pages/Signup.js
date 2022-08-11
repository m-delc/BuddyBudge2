import React from "react";
import { Paper, makeStyles } from "@material-ui/core";
import SignupForm from "../components/SignupForm";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
    background: "linear-gradient(45deg, pink 10%, lightblue 60%)",
  },
}));

const Signup = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.pageContent} elevation={24}>
      <SignupForm />
    </Paper>
  );
};

export default Signup;
