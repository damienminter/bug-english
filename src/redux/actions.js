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

export const selectCompanyAction = (compId) => {
  return {
    type: "SELECT_COMPANY",
    payload: compId,
  };
};
