import React from "react";
import PropTypes from "prop-types";

const LogOut = (props) => {
  return <button onClick={props.toggleLogout}>Log Out</button>;
};

LogOut.propTypes = {
  toggleLogout: PropTypes.func.isRequired
};

export default LogOut;
