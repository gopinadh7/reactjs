import React, { Component } from "react";
class productdetails extends Component {
  handleSave = () => {};
  render() {
    return (
      <div>
        <h1>Product Details----{this.props.match.params.id}</h1>
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}

export default productdetails;