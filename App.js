import React, { useState } from 'react';            
import './App.css';                                

function App() {                                    
  const [answer, setAnswer] = useState(null);
  const handleYes = () => {                         
    setAnswer('Yayy! Get ready by 7 🥹🫶');           
  }

  const handleNo = () => {        
    window.alert("Wanna try that again? 🔪⛓")                        
  };

  return (     
    <div className="App">                                   
    <div className="container">
      <div className="ques">                    
      <h1>Coffee????</h1>
      <p>You are paying</p>
      </div>     

      {!answer && (                                 
        <div className="buttons">                   
          <button onClick={handleYes} className="blinking">Yes </button>  
          <button onClick={handleNo} className="no">No </button>    
        </div>
      )}

      {answer && <p className="response">{answer}</p>}  
    </div>
    </div>
  );
}

export default App;                                  
