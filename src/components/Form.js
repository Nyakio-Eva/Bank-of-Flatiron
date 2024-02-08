import React,{useState} from "react";



function TransactionForm({onSubmit}){
  const [id, setId] =useState("")  
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ id, date, description, amount });
    setId('');
    setDate('');
    setDescription('');
    setAmount('');
  };

  return (
   <div>
      <form onSubmit={handleSubmit}>
        <label>ID:</label>
        <input type="id" value={id} onChange={(e) => setId(e.target.value)} required/>
        <label>Date:</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        <br />
        <label>Description:</label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
        <br />
        <label>Amount:</label>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
        <br />
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
};
    

export default TransactionForm