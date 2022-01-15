
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
   const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not
   const [alert,setAlert] = useState(null);
const showAlert = (message,type) =>{
  setAlert({
    msg: message,
    type: type
  })
}

   const toggleMode = ()=>{
     if(mode === 'light'){
     setMode('dark');
     document.body.style.backgroundColor = 'grey';
     showAlert("Dark mode has been enabled", "Success"); // success is a type it shows green box alert.
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "Success");
     }
   }
  return (
    <> 
    <Router>
    <Navbar title = "TextUtils2" About  = "About" mode={mode} toggleMode ={toggleMode}/>
    <Alert alert = {alert}/>
    <div  className ="Container">
    <Switch>
          <Route exact path="/about">
            <About />
          </Route>
         
          <Route exact path="/">
          <TextForm heading = "Enter the text" mode={mode}/> {/*we can use alert in text form so that whenever we click on a button it shows a alert*/ }
            
          </Route>
        </Switch>
   
        
        </div>
        </Router>
    
  {/*<About/>*/}
  </>
  );
}

export default App;
