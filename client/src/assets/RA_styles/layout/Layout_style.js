import {drawerWidth,transition,container} from '../../defaultStyle'

const appStyle = theme => ({
    wrapper: {
      position: "relative",
      top: "0",
      height: "100vh",
    },
    mainPanel: {
      [theme.breakpoints.up("md")]: {
        width: `calc(100% - ${drawerWidth}px)`
      },
      overflow: "auto",
      position: "relative",
      float: "right",
      ...transition,
      maxHeight: "100%",
      width: "100%",
      overflowScrolling: "touch",
      backgroundColor:'#F5F5F5',
      height:'100vh'
    },
      content: {
        marginTop: "60px",
        padding: "20px 20px",
        minHeight: "calc(100vh - 123px)"
      },
    container,
  });
  
  export default appStyle;
  