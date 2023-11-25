import './App.css';
import Navbar from './components/Navbar';
import FormText from './components/form'
import Alert from './components/Alert';
import React, {useState} from 'react';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  const [mode , setMode] = useState({colorr : 'primary', modetext: 'Light Mode'});
  const [alert, setAlert] = useState(null);
  const showAlert = (type, msg) => {
    setAlert({
      types : type,
      message : msg
    })
    setTimeout(() => { setAlert(null)}, 1500)
  }
  const toggleMode = () => {
    if(mode.colorr === 'primary'){
        setMode({colorr : 'dark', modetext: 'Dark Mode'});
        document.body.style.background = '#102547';
        document.title = 'TextUtils - Dark Mode';
        showAlert("success", "Dark mode has been enabled");
        setTimeout(() => {
          setAlert(null);
        }, 1500)
        
    }else{
      setMode({colorr : 'primary', modetext: 'Light Mode'});
      document.body.style.background = 'white';
      document.title = 'TextUtils - Light Mode';
      showAlert("success", "Light mode has been enabled");
       setTimeout(() => {
        setAlert(null);
      }, 1500)
     }
  }
  const Green = () => {
    setMode({color : 'success', modetext : 'Dark'})
  }
  return (
    <>
    <Router>
    <Navbar mode={mode.colorr} modeText={mode.modetext} toggleMode={toggleMode} green={Green}/>
    <Alert alert={alert}></Alert>
    <div className="container py-3">
      <div className="row">
        <Routes>
          <Route exact path='/about' element={ <About changetheme={toggleMode}/>}></Route>
          <Route exact path='/' element={<FormText mode={mode.colorr} alert={alert} showAlert={showAlert} title="Enter Text to Analyze Below"></FormText>}>
          </Route>
        </Routes>
      </div>
    </div>
    </Router>
    </>
  );
}

export default App;
