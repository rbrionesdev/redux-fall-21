import React, { useState } from "react";
// with useDispatch hook
// import { useDispatch } from "react-redux";
import { connect } from "react-redux";

const TodoForm = ({ dispatch, id }) => {
  // const dispatch = useDispatch(function)
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    // reloading will refresh our store... bad
    e.preventDefault();
    // what do I want to do here

    dispatch({
      type: "ADD_TODO",
      todo: { id: id, todo: name, complete: false },
    });
    dispatch({ type: "INC_ID" });
    setName("");
  };
  return (
    <div>
      <h1>TodoForm</h1>
      <form onSubmit={handleSubmit}>
        <p>todo name</p>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button type="submit">add</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    id: state.nextId,
  };
};
export default connect(mapStateToProps)(TodoForm);