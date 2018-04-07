import React from 'react';
import RemoveTransaction from './RemoveTransaction';

// Pokaż listę zapisanych transakcji
const TransactionList = (props) => {
  console.log(props);
  return (
    <div>
      <p>Nazwa: <span>{props.transactionName}</span></p>
      <p>Kwota: <span>{props.transactionValue}</span></p>
      <RemoveTransaction transaction = {props}/>
    </div>
  )
}
//transaction = {props} - przenieś dane transakcji, która użytkownik chce usunac do komponentu RemoveTransaction
export default TransactionList;
