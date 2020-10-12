export const addBugAction = (bug) => {
  return {
    type: "ADD_BUG",
    payload: bug,
  };
};

export const selectBugAction = (bug) => {
  return {
    type: "SELECT_BUG",
    payload: bug,
  };
};
