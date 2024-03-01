import React, { useState } from "react";
import './App.css';
import TooDoInput from "./TooDoInput";
import TooDoList from "./TooDoList";

function App(){

  const [listTodo, setListTodo] = useState([]);
  let addList = (inputText) =>{
    setListTodo(...listTodo, inputText);
  }

  return(
    <>
    <div className="main-container">
      <div className="center-container">

        <TooDoInput  addList={addList}/>
        <TooDoList />

      </div>
    </div>
    </>
  )
}
export default App;