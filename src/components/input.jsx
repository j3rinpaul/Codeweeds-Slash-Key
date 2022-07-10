import React from 'react'
import { useState  } from 'react';
import "./input.css"
//sentimental analysis on coding platform to improve user experience
//still privacy is an issue

const [code ,setCode] = useState

const handleSubmit = ()=>{
    console.log(code);
}


function Input() {
  return (
    <div>
    <h2>CodeWeeds</h2>
    <form action='' method='run'>
    <label for="language">Choose a language:</label>
    <select id="language" name="language">
        <option value="c">C</option>
        <option value="py">py</option>
    </select>
    <label>
        <textarea 
        onPaste={(e)=>{
            e.preventDefault();
            return false}} type="text"
             className='input'
              value={code}
              onChange={(e)=>{
                setCode(e.target.value);
              }}
             />
    </label>
    <input type="submit" value="Submit" onClick={handleSubmit} className='button'/>
    </form>

    </div >
    )
}

export default Input