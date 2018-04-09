const addTransaction = ({
  transactionName = '',
  transactionEuro = 0,
  transactionZloty = 0,
  transactionSum = 0
} = {}
) => ({
  type: "ADD_TRANSACTION",
  transaction: {
    transactionID: `${Math.floor(Math.random() * 1000)}.${Math.floor(Math.random() * 1000)}`,
    transactionName,
    transactionEuro,
    transactionZloty,
    transactionSum
  }
});

const removeTransaction = ({ transactionID } = {}) => ({
  type: 'REMOVE_TRANSACTION',
  transactionID
});

const editTransaction = (updates) => {
  return {
    type: 'EDIT_TRANSACTION',
    updates
  }
};

const filterTransaction = (transactionSum) => {
  return {
    type: 'FILTER_TRANSACTION',
    transactionSum
  }
};

export { addTransaction, removeTransaction, editTransaction };
