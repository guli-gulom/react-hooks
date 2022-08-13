import React from 'react';
import { useState } from 'react';

const desc = document.getElementById("desc")
const amount2 = document.getElementById("amount")
const form = document.querySelector('form')
const tbody = document.querySelector('tbody')
 


const App = ()=>{
    
    const [spent, setSpent] = useState([
        {description: "Food", amount: 200},
        {description: "Rent", amount: 300},
    ])
 const Write = ()=>{
    tbody.innerHTML = "";
    // eslint-disable-next-line array-callback-return
    spent.map((items, index) => {
        tbody.innerHTML +=` 
        <tr>
           <td>${index + 1}</td>
           <td>${items.description}</td>
           <td>${items.amount}</td>
        
       </tr>
       `
        })
   
 }
 Write()
    form.addEventListener('submit',(e) =>{
        e.preventDefault();
        let newAdd = {
            description: desc.value,
            amount: amount2.value,
        }
        newAdd.description !== "" && newAdd.amount !== 0 ?
            setSpent([...spent, newAdd]) : alert('Fill the form,pls!');
            Write();
         form.reset()
         })
         

         
    return(
      <>
      </>
   
    )
  }
  export default App