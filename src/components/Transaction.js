import React from "react";

//step 1
//The transaction prop will be added, passing
// in data rendered from the API. From the API,
// data will have the following: 
//id, date, description, category, and amount.
function Transaction({transaction}) {
  return (
    <tr>
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>{transaction.amount}</td>
    </tr>
  );
}

export default Transaction;

//Upper level container hirerachy
//Transaction->TransactionList->AccountContainer
//->AddTransactionForm-Search