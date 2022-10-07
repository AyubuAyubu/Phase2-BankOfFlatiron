import React, {useState} from "react";
import { v4 as uuid } from 'uuid'

const transactionAPI='http://localhost:8001/transactions'
//step 4
/*
We need to Add new transactions. 
The transaction added should be posted to the backend API.
To add new transaction, 
We  started with the AddTransactionForm component
*/
function AddTransactionForm() {
  //part1 set useState variables and methods
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')
  const [category, setCategory] = useState('')

  //part 2
  //set value using useState and target the input
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value)
  }

  const handleAmountChange = (event) => {
    setAmount(event.target.value)
  }

  const handleDateChange = (event) => {
    setDate(event.target.value)
  }

  const handleCategoryChange = (event) => {
    setCategory(event.target.value)
  }

 
  //part 3
  /*Then used state hooks 
  1.to capture values
  2.create an event handler to send the data to the API once
   the form is submitted*/

    //value capturing
    const handleChange = (event) => {
      event.preventDefault()

      const newTransaction = {
        id: uuid(),
        date: date,
        description: description,
        category: category,
        amount: amount,
      }
      //Data send  to api using POST method
      fetch(transactionAPI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTransaction),
    })
      .then((response) => response.json())
      .then((newQuestion) => console.log(newQuestion))
  }

  return (
    <div className="ui segment" onSubmit={handleChange}>
      <form className="ui form">
        <div className="inline fields">
        <input
            type='date'
            name='date'
            value={date}
            onChange={handleDateChange}
            required
          />
          <input
            type='text'
            name='description'
            placeholder='Description'
            value={description}
            onChange={handleDescriptionChange}
            required
          />
          <input
            type='text'
            name='category'
            placeholder='Category'
            value={category}
            onChange={handleCategoryChange}
            required
          />
          <input
            type='number'
            name='amount'
            placeholder='Amount'
            step='0.01'
            onChange={handleAmountChange}
            required
          />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
