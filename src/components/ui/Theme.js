import { createMuiTheme } from "@material-ui/core/styles";

const zumreBlue = "#0B72B9";
const zumreOrange = "#FFBA60";
const zumreGrey = "#868686";

export default createMuiTheme({
  palette: {
    common: {
      blue: `${zumreBlue}`,
      orange: `${zumreOrange}`,
    },
    primary: {
      main: `${zumreBlue}`,
    },
    secondary: {
      main: `${zumreOrange}`,
    },
  },
  typography: {
    tab: {
      fonFamily: "Raleway",
      textTransform: "none",
      fontWeight: "800",
      fonstSize: "1rem",
      color: "white"
    },
    estimate: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
      color: "white",
    },
    h2: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "2.5rem",
      color: zumreBlue,
      lineHeight: 1.5,
    },
    h3: { 
      fontFamily: "Pacifico",
      fontSize: "2.5rem",
      color: zumreBlue,
    },
    h4: {
      fontFamily: "Raleway",
      fontSize: "1.75rem",
      color: zumreBlue,
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: zumreGrey,
    },
    subtitle2:{
      color:"white",
      fontSize: "1.25ren",
      fontWeight: 300
    },
    learnButton: {
      borderColor: zumreBlue,
      color: zumreBlue,
      borderWidth: 2,
      textTransform: "none",
      borderRadius: 50,
      fontFamily: "Roboto",
      fontWeight: "bold",
    },
  },
});
