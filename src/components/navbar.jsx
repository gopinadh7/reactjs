import React, {Component } from 'react';

class navbar extends Component {
    state = {  }
    render() { 
        return (
            <>
      <nav className="navbar  navbar-expand-md navbar-dark bg-dark ">
        <a className="navbar-brand" href="http://localhost:3000">
          E-Commerce {this.props.totalcount}
        </a>
      </nav>
    </>
          );
    }
}
 
export default navbar;