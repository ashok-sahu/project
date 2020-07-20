import React, { useState, useEffect } from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import Loadable from "react-loadable";
import Axios from "axios";

import { LoginScreen, LogoutScreen, PageNotFoundScreen } from "./pages/index";

const Loading = () => <div style={{ height: "1000px" }}></div>;
const hist = createBrowserHistory();

const DashboardContainer = Loadable({
  loader: () => import("./pages/dashboard/Dashboard"),
  loading: Loading,
});

const AttendanceContainer = Loadable({
  loader: () => import("./pages/attendance/Attendance"),
  loading: Loading,
});

const PerformanceContainer = Loadable({
  loader: () => import("./pages/performance/Performance"),
  loading: Loading,
});

const SessionContainer = Loadable({
  loader: () => import("./pages/session/Sessions"),
  loading: Loading,
});

const StudentsContainer = Loadable({
  loader: () => import("./pages/students/Students"),
  loading: Loading,
});

const PerformanceDetailsContainer = Loadable({
  loader: () => import("./pages/performanceDetails/PerformanceDetails"),
  loading: Loading,
});

const SessionDetailsContainer = Loadable({
  loader: () => import("./pages/sessionDetails/SessionDetails"),
  loading: Loading,
});

const StudentDetailsContainer = Loadable({
  loader: () => import("./pages/studentDetails/StudentDetails"),
  loading: Loading,
});

const ReportsContainer = Loadable({
  loader: () => import("./pages/reports/Reports"),
  loading: Loading,
});

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await Axios.get("/api/user");
      setProducts(data);
    };
    fetchData();
  }, []);
  console.log(products);
  return (
    <div className="App">
      <HashRouter history={hist} basename="/">
        <Switch>
          <Route exact path="/" component={LoginScreen} />
          <Route exact path="/dashboard" component={DashboardContainer} />
          <Route exact path="/attendance" component={AttendanceContainer} />
          <Route exact path="/performance" component={PerformanceContainer} />
          <Route exact path="/sessions" component={SessionContainer} />
          <Route exact path="/students" component={StudentsContainer} />
          <Route exact path="/performance/:id" component={PerformanceDetailsContainer}/>
          <Route exact path="/students/:id" component={StudentDetailsContainer}/>
          <Route exact path="/session/:id" component={SessionDetailsContainer}/>
          <Route exact path="/reports" component={ReportsContainer} />
          <Route exact path="/logout" component={LogoutScreen} />
          <Route component={PageNotFoundScreen} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
