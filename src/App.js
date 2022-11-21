import React from "react";
import {BrowserRouter, Route } from 'react-router-dom';
import { Switch } from "react-router-dom";
import Sigin from "./Components/Auth/signin";
import Dashboard from "./Components/Dashboard/dashboard";
import Navbar from "./Components/Layout/Navbar";
import ProjectDetails from "./Components/Project/projectdetail";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
<Navbar/>



<Switch>
<Route exact path="/" component={Dashboard}/>
          <Route path="/project/:id" component={ProjectDetails} />
          <Route path="/Signin" component={Sigin} />

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
