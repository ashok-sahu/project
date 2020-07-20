import { createMuiTheme } from "@material-ui/core/styles";
import { red,blueGrey } from "@material-ui/core/colors";

export const drawerWidth = 160;
export const container = {
    // paddingRight: "15px",
    // paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
}
export const transition = {
    transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
};

export const boxShadow = {
    boxShadow:"rgba(255, 0, 0, 0.2)"
};

export const theme = createMuiTheme({
    palette: {
      primary: red,
      secondary:blueGrey
    },
});