import { createMuiTheme } from "@material-ui/core/styles";

const zumreBlue = "#0B72B9";
const zumreOrange = "#FFBA60";

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
    },
    estimate: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
      color: "white",
    },
  },
});
