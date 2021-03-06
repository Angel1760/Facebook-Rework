import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Login from "./Login";
import Widgets from "./Widgets";
import "./App.css";

import Friends from "./Friends";

import { useStateValue } from "./StateProvider";
//Everthing below this is dealing with routing
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";
//import About from "./About";
import SidebarRow from "./Sidebar";
//import About from "./Sidebar";
//import Posts from "./Posts";
import About from "./About";
import { flexbox } from "@mui/system";
import PeopleIcon from "@mui/icons-material/People";
import InfoIcon from "@mui/icons-material/Info";
/*
function About() {
  return (
    <div style={{padding: 20}}>
      <p>THIS BETTER WORK</p>
    </div>
  );
}
*/

function App() {
  const [{ user }, distpatch] = useStateValue();
  return (
    //BEM naming convention
    <Router>
      <div className="app">
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />

            <div className="app_body">
              <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/" element={<Feed />}/>
                <Route path="/Friends" element={<Friends />} />

              </Routes>
              <nav className="nav">
                <button className="homeButton">
                  <PeopleIcon />
                  <Link to="/">
                    <a>Home</a>

                  </Link>
                </button>
                
                <button className="aboutButton">
                  <InfoIcon />
                  <Link to="/about" style={{ padding: 5 }}>
                    <a>About</a>
                  </Link>
                </button>

                  <button className="friendsButton">
                  <PeopleIcon />
                  <Link to="/Friends" style={{ padding: 5 }}>
                    <a>Friends</a>
                  </Link>
                </button>

              </nav>
            </div>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;

/*<div className="app_posts">
<Posts user={user} />
</div>*/

//
