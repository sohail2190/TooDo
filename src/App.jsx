import React, { useState } from "react";
import './App.css';
import TooDoInput from "./TooDoInput";
import TooDoList from "./TooDoList";

function App(){

  const [listTodo, setListTodo] = useState([]);
  let addList = (inputText) =>{
    if(inputText !== '')
      setListTodo([...listTodo, inputText]);
  }

  const deleteListItem = (key) =>{
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1);
    setListTodo([...newListTodo])

  }
  

  return(
    <>
    <div className="main-container">
      <div className="center-container">

        <TooDoInput  addList={addList}/>

        <h1 className="app-heading">ToDo</h1>
        <hr/>

        {listTodo.map((listItem, i) => (
  <TooDoList key={`${listItem}-${i}`} item={listItem} index={i} deleteItem={deleteListItem} />
))}


      </div>
    </div>
    </>
  )
}
export default App;