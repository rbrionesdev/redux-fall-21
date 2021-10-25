import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

const TodoList = ({ todos, filter }) => {
  const filterTodos = () => {
    if (filter === "complete") return todos.filter((t) => t.complete);
    if (filter === "incomplete") return todos.filter((t) => !t.complete);
    return todos; //'all case'
  };
  return (
    <div>
      <h1>TodoList</h1>
      {filterTodos().map((t) => (
        <Todo key={t.id} {...t} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    filter: state.filter,
  };
};

export default connect(mapStateToProps)(TodoList);