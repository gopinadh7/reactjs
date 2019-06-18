import React from "react";

const navbar = ({ totalCount }) => {
  return (
    <>
      <nav className="navbar navbar-light bg-danger">
        <a className="navbar-brand" href="http://localhost:3000">
        <img src={require("../data/images.jpeg")} width={60} alt="" />
          MyShop
        </a>
      </nav>
    </>
  );
};
export default navbar;