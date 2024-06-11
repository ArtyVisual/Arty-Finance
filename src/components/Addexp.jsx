import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Expense = () => {
  const [ExpenseArray, setExpenseArray] = useState([]);
  const [form, setForm] = useState({ desc: "", date: "", mode: "", amount: "" , status:"" });

  // Load existing expenses from localStorage when the component mounts
  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
    setExpenseArray(storedExpenses);
  }, []);

  const saveExpense = () => {
    if (form.amount > 0 && !isNaN(form.amount) && form.desc.length > 3 && form.mode.length > 3 && form.date)  {

    const newExpense = { ...form, id: uuidv4() };
    const updatedExpenses = [...ExpenseArray, newExpense];

    setExpenseArray(updatedExpenses);
    localStorage.setItem("expenses", JSON.stringify(updatedExpenses));

    setForm({ desc: "", date: "", mode: "", amount: "" });
    toast('✅ Saved Successfully', {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",

      });
    } 
    
    else{
      toast('❌ Not Saved !', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
  
        });
        
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
    <ToastContainer
      position="top-right"
      autoClose={4000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />

    <div>
      <h1 className='text-center md:text-5xl text-2xl font-bold text-zinc-300 my-12'>Enter Your Expense Details Here </h1>
      
      <div className="grid my-12 w-full justify-center py-2 gap-4 mb-4">
          <input
            value={form.amount}
            onChange={handleChange}
            name="amount"
            type="number"
            className="text rounded-lg border-2 md:w-60 px-auto m-4 text-center py-2 font-semibold text-slate-900 border-white p-2 bg-red-200"
            placeholder="Enter Amount"
          />
        <input
            value={form.desc}
            onChange={handleChange}
            name="desc"
            type="text"
            className="text rounded-lg border-2 md:w-60 px-auto m-4 text-center py-2 font-semibold text-slate-900 border-white p-2 bg-red-200"
            placeholder="Enter Description"
        />
        <input
          value={form.date}
          onChange={handleChange}
          name="date"
          type="date"
          className="last:text rounded-lg border-2 md:w-60 px-auto m-4 text-center py-2 font-semibold  text-slate-900 border-white p-2 bg-red-200"
          placeholder="Enter Date"
        />
        <select
          value={form.mode}
          onChange={handleChange}
          name="mode"
          className="text rounded-lg border-2 md:w-60 px-auto m-4 text-center py-2 font-semibold text-slate-900 border-white p-2 bg-red-200"
          placeholder="Select Mode"
        >
          <option value="" disabled>Select Mode</option>
          <option value="Gpay">Gpay</option>
          <option value="Paytm">Paytm</option>
          <option value="Netbanking">NetBanking</option>
          <option value="Cash">Cash</option>
        </select>
        <input
          hidden
          value={form.status="Dr"}
          onChange={handleChange}
          name="status"
          readOnly
          type="text"
          className="last:text rounded-lg border-2 md:w-60 px-auto m-4 text-center py-2 font-semibold  text-slate-900 border-white p-2 bg-red-200"
          
        />
      </div>
      <div>
        <button
          onClick={saveExpense}
          className="flex text-center mx-auto justify-center items-center bg-slate-900 hover:bg-yellow-100 border-2 border-white p-2 px-4 w-fit rounded-full"
          >
        Add Expense
        </button>
      </div>
    </div>
          </>
  );
};

export default Expense;
