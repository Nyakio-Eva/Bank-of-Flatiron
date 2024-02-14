import React,{useState} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



function TransactionForm({onSubmit}){
  const [id, setId] = useState("");  
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ id, date, description, amount });
    setId('');
    setDate('');
    setDescription('');
    setCategory('');
    setAmount('');
  };

  return (
   <div className="d-flex justify-content-center align-items-center">
    <div>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>ID:</Form.Label>
          <Form.Control type="text" value={id} onChange={(e) => setId(e.target.value)} 
            placeholder="Enter id"  required/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Date:</Form.Label>
          <Form.Control type="date" placeholder="Enter date" value={date} 
            onChange={(e) => setDate(e.target.value)} required/>
        </Form.Group>
        <Form.Group className="mb-3" >
        <Form.Label>Description:</Form.Label>
        <Form.Control type="text" placeholder="Enter description" value={description} 
            onChange={(e) => setDescription(e.target.value)} required/>
        </Form.Group>

        <Form.Group className="mb-3" >
        <Form.Label>Category:</Form.Label>
        <Form.Control type="text" placeholder="Enter category" value={category} 
            onChange={(e) => setCategory(e.target.value)} required/>
        </Form.Group>
        
        <Form.Group className="mb-3" >
        <Form.Label>Amount:</Form.Label>
        <Form.Control type="number" placeholder="Enter amount" value={amount} 
            onChange={(e) => setAmount(e.target.value)} required/>
        </Form.Group>
        <Button variant="success" type="submit">
          submit
        </Button>
      </Form>
     </div>
    </div>
  );
};
    

export default TransactionForm