import React from "react";
import { Link } from "@reach/router";

const Nav = () => {
  return (
    <div className="nav">
      <Link to="/">|Home|</Link>
      <Link to="/topics">|Topics|</Link>
      <Link to="/users">|Users|</Link>
    </div>
  );
};
export default Nav;
