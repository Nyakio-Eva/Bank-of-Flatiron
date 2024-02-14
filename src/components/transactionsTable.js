import React from "react";
import { Table } from "react-bootstrap"

function TransactionTable({transactions}){
    
  return(
    <div className="container mt-3">
      <h3 className="text-center"style={{ color: "#0a511a"  }} >Transactions</h3>
        <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th style={{ color: "#0a511a" }}>ID</th>
          <th style={{ color: "#0a511a" }}>Description</th>
          <th style={{ color: "#0a511a" }}>Amount</th>
          <th style={{ color: "#0a511a" }}>Category</th>
          <th style={{ color: "#0a511a" }}>Date</th>
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