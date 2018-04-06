const addTransaction = ({
  transactionName = '',
  transactionValue = ''
} = {}
) => ({
  type: "ADD_TRANSACTION",
  transaction: {
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

export { addTransaction, checkTransaction };
