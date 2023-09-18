import React, { useState, useEffect } from "react";
import './style.css';
import dice from './dice.svg';
import line from './line.svg';

const App = () => {

  const [advice, setAdvice] = useState ("");
  const [AdviceID, setAdviceID] = useState ("");

  useEffect (() => {
    fetch("https://api.adviceslip.com/advice")
    .then((response)=> response.json())
    .then((data) => {
      setAdvice(data.slip.advice)
      setAdviceID(data.slip.id)
    })
  })
  
 return (
<div class="parent-container">



  <div class="advice-container">
  <h2>Advice Generator App with ReactJS</h2>
  <h4> By Asbichi (Abdulkadir Shehu Bichi)</h4>
        <div class="advice-number center">
          ADVICE #<span class="advice-id">{AdviceID}</span>
        </div>

        <div class="advice-message">
        {advice}
        </div>
        <div class="advice-line">
          <img src={line}  alt="" class="bar" />
        </div>
        <div>
          <img  class="advice-dice" src={dice} alt="" onClick={() => window.location.reload()} />
           </div>
      </div>


       
</div>
 );
};
export default App