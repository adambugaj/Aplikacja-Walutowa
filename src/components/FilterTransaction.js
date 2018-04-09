import React from 'react';
import { connect } from 'react-redux';

// Pokaż transakcje o największej kwocie
const FilterTransaction = (props) => {
  console.log(props.transaction[0]);
  return (
    <div>
      <p>Nazwa: <strong>{props.transaction[0] !== undefined && props.transaction[0].transactionName}</strong></p>
      <p>Kwota w Euro: <strong>{props.transaction[0] !== undefined && props.transaction[0].transactionEuro}</strong> €</p>
      <p>Kwota w PLN: <strong>{props.transaction[0] !== undefined && props.transaction[0].transactionHigh}</strong> zł</p>
    </div>
  )
}
//transaction = {props} - przenieś dane transakcji, która użytkownik chce usunac do komponentu RemoveTransaction

const mapStateToProps = (props) => {
  console.log(props)
  return {
    transaction: props.transaction.sort((a,b) => {
          console.log(a)
          return b.transactionHigh - a.transactionHigh;
    }),
    trans: props.transaction
  };
};

export default connect(mapStateToProps)(FilterTransaction);
