import { container } from "../../defaultStyle";
const headerStyle = () => ({
  appBar: {
    backgroundColor: "#fff",
    boxShadow: "none",
    borderBottom: "0",
    marginBottom: "0",
    position: "fixed",
    width: "100%",
    // paddingTop: "10px",
    zIndex: "1029",
    border: "0",
    borderRadius: "none",
    // padding: "10px 0",
    transition: "all 150ms ease 0s",
    minHeight: "50px",
    display: "block",
  },
  container: {
    ...container,
    minHeight: "60px",
  },
  flex: {
    flex: 1,
  }
});

export default headerStyle;
