import React from "react";
import { CssBaseline,Drawer,Hidden,List,ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {Link} from 'react-router-dom'

import Styles from "./SidebarStyle";

const useStyles = makeStyles(Styles);
const Sidebar = (props) => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const {handleDrawerToggle} = props;

  const drawer = (
      <List>
          <ListItem button><Link to='/dashboard'><div><span><img src={require('../../assets/images/left-sidebar-icons/dashboard.png')}/></span><span>Dashboard</span></div></Link></ListItem>
          <ListItem button><Link to='/attendance'><div><span><img src={require('../../assets/images/left-sidebar-icons/attendance.png')}/></span><span>Attendance</span></div></Link></ListItem>
          <ListItem button><Link to='/performance'><div><span><img src={require('../../assets/images/left-sidebar-icons/performance.png')}/></span><span>Performance</span></div></Link></ListItem>
          <ListItem button><Link to='/session'><div><span><img src={require('../../assets/images/left-sidebar-icons/session.png')}/></span><span>Sessions</span></div></Link></ListItem>
          <ListItem button><Link to='/students'><div><span><img src={require('../../assets/images/left-sidebar-icons/students.png')}/></span><span>Studnets</span></div></Link></ListItem>          
          <ListItem button><Link to='/reports'><div><span><img src={require('../../assets/images/left-sidebar-icons/reports.png')}/></span><span>Reports</span></div></Link></ListItem>          
      </List>
  );

  return (
    <div>
      <div className={classes.root}>
        <CssBaseline />
        <nav className={classes.drawer} aria-label="mailbox folders">
          <Hidden smUp implementation="css">
            <Drawer
              variant="temporary"
              anchor="left"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{paper: classes.drawerPaper}}
              ModalProps={{keepMounted: true}}>
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer classes={{paper: classes.drawerPaper}} variant="permanent" open>
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;

