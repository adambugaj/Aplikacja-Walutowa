import React from 'react';

const TransactionList = ({transactionName, transactionValue}) => {
  console.log(transactionName);
  return (
    <div>
      <p>Home-office days: <span>{transactionName}</span></p>
      <p>Learning days: <span>{transactionValue}</span></p>
    </div>
  )
}

export default TransactionList;
