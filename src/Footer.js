import React from "react";
import { connect } from "react-redux";

const Footer = ({ setFilter, filter }) => {
  return (
    <div>
      <p
        style={filter === "all" ? { color: "blue" } : {}}
        onClick={() => setFilter("all")}
      >
        All
      </p>
      <p
        style={filter === "complete" ? { color: "blue" } : {}}
        onClick={() => setFilter("complete")}
      >
        Complete
      </p>
      <p
        style={filter === "incomplete" ? { color: "blue" } : {}}
        onClick={() => setFilter("incomplete")}
      >
        InComplete
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filter: state.filter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFilter: (filter) => dispatch({ type: "SET_FILTER", filter }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);