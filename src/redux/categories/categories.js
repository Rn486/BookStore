export const { checkStatus } = categories.actions;

initialState = [];

export const CheckStatus = () => ({
  type: checkStatus,
});

export const checkReducers = (state = initialState, action) => {
  switch (action.type) {
    case checkStatus:
      return 'under construction';
    default:
      return state;
  }
};

export default { checkStatus, checkReducers}
