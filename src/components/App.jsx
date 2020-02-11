import React from "react";
import Header from "./Header";
import Profile from "./Profile";

function App(){
var cWholeApp = {
  textAlign: 'center'
}
  return (
    <div style = {cWholeApp}>
      <Header/>
      <br></br>
      <br></br>
      <br></br>
      <Profile/>
    </div>
  );
}

export default App;
