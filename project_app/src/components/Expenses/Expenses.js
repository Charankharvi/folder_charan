import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {

 
  const [filteredYear, setFilteredYear] = useState("");
  const [onChangeInputData,setOnchangeInputData]=useState("")
  
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    // setOnchangeInputData(selectedYear);
   
  };

  
  const onChangeInputValuehandler = (enteredYear) => {
    setOnchangeInputData(enteredYear);

    // setFilteredYear();
};


   
const filteredExpenses = props.items.filter((expense) => {




  
   
  return expense.date.getFullYear().toString() === filteredYear;
  
});



  
  const inputExpenses = props.items.filter((expense) => {
    if (onChangeInputData === '') {
    
      return expense
  }
  else if 
      (expense.title.toLowerCase().includes(onChangeInputData.toLowerCase())){
     
      return expense
  }

    
  });



  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}

           onChangeInputValue={onChangeInputValuehandler}
           onChangeInput={onChangeInputData}
        />
        





{/* 
        {filteredYear !=='' ?

filteredExpenses.length===0?
<p style={{color: "white"}}>NO ExpensesItems Found</p>

:null
:


filteredExpenses.map((expense)=>(
  <ExpenseItem
  key={expense.id}
  title={expense.title}
  amount={expense.amount} 
  date={expense.date}
  />
  )) }  */}



{
        filteredYear ==="All" ?
         props.items.map((expense)=>(
        <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
          />
          )) :
        
          // filteredExpenses.length===0?
          //   <p style={{color: "white"}}>NO ExpensesItems Found</p>:
        
        filteredExpenses.map((expense)=>(
          <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
       
          />
          )) 
        }


{/* 
     {inputExpenses.map((expense)=>(
  <ExpenseItem
  key={expense.id}
  title={expense.title}
  amount={expense.amount}
  date={expense.date}
  />
  )) }  */}

         

 


      </Card>
    </div>
  );
};

export default Expenses;
