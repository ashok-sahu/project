import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  LoginScreen,
  LogoutScreen,
  ReportsScreen,
  StudentDetailsScreen,
  SessionDetailsScreen,
  PageNotFoundScreen,
  PerformanceDetailsScreen,
  DashboardScreen,
  AttendanceScreen,
  PerformanceScreen,
  SessionsScreen,
  StudentScreen,
} from "./pages/index";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LoginScreen} />
        <Route exact path="/dashboard" component={DashboardScreen} />
        <Route exact path="/attendance" component={AttendanceScreen} />
        <Route exact path="/performance" component={PerformanceScreen} />
        <Route exact path="/sessions" component={SessionsScreen} />
        <Route exact path="/students" component={StudentScreen} />
        <Route exact path="/performance/:id" component={PerformanceDetailsScreen} />
        <Route exact path="/students/:id" component={StudentDetailsScreen} />
        <Route exact path="/session/:id" component={SessionDetailsScreen} />
        <Route exact path="/reports" component={ReportsScreen} />
        <Route exact path="/logout" component={LogoutScreen} />
        <Route component={PageNotFoundScreen} />
      </Switch>
    </div>
  );
}

export default App;
