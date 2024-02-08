import React from "react";

function TransactionTable({transactions}){
    console.log(transactions)
  return(
    <div>
      <h2>Transactions list</h2>
        <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
          {transactions.map((transaction)=>(
              <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.description}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.category}</td>
              <td>{transaction.date}</td>
            </tr>
          ))}
          
      
      </tbody>
      </table>
    </div>
  )
}
export default TransactionTable;