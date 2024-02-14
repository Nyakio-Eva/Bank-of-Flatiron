import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../src/App.css'
import TransactionTable from "./transactionsTable";
import TransactionForm from "./Form";
import SearchBar from "./searchbar";


function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  useEffect(() => {
    fetchTransactionData();
  }, []);

  const fetchTransactionData = async () => {
    try {
      const response = await fetch('http://localhost:3000/transactions');
      if (!response.ok) {
        throw new Error('Failed to fetch transactions');
      }
      const data = await response.json();
      console.log(data);
      setTransactions(data);
      setFilteredTransactions(data);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
    setFilteredTransactions([...filteredTransactions, newTransaction])
  };
  
  function handleSearch(){
    const filteredTransactions = transactions.filter((transaction) => {
      if(searchTerm.trim() === ''){
       return true;
     } else{
       return transaction.description.toLowerCase().includes(searchTerm.toLowerCase());;
     }
   });

    setFilteredTransactions(filteredTransactions);
  };

 
  return (
    <div className="container">
      <header className="App-header">
        <h1>Bank of Flatiron</h1>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} onSearch= {handleSearch} />
      </header>

      <TransactionTable transactions={filteredTransactions} />
      <TransactionForm onSubmit={addTransaction} />
      
    </div>
  );
}

export default App;
