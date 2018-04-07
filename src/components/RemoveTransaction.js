import React from 'react';
import { connect } from 'react-redux';
import { removeTransaction } from '../actions/transactions';


const RemoveTransaction = (props) => {
  return (
    <div>
          <button label="Remove" onClick={ (trans) => {
            props.dispatch(removeTransaction({transactionID: props.transaction.transactionID}));
            }}
          >Remove</button>
    </div>
  )
}

const mapStateToProps = (state, props) => {
  // Zwróc odpowiednie ID transakcji, która chcemy usunąc
  return {
    transaction: state.transaction.find((trans) => {
      return trans.transactionID === props.transaction.transactionID;
    })
  };
}
export default connect(mapStateToProps)(RemoveTransaction);
