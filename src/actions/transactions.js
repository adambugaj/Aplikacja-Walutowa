const addTransaction = ({
  transactionName = '',
  transactionValue = ''
} = {}
) => ({
  type: "ADD_TRANSACTION",
  transaction: {
    transactionID: `${Math.floor(Math.random() * 1000)}.${Math.floor(Math.random() * 1000)}`,
    transactionName,
    transactionValue
  }
});

const checkTransaction = (transaction) => {
  return ({
    type: "ADD_TRANSACTION",
    transaction
  });
};

const removeTransaction = ({ transactionID } = {}) => ({
  type: 'REMOVE_TRANSACTION',
  transactionID
});

export { addTransaction, removeTransaction };
