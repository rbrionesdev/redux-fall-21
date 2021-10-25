//  a reducer is just a function that takes state and a action and returns new state

// the action is just an object with type key which is a string, an optional payload if needed
// {type: 'asdfasd', other(optional):ANY}
const intialState = [];
const todos = (state = intialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.todo];
    case "DELETE_TODO":
      return state.filter((t) => t.id !== action.id);
    case "TOGGLE_TODO":
      return state.map((t) =>
        t.id === action.id ? { ...t, complete: !t.complete } : t
      );
    default:
      return state;
  }
};

export default todos;