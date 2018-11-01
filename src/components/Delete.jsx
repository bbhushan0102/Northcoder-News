import React from "react";

function Delete(props) {
  return <button onClick={() => props.deleteComment(props.id)}>Delete </button>;
}

export default Delete;
