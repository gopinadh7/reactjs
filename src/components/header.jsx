import React from "react";
const Header = props => {
  return (
    <React.Fragment>
      <h1
        className="container text-center"
        style={{
          fontSize: 40,
          fontFamily: "Italique gras",
          color: "3FFFFF",
          backgroundColor: "cyan"
        }}
      >
        E-Commerce
      </h1>
      <p align="right">{props.date}</p>
    </React.Fragment>
  );
};

export default Header;