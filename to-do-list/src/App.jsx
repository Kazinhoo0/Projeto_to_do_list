import logo from './logo.svg';
import './App.css';
import React from 'react'
import To_Do_List from './rotes/Login'
import Index from './rotes/Index'
import CriarLembrete from './rotes/CriarLembretes';


// import Index from './rotes/Index';




function App() {
  return (
    <>
      {/* <To_Do_List></To_Do_List> */}
      {/* <Index></Index> */}
      <CriarLembrete></CriarLembrete>
    </>
  )
}
export default App;
