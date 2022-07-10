import React, { useState } from "react";
import { axios } from "axios"
import "./App.css";

function App() {
  const [code, setCode] = useState("");
  const [language,setLanguage] = useState("C");
  const [output,setOutput] = useState("");

  const  handleSubmit = async () => {
    console.log(code);
    const payload = {
      language,
      code 
    };
    console.log(payload)
    try{
      console.log(121)
      const {data} = await axios.post("http://localhost:5000/run",payload)
      console.log(data);

      setOutput(data.output);
    }catch(err){
      console.log(err.response);
    }
  
  };

  return (
    <div>
      <div className="App">
        <h1>CodeWeeds</h1>
  <form action='D:\Vs Code\Compiler\post' method='run'>
     <label for="language">Choose a language:</label>
      <select id="language" value={language} onChange={(e)=>{
        setLanguage(e.target.value);
      }}>
          <option value="c">C</option>
          <option value="py">py</option>
      </select>
      </form>
        <textarea
          rows="20"
          cols="75"
          value={code}
          onChange={(e) => {
            setCode(e.target.value);
          }}
        ></textarea>
        
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <p>{output}</p>
    </div>
  );
}

export default App;
