import React from 'react';
import { connect } from 'react-redux';

// Pokaż transakcje o największej kwocie
const FilterTransaction = (props) => {
  console.log(props);

  return (
    <div>
      <p>Nazwa: <span>{props.transactionName}</span></p>
      <p>Kwota w Euro: <span>{props.transactionEuro}</span></p>
      <p>Kwota w PLN: <span>{props.transactionZloty * props.transactionEuro}</span></p>
    </div>
  )
}
//transaction = {props} - przenieś dane transakcji, która użytkownik chce usunac do komponentu RemoveTransaction

const mapStateToProps = (props) => {
  console.log(props)
  return {
    transaction: props.transaction.map((trans) => {
      return trans.transactionEuro;
    }).sort((a,b) => {
          return b - a;
    }),
    trans: props.transaction
  };
};

export default connect(mapStateToProps)(FilterTransaction);
