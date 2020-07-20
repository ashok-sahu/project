import {drawerWidth,transition,boxShadow} from "../../defaultStyle";
  
const SideBarStyle = theme => ({
    drawerPaper: {
      border: "none",
      position: "fixed",
      top: "0",
      backgroundColor:'#000000',
      bottom: "0",
      left: "0",
      zIndex: "1",
      ...boxShadow,
      width: drawerWidth,
      [theme.breakpoints.up("md")]: {
        width: drawerWidth,
        position: "fixed",
        marginTop:'60px',
        height: "100%"
      },
      [theme.breakpoints.down("sm")]: {
        width: drawerWidth,
        ...boxShadow,
        position: "fixed",
        display: "block",
        top: "0",
        height: "100vh",
        right: "0",
        left: "auto",
        zIndex: "1032",
        visibility: "visible",
        overflowY: "visible",
        borderTop: "none",
        textAlign: "left",
        paddingRight: "0px",
        paddingLeft: "0",
        transform: `translate3d(${drawerWidth}px, 0, 0)`,
        ...transition
      }
    },
    logo: {
      display:'flex',
      justifyContent:'center',
      alignItems:"center",
      position: "relative",
      padding: "15px 15px",
      zIndex: "4",
      borderBottom:'none',
      "&:after": {
        content: '""',
        position: "absolute",
        bottom: "0",
        height: "1px",
        right: "15px",
        width: "calc(100% - 30px)",
        borderBottom:"none",
        backgroundColor:'none'
      },
      textAlign:'center'
    },
    logoLink: {
      textTransform: "capitalize",
      padding: "5px 0",
      display: "inline-block",
      fontSize: "12px",
      textAlign: "left",
      lineHeight: "30px",
      textDecoration: "none",
      backgroundColor: "transparent",
      "&,&:hover": {
        color: "#fff"
      }
    },
    logoImage: {
      display: "flex",
      justifyContent:'center',
      alignItems:'center'
    },
    img: {
      width: "50px",
      position: "relative",
      border: "3px solid #c4bfa7",
      borderRadius: "100%"
    },
    background: {
      position: "absolute",
      zIndex: "1",
      height: "100%",
      width: "100%",
      display: "block",
      top: "0",
      left: "0",
      backgroundSize: "cover",
      backgroundPosition: "center center",
      "&:after": {
        position: "absolute",
        zIndex: "3",
        width: "100%",
        height: "100%",
        content: '""',
        display: "block",
        background: "#000",
        opacity: ".8"
      }
    },
    list: {
      marginTop: "20px",
      listStyle: "none",
      position: "relative",
      width:"100%"
    },
    item: {
      position: "relative",
      display: "block",
      textDecoration: "none",
      "&:hover,&:focus,&:visited": {
        color: "#fff",  
      },
      "&:hover,&:active":{
        opacity:.9,
        fontWeight:'bold',
        backgroundColor:"#31302f",
        borderLeft:"4px solid #FD8500"
      }
    },
    itemIcon: {
      display:"flex",
      width: "20px",
      height: "20px",
      fontSize: "20px",
      lineHeight: "20px",
      float: "left",
      marginRight: "17px",
      textAlign: "center",
      verticalAlign: "middle",
    },
    itemText: {
      margin: "0",
      lineHeight: "25px",
      fontSize: "12px",
      color: "#fff",
      fontWeight:'normal'
    },
    whiteFont: {
      color: "#fff"
    },
    
    sidebarWrapper: {
      position: "relative",
      height: "calc(100vh - 75px)",
      overflow: "auto",
      width: "177px",
      zIndex: "4",
      overflowScrolling: "touch",
    },
    footer:{
      color:'#5c574a',
      fontWeight:500,
      display:'flex',
      justifyContent:"center",
      alignItems:'center',
      fontSize:'12px',
      marginRight: "17px",
      marginTop: "110%",
      background:'#000',
      borderTop:'2px solid #5c574a',
      height:"50px",
      textTransform:'capitalize'
    },
    
  });
  
  export default SideBarStyle;
  