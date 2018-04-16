import React from 'react';
import { connect } from 'react-redux';
import { removeTransaction } from '../actions/transactions';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';


const RemoveTransaction = (props) => {
  return (
    <div>
          <MuiThemeProvider>
          <FlatButton label="Remove" onClick={ (trans) => {
            props.dispatch(removeTransaction({transactionID: props.transaction.transactionID}));
            }}
          />
        </MuiThemeProvider>
    </div>
  )
}

const mapStateToProps = (state, props) => {
  // Zwraca odpowiednie ID transakcji, która chcemy usunąc
  return {
    transaction: state.transaction.find((trans) => {
      return trans.transactionID === props.transaction.transactionID;
    })
  };
}
export default connect(mapStateToProps)(RemoveTransaction);
