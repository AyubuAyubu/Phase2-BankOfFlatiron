import React,{useState,useEffect} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

//step 3
//We useState Hooks and useEffects to get data from the API.

function AccountContainer() {
  const[transactions,setTransactions]=useState([])
  
  const[searchItem, setSearchItem]=useState('')

  const fetchTransaction=()=>{
    fetch('http://localhost:8001/transactions')
    .then((response) => response.json())
    .then((data) => {
      setTransactions(data)
    })
  }

  useEffect(() => {
    fetchTransaction()
  }, [])
   
  const searchFilteredItems = (event) => {
    setSearchItem(event.target.value)
  }

  //step 7
   /*
    We updates the value to the input to the latest
    input as a user keys in. Created a function to filter
    trough the response array and return 
    only transactions that match the search input and pass the function
    to TransactionsList component as prop
   */
    const displaySearchItems = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchItem.toLowerCase())
  )
  console.log(displaySearchItems)

  //step 6
  //Next, inside the AccountContainer component, 
  // We wrote the logic to filter out data. 
  return (
    <div>
      <Search search={searchItem} onSearchChange={searchFilteredItems}/>
      <AddTransactionForm />
      <TransactionsList transaction={displaySearchItems}/>
    </div>
  );
}

export default AccountContainer;

