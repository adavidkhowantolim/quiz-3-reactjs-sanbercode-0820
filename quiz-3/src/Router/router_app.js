import React, {useContext} from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "../Index/index.js"
import About from "../About/about.js"
// import Movie from "../Tugas-11/tugas11.js";
// import Login from "../Tugas-12/tugas12.js";

// import NavButton from "./tugas15_navbutton"
import {RouterContext} from "./router_context"
import './router.css';

const RouterApp = () =>{
  return (
    <Router>
      <div>
        {/* HEADER */}
        <nav>
          <ul className="ul_nav_light">
            <li style={{float: "left"}}>
              <img src={require('../img/logo.png')} className="img_nav"/>
            </li>
            <li className="li_nav">
              <Link className="a_nav_light"to="/account">Login/Logout</Link>
            </li>
            <li className="li_nav">
              <Link className="a_nav_light" to="/movie">Movie List Editor</Link>
            </li>
            <li className="li_nav">
              <Link className="a_nav_light" to="/about">About</Link>
            </li>
            <li className="li_nav">
              <Link className="a_nav_light" to="/" >Home</Link>
            </li>
          </ul>
        </nav>

        {/* SWITCH */}
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/movie" component={Home}/>
          <Route exact path="/account" component={Home}/>
        </Switch>
        
        {/* FOOTER */}
        <footer>
          <h5>copyright &copy; 2020 by Sanbercode</h5>
        </footer>
      </div>
    </Router>
  )
}

export default RouterApp