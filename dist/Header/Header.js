import React from "react";
import './header.css';
var styles = {
  fontWeight: '800'
};

var Header = function Header() {
  return React.createElement("div", {
    className: 'header-main',
    style: styles
  }, "This is the header!!");
};

export default Header;