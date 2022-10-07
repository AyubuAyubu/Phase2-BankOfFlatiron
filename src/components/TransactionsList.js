import React from "react";
import Transaction from "./Transaction";

//step 2
/*
Prop  is add at top of the component, 
so we can fetch data from the upper-level component, 
<AccountContainer/>. The data returned will be an array. 
So I mapped through the array "transaction"
 and displayed each item in a table
*/
function TransactionsList({transaction}) {
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
          {transaction.map((data) => (
             <Transaction key={data.id} transaction={data} />
          ))}
      </tbody>
    </table>
  );
}

export default TransactionsList;
