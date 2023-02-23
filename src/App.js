import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import FileMail from './pages/fileMail'
import Team from "./pages/Team";
import htmlMail from "./pages/htmlMail";
import ScheduleSingleMail from "./pages/scheduleSingleMail";


function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/overview" exact component={Home} />
        <Route path="/email" exact component={FileMail} />
        <Route path="/email2" exact component={htmlMail} />
        <Route path="/team" exact component={Team} />
        <Route path="/schedule/singlemail" exact component={ScheduleSingleMail}/>
      </Switch>
    </Router>
  );
}

export default App;
