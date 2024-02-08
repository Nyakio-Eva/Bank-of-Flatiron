import React, {useState} from "react";

function TransactionTable(){
    const[transactions, setTransactions] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/transactions')
        .then(response => response.json())
        .then(data => setTransactions(data.transactions))
        .catch(error => console.error('Error fetching transactions:', error));
    },[]);
    

    return(
        <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => (
          <tr key={transaction.id}>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.amount}</td>
          </tr>
        ))}
      </tbody>
     </table>
    )
}
export default TransactionTable;