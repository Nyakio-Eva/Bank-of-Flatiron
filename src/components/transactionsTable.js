import React, { useState } from "react";
import { Table } from "react-bootstrap"

function TransactionTable({transactions}){
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');

  const handleSort = (column) => {
    if(sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    }else{
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const sortedTransactions = [...transactions].sort((a,b) => {
    if(sortColumn === 'category' || sortColumn === 'description'){
     if(a[sortColumn].toLowerCase() > b[sortColumn].toLowerCase()){ 
       return sortDirection === 'asc' ? 1 : -1;
     }else{
      if(a[sortColumn].toLowerCase() < b[sortColumn].toLowerCase()){
        return sortDirection === 'asc' ? -1 : 1;
      }
     }

    }
    return 0;
  });
    
    
  return(
    <div className="container mt-3">
      <h3 className="text-center"style={{ color: "#0a511a"  }} >Transactions</h3>
        <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th style={{ color: "#0a511a" }} onClick={() => handleSort('id')} >ID</th>
          <th style={{ color: "#0a511a" }} onClick={() => handleSort('description')} >Description</th>
          <th style={{ color: "#0a511a" }} onClick={() => handleSort('amount')} >Amount</th>
          <th style={{ color: "#0a511a" }} onClick={() => handleSort('category')} >Category</th>
          <th style={{ color: "#0a511a" }} onClick={() => handleSort('date')} >Date</th>
        </tr>
      </thead>
      <tbody>
          {sortedTransactions.map((transaction)=>(
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