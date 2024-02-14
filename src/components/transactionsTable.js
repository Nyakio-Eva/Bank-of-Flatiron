import React from "react";
import { Table } from "react-bootstrap"

function TransactionTable({transactions}){
    console.log(transactions)
  return(
    <div className="container">
      <h2>Transactions list</h2>
        <Table striped bordered hover responsive>
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
      </Table>
    </div>
  )
}
export default TransactionTable;