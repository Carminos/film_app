import { makeStyles } from "@mui/styles";

// return style object, so arrow function return a JS object wrap in ({})
export default makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100%",
  },
  toolbar: {
    height: "70px",
  },
  content: {
    flexGrow: 1,
    padding: "2em",
  },
}));
