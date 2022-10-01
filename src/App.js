import './App.css';
import Navbar from './Component/Navbar';
import PropTypes from 'prop-types';
import Form from './Component/Form'
import About from './Component/About';
import { useState } from 'react';
import Alert from './Component/Alert';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";


function App(props) {

  let title = "TextUtils";
  const [mode, setMode] = useState(('light'));
  const [alert, setAlert] = useState(null);
  
  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    })
    
    
    setTimeout(() => {

      setAlert(null);

    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#312978";
      showAlert("Dark Mode has been Enable", "success")
      // document.title ="Utility -darkMode";
      // setInterval(() => {
      //   document.title ="Utility -darkMode";

      // }, 1000);

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      document.body.style.color = 'black';
      showAlert("Light Mode has been Enable", "success")

      // setInterval(() => {
      //   document.title= "light mode ";
      // }, 2000);

    }
    
  }


  return (
    <>
      <Router>

        <Navbar title={title} About={"About_Us"} mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Switch>
            <Route  exact path="/About_Us">
              <About />
            </Route>

            <Route path="/">
              <Form mode={mode} heading={'Enter Your Text Here'} showAlert={showAlert} />
            </Route>
          </Switch>

        </div>

      </Router>
    </>
  );
}

export default App;

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  About: PropTypes.string.isRequired,
}

{/* Navbar.defaultProps ={
        title: "Set Title ",
        About: 'About_Us',
      } */}

