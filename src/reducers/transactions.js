
const transactionReducerDefault = [];

const transactionReducer = (state = transactionReducerDefault, action) => {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return [
        ...state,
        action.transaction
      ];
    case 'REMOVE_TRANSACTION':
      return state.filter(({ transactionID }) => {
        return transactionID !== action.transactionID;
      });
    case 'EDIT_TRANSACTION':
    console.log(action, state)
      return state.map((trans) => {
        console.log(trans, action.updates)
        return {
          ...trans,
          transactionSum: action.updates,
          transactionHigh: trans.transactionEuro * action.updates
        }
      });
      case 'FILTER_TRANSACTION':
        console.log(state);
    default:
      return state;
  }

};

export default transactionReducer;
