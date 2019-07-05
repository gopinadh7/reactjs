import React from "react";

const Cart = ({ totalNumOfItems }) => {
  return (
    <button className="btn btn-primary pull-right">
      <i className="fa fa-shopping-cart" aria-hidden="true" />
      <span className="badge badge-light m-2">{totalNumOfItems}</span>
    </button>
  );
};

export default Cart;