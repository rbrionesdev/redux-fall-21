import React from "react";
import { useDispatch } from "react-redux";

const Todo = ({ id, complete, todo }) => {
  const dispatch = useDispatch();
  return (
    <p
      onClick={() => dispatch({ type: "TOGGLE_TODO", id })}
      style={complete ? { textDecoration: "line-through", color: "grey" } : {}}
    >
      {todo} (id: {id})
    </p>
  );
};

export default Todo;