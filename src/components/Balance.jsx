import React from 'react'
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

const Balance = () => {
    const [ExpenseArray, setExpenseArray] = useState([]);
    const [IncomeArray, setIncomeArray] = useState([]);
    const [form, setForm] = useState({ desc: "", date: "", mode: "", amount: "" });
    const [totalExpense, setTotalExpense] = useState(0);
    const [totalIncome, setTotalIncome] = useState(0);
    const [totalBalance, setTotalBalance] = useState(0);
    

  
  useEffect(() => {
    let expense = localStorage.getItem("expenses");
    if (expense) {
        setExpenseArray(JSON.parse(expense))
    }

    }, [])
    
  useEffect(() => {
    let income = localStorage.getItem("incomes");
    if (income) {
        setIncomeArray(JSON.parse(income))
    }

    }, [])

    useEffect(() => {
        const exptotal = ExpenseArray.reduce((acc, expense) => acc + parseFloat(expense.amount || 0), 0);
        setTotalExpense(exptotal);
      }, [ExpenseArray]
    );

    useEffect(() => {
        const inctotal = IncomeArray.reduce((acc, income) => acc + parseFloat(income.amount || 0), 0);
        setTotalIncome(inctotal);
      }, [IncomeArray]
    );

    useEffect(() => {
       setTotalBalance(totalIncome-totalExpense);
    }, [totalIncome,totalExpense]
    );
  
 

    const combinedArray = [...ExpenseArray, ...IncomeArray].sort((a, b) => new Date(a.date) - new Date(b.date));



  return (
    <div>
        <div className='passwords my-28'>
                {combinedArray.length === 0 && <div className='my-24 text-center font-semibold font-cursive'>No Finance Recorded</div>}
                {combinedArray.length !== 0 && (
                    <table className="table-auto mx-auto md:w-3/4 overflow-hidden rounded-md pt-24 mb-16 ">
                        <thead className=' text-white w-fit px-4 my-5 md:text-xl text-xs'>
                            <tr>
                                <th className='py-4 px-2'>Status</th>
                                <th className='py-3 px-2'>Date</th>
                                <th className='py-4 px-2'>Mode</th>
                                <th className='py-4 px-2'>Amount</th>
                                
                            </tr>
                        </thead>
                        <tbody className=''>
                            {combinedArray.map((item, index) => (
                                <tr className={`border-2 rounded-md  font-semibold md:text-lg ${item.status == "Dr" ? 'text-red-500' : 'text-green-500'} text-xs border-t-2 py-52 border-white my-3`} key={index}>
                                    <td className='border-t-2 border-white text-center md:px-4 px-2 py-3 w-fit'>{item.status}</td>
                                    <td className='text-center w-fit md:px-1 px-3 py-3'>{item.date}</td>
                                    <td className='text-center w-fit md:px-6 px-1 flex-col'>{item.mode}</td>
                                    <td className='text-center w-fit md:px-8 px-4 py-3 font-bold md:text-lg '>{item.amount}</td>
                                    
                                </tr>
                            ))}
                            <tr className='border-2 rounded-md font-semibold md:text-lg text-xs border-t-2 py-52 border-white '>
                                <td colSpan={3} rowSpan={2} className='border-gray-100  text-blue-50 text-left font-bold  w-fit md:pl-20 pl-10 py-3'>TOTAL : </td>
                                <td className={`text-center py-4 font-bold ${totalBalance> 0 ? 'text-green-500' : 'text-red-500'} `} id='amount'>
                                    {totalBalance.toFixed(2)}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                )}
            
            </div>            
            
    </div>
    
  )
}

export default Balance