// import { makeStyles } from '@material-ui/core/styles';
// import {drawerWidth} from '../../assets/defaultStyle'

// export const Styles = makeStyles((theme) => ({
//     root: {
//       display: 'flex',
//     },
//     drawer: {
//       [theme.breakpoints.up('sm')]: {
//         width: drawerWidth,
//         flexShrink: 0,
//       },
//     },
//     appBar: {
//       [theme.breakpoints.up('sm')]: {
//         width: `calc(100% - ${drawerWidth}px)`,
//         marginLeft: drawerWidth,
//       },
//     },
//     menuButton: {
//       marginRight: theme.spacing(2),
//       [theme.breakpoints.up('sm')]: {
//         display: 'none',
//       },
//     },
//     toolbar: theme.mixins.toolbar,
//     drawerPaper: {
//       width: drawerWidth,
//     },
//     content: {
//       flexGrow: 1,
//       padding: theme.spacing(3),
//     },
//   }));


import {drawerWidth,transition,boxShadow} from "../../assets/defaultStyle";
  
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
        color: "white"
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
        background: "black",
        opacity: ".8"
      }
    },
    list: {
      marginTop: "20px",
      paddingLeft: "0",
      paddingTop: "0",
      paddingBottom: "0",
      marginBottom: "0",
      listStyle: "none",
      position: "relative",
      width:"78%"
    },
    item: {
      position: "relative",
      display: "block",
      textDecoration: "none",
      "&:hover,&:focus,&:visited,&": {
        color: "white",
      },
      "&:hover":{
        // borderLeft:"4px solid #FC8802",
        opacity:.8,
        fontWeight:'bold',
        color:"#000000"
      }
    },
    itemLink: {
      width: "auto",
      transition: "all 300ms linear",
      margin: "0px",
      position: "relative",
      display: "block",
      padding: "10px 15px",
      fontWeight:"bold",
    },
    itemIcon: {
      width: "24px",
      height: "30px",
      fontSize: "24px",
      lineHeight: "30px",
      float: "left",
      marginRight: "15px",
      textAlign: "center",
      verticalAlign: "middle",
      color:"white"
    },
    itemText: {
      margin: "0",
      lineHeight: "30px",
      fontSize: "14px",
      color: "white",
    },
    logoutText:{
      marginTop:'80%',
      color:"red",
      backgroundColor:"green"
    },
    whiteFont: {
      color: "white"
    },
    
    sidebarWrapper: {
      position: "relative",
      height: "calc(100vh - 75px)",
      overflow: "auto",
      width: "210px",
      zIndex: "4",
      overflowScrolling: "touch",
    },
    logout:{
      display:'flex',
      justifyContent:"center",
      alignItems:'center',
      color:'white',
      marginTop:'40%',
      width:"55%",
      // width: "auto",
      transition: "all 300ms linear",
      margin: "0px",
      position: "relative",
      // display: "block",
      padding: "10px 15px",
      // fontWeight:"bold",
      cursor:"pointer",
       "&:hover":{
        borderLeft:"4px solid #FC8802",
        opacity:.7,
        fontWeight:'bold',
        color:"#fff"
      }
    },
    images:{
      width: "24px",
      height: "30px",
      fontSize: "24px",
      lineHeight: "30px",
      float: "left",
      marginRight: "15px",
      textAlign: "center",
      verticalAlign: "middle",
      color: "white"
    }
  });
  
  export default SideBarStyle;
  