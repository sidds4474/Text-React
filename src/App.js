//import './App.css';

import Navbar from './components/Navbar';
import TextBox from './components/TextBox';
import About from './components/About';
import Alert from './components/Alert';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

  
import React,{useState} from 'react';

 function App() {  // functional Component

  const[mode,setMode] = useState('light')
  const [alert,setAlert]= useState(null)

  const showAlert=(message)=>{
    setAlert({
      msg:message
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }


  const changeMode=()=>{

    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'grey'
      showAlert("Dark Mode Enabled")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode Enabled")
    }
  }

  return (
    <div>
    <Router>  
    <Navbar title="Text Utility App" mode={mode} changeMode={changeMode}/>
    <Alert alert={alert}/>
    <Switch>
    <Route path="/about">
    <About />
    </Route>
    <Route path="/">
    <TextBox heading="Enter the text below :" mode={mode} showAlert={showAlert}/>
    </Route>
    </Switch>
    </Router>
    </div> 
  );
}

export default App;