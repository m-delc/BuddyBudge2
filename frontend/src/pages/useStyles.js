import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
    background: "linear-gradient(45deg, pink 10%, lightblue 60%)",
  },
}));

export default useStyles;
