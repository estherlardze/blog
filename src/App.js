import React from "react";
import './App.css';
import Main from './components/Main/Main';
import SideBar from "./components/SideBar/SideBar";
import Rightbar from "./components/Rightbar/Rightbar";


const App = () => {
  return (
    <div className="acme__body">
        <SideBar />
        <Main />
        <Rightbar />
    </div>
  )
}

export default App