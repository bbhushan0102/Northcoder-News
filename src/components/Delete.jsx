import React from "react";
import * as api from "../api";

function Delete({ id }) {
  return <button onClick={() => api.deleteCommentById(id)}>Delete </button>;
}

export default Delete;
