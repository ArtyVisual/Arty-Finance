import React from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Dash = () => {

    const [ExpenseArray, setExpenseArray] = useState([])
    const [IncomeArray, setIncomeArray] = useState([]);
    const [totalExpense, setTotalExpense] = useState(0);
    const [totalIncome, setTotalIncome] = useState(0);
    const [totalBalance, setTotalBalance] = useState(0);
    
    useEffect(() => {
        let expense = localStorage.getItem("expenses");
        if (expense) {
            setExpenseArray(JSON.parse(expense))
        }

    }, []
    );

    useEffect(() => {
        let income = localStorage.getItem("incomes");
        if (income) {
            setIncomeArray(JSON.parse(income))
        }

    }, []
    );

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

    


  return (
    <div className='my-20'>
        <br /><br />
           <div className='text-center'>
            <span className='text-3xl font-bold font-serif text-gray-100 px-12 pb-5'>-DASHBOARD-</span>
        </div>
        <div className='flex flex-wrap justify-evenly items-center  my-10 pb-20' >
            <div className='mx-8 my-8 border-2 border-white'>
                <span className= 'px-20 py-1 text-xl text-blue-950 font-semibold bg-yellow-100'>Expenses</span>
                <div>
                    <br /><br />
                    <span className='px-8 py-4 border-r-4 border-white text-white font-semibold '>Total</span>
                    <span className='px-8 py-4 font-bold text-red-400 text-lg'  id='amount'>{totalExpense.toFixed(2)}</span>
                    <br /><br/> <br/>
                    <Link to="/addexpense">
                    <div className="hover:py-1.5 text-center bg-red-400 m-1 shadow-yellow-200 hover:shadow-none shadow-inner text-white text-md font-semibold rounded-md py-2">
                    Add Expense
                    </div>
                    </Link>
                </div>    
            </div>
            <div className='mx-8 my-4 border-2 border-white'>
                <span className= 'px-20 py-1 text-xl text-blue-950 font-semibold bg-yellow-100'>Incomes</span>
                <div>
                    <br /><br />
                    <span className='px-8 py-4 border-r-4 border-white text-white font-semibold '>Total</span>
                    <span className='px-8 py-4 font-bold text-green-600' id='amount'>{totalIncome.toFixed(2)}</span>
                    <br /><br/> <br/>
                    <Link to="/addincome">
                    <div className=" hover:py-1.5 text-center bg-green-600 m-1 shadow-yellow-200 hover:shadow-none shadow-inner text-white text-md font-semibold rounded-md py-2">
                    Add Income
                    </div>
                    </Link>
                </div>    
            </div>
            <div className='mx-8 my-4 border-2 border-white'>
                <span className= 'px-20 py-1 text-xl text-blue-950 font-semibold bg-yellow-100'>Balance</span>
                <div>
                    <br /><br />
                    <span className='px-8 py-4 border-r-4 border-white text-white font-semibold '>Total</span>
                    <span className={`px-8 py-4 font-bold ${totalBalance> 0 ? 'text-green-500' : 'text-red-500'} `} id='amount'>{totalBalance.toFixed(2)}</span>
                    <br /><br/> <br/>
                    <Link to="/balance">
                    <div className=" hover:py-1.5 text-center bg-blue-500 m-1 shadow-yellow-200 hover:shadow-none shadow-inner text-white text-md font-semibold rounded-md py-2">
                    Details
                    </div>
                    </Link>
                </div>    
            </div>
            
        </div>
    </div>
  )
}

export default Dash