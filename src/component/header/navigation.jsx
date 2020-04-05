import React, { Component } from "react";
import Phone from './common'

import "../../sass/header/navigation.scss";

class Navigation extends Component {

  render() {
    return (
      <nav className="nav nav-header">
        <div className="nav nav-header-item nav-left">
          Free Shipping on all orders
        </div>
        <div className="nav nav-header-item nav-right">
          <div className="nav nav-list-infor">
            <div className="nav nav-item nav-phone">
              <span className="fal fa-phone-alt nav-icon"></span>
              {/* <a className="nav-link" href="tel:123-456-7890p123">
                +012025550181
              </a> */}
              <Phone />
              
            </div>
            <div className="nav nav-item nav-login">
              <span className="fal fa-lock-alt nav-icon"></span>
              <a className="nav-link" href="https://www.google.com/">
                Login/Register
              </a>
            </div>
            <div className="nav nav-item nav-languages">
              <span className="fas fa-comments-alt nav-icon"></span>
              <button type="submit" name="English" value="English" className="btn-languages"
                onMouseEnter={this.handleHover}
                onMouseLeave={this.handleLeave}
              >
                English <i className="far fa-chevron-down"></i>
              </button>
            </div>
            <div className="nav nav-sub-menu">
              <button>French</button>
              <button>German</button>
              <button>Italian</button>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
