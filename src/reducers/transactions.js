
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
    case 'REMOVE_TRANSACTION':
    console.log(action)
      return state.filter(({ transactionID }) => {
        console.log(action)
        return transactionID !== action.transactionID;
      });
    default:
      return state;
  }

};

export default transactionReducer;
