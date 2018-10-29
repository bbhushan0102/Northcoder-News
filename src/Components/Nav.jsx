import React from "react";
import { Link } from "@reach/router";

const Nav = () => {
  return (
    <div>
      <Link to="/">|Home|</Link>
      <Link to="/topics">|Topics|</Link>
    </div>
  );
};
export default Nav;
