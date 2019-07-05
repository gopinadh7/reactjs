import React, { Component } from "react";
class notfound extends Component {
  render() {
    return (
      <div>
        <h1>Page Not Found</h1>
        <img
          src={require("../data/images/iphone-xr.png")}
          alt=""
        />
      </div>
    );
  }
}

export default notfound;