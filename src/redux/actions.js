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

export const filterBugsAction = (compId) => {
  return {
    type: "FILTER_BUGS",
    payload: compId,
  };
};

export const selectCompanyAction = (compId) => {
  return {
    type: "SELECT_COMPANY",
    payload: compId,
  };
};
