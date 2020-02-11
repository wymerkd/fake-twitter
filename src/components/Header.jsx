import React from "react";

function Navbar(props){
  var navbarStyles = {
    border: "solid lightgrey",
    borderWidth: "1px",
    padding: "10px 20px",
    textAlign: "left",
    color: "grey",
    float: "left",
    marginBottom: "30px"
  }
  var searchStyle = {
    border: "solid lightskyblue",
    padding: "5px 150px 5px 10px",
    borderRadius: "30px",
    float: "right",
    margin: "0px 50px 0px 0px",
    color: "grey"
  }

  var tweetStyle = {
    border: "solid lightskyblue",
    padding: "5px 20px ",
    borderRadius: "30px",
    float: "right",
    color: "grey"
  }

  var hrStyle = {
    border: "1px solid lightgrey",
    margin: "60px 0"
  }

  return (
    <div>
      <span style={navbarStyles}>Home</span>
      <span style={navbarStyles}>Notifications</span>
      <span style={navbarStyles}>Messages</span>
      <span style={tweetStyle}>Tweet</span>
      <span style={searchStyle}>Search</span>
    </div>
  );
}

export default Navbar;
