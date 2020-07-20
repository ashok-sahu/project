import {
    container,drawerWidth
  } from "../../assets/defaultStyle";

  const NavBarStyle = () => ({
    appBar: {
      backgroundColor: "#ffffff",
      color: "red",
      padding: 0,
      margin:0,
      transition: "all 150ms ease 0s",
      minHeight: "60px",
      display: "inline-block",
    },
    logo:{
      paddingRight:20,
    },
    text:{
      paddingLeft:20
    },
    container: {
      ...container,
      minHeight: "60px",
      flexWrap:"wrap",
      flexGrow:1,
      paddingLeft:0
    },
     logoImage: {
      width: "auto",
      maxHeight: "auto",
      marginLeft: "10px",
    },
    logoImg:{
      backgroundColor:"#FC8802",
      color:"#ffffff",
      width:drawerWidth,
      display: "flex",
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      margin:0,
      padding:0,
      height:'60px'
    },
    img: {
      width: "35px",
      top: "19px",
      position: "absolute",
      verticalAlign: "middle",
      border: "0"
    },
    dashboardheaderText:{
      display:'flex',
      flexDirection:'column',
      alignItems:'flex-end',
      justifyContent:"center",
      paddingRight:'10px'
    },
    centerText:{
      display:'flex',
      justifyContent:'center',
      alignItems:"center",
      // flexDirection:'row',
      alignContent:'center',
      // flexGrow:1,
      flex:1  ,
      textAlign:'center',
      color: "#101010",
      fontSize: "16px",
      fontWeight: 600,
      lineHeight: "18px"
    },
    toptext:{
      textTransform:'uppercase',
      color: "#000000",
      // fontFamily: "Roboto",
      fontSize: "14px",
      fontWeight: 600,
      lineHeight: "17px"
    },
    bottomtext:{
      color: "#000000",
      textTransform:'capitalize',
  // font-family: Roboto;
      fontSize: "12px",
      fontWeight: 450,
      lineHeight: "14px",
      opacity: 0.5
    },
    flex: {
      flex: 1,
      display:"flex",
      justifyContent:"flex-end",
    },
    title: {
      letterSpacing: "unset",
      lineHeight: "30px",
      fontSize: "15px",
      borderRadius: "3px",
      textTransform: "Capitalize",
      color: "inherit",
      fontWeight:"bold",
      margin: "0",
      paddingLeft:'25px',
      "&:hover,&:focus": {
        color: "grey",
        cursor:"pointer"
      }
    },
  });
  
  export default NavBarStyle;
  