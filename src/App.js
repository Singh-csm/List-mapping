import React from 'react';

import "./app.css"
function App() {
 
  const list = ["milk","curd","vegetables","cheese","fruits"]

  return (
<div className='main'>
<p className='main' style={{backgroundColor:"goldenrod"}}>Lists</p>
<h1>{"List of materials to be shopped"}</h1>
<ul style={{fontWeight:"bold", backgroundColor:"teal"}}>
      {
        list.map(item => <li style={{border:"2px solid red", padding:"12px",borderBlockEndColor:"bisque"}}>{item}</li>)
      }
    </ul>
</div>

  );
}

export default App;