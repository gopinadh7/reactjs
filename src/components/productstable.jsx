import React, { Component } from "react";
import Like from "./common/like";
import { Link } from "react-router-dom";
class productstable extends Component {
  showNoProductsWarning(numOfProducts) {
    if (numOfProducts === 0) {
      return (
      <tr>
        <td> No products found</td>
        </tr>
      );
    }
  };  

  getSortIcon = colName => {
    const { sortColumn } = this.props;
    if (sortColumn.colName !== colName) return null;
    if (sortColumn.order === "asc")
      return <i className="fa fa-sort-asc" aria-hidden="true" />;
    else return <i className="fa fa-sort-desc" aria-hidden="true" />;
  };
  raiseSort(colName) {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.colName === colName) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.order = "asc";
      sortColumn.colName = colName;
    }
    this.props.onSort(sortColumn);
  }
  render() {
    const {
      products,
      onAddToCart,
      onDeleteFromCart,
      onDeleteFromTable,
      onLike
    } = this.props;

    return (
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Image</th>
            <th onClick={() => this.raiseSort("name")}>
              Name{this.getSortIcon("name")}
            </th>
            <th onClick={() => this.raiseSort("price")}>
              Price <i className="fa fa-eur" aria-hidden="true" />
              {this.getSortIcon("price")}
            </th>
            <th onClick={() => this.raiseSort("category.name")}>
              Category {this.getSortIcon("category.name")}
            </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.showNoProductsWarning(products.length)}
          {products.map((product,key) => (
            <tr key={key}>
              <td>
                <Link to={`/products/${product._id}`}>
                  <img
                    src={product.image}
                    width={50}
                    height={50}
                    alt={product.name}
                  />
                </Link>
              </td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.category.name}</td>
              <td>
                <button
                  onClick={() => onAddToCart(product)}
                  className="btn btn-success"
                >
                  +
                </button>
                <button
                  onClick={() => onDeleteFromCart(product)}
                  className="btn btn-warning m-2"
                  disabled={product.numOfItemsInCart === 0 ? "disabled" : ""}
                >
                  -
                </button>
                <Like liked={product.liked} onClick={() => onLike(product)} />
                <button
                  onClick={() => onDeleteFromTable(product)}
                  className="btn btn-danger m-2"
                >
                  x
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default productstable;