import React from 'react'
import "./LoadingPage.css";


function LoadingPage() {
  
    return <div style={{ backgroundColor: 'aqua', height: '100vh', display: 'flex',flexDirection:'column', justifyContent: 'center', alignItems: 'center',  }}>
       <div style={{display:'flex'}}><h1>Weather App</h1> <span>Powered By AI</span></div>

        <div className='loading'> 
            <p> Final Project By Engineer Femi and Engineer Alechenu</p>
        </div>
        <div className="loading-container">
      <div className="loading-circle"></div>
    </div>
  
        
    </div>;
  };
  
  
  

  


export default LoadingPage