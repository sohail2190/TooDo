import React, { useState } from 'react'

function TooDoInput(props) {

    const [inputText, setInputText] = useState('');

  return (
    <div className="input-container">
        <input type="text" className='Input-box-todo' 
        placeholder='Enter Your Todo Task' 
        value={inputText}
        onChange={ e=>{
            setInputText(e.target.value);
        }}/>
        <button className='add-btn' onClick={ ()=>{
            props.addList(inputText)
            setInputText('');
        }}>
            +</button>
        
    </div>
  )
}

export default TooDoInput;