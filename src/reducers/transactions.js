

const transactionReducerDefault = [];

const transactionReducer = (state = transactionReducerDefault, action) => {
  console.log(action)
  switch (action.type) {
    case 'ADD_TRANSACTION':
    console.log(action,state)
      return [
        ...state,
        action.transaction
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => {
        return id !== action.id;
      });
    default:
      return state;
  }

};

export default transactionReducer;
