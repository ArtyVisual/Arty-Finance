import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Income = () => {
    const [IncomeArray, setIncomeArray] = useState([]);
    const [form, setForm] = useState({ desc: "", date: "", mode: "", amount: "", status:""});

  // Load existing expenses from localStorage when the component mounts
  

  useEffect(() => {
    let income = localStorage.getItem("incomes");
    if (income) {
        setIncomeArray(JSON.parse(income))
    }

    }, [])

  const deleteIncome = (id) => {
    let c = confirm('Do you really want to delete ?')
    if (c) {
  
      console.log("deleting income" + id)
      setIncomeArray(IncomeArray.filter(item => item.id !== id))
      localStorage.setItem("incomes", JSON.stringify(IncomeArray.filter(item => item.id !== id)))
      toast('❗ Deleted Successfully', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
  
        });
    }};


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
      
      
      <div className='passwords my-28'>
                        {IncomeArray.length === 0 && <div className='my-24 text-center font-semibold font-cursive'>No Finance Recorded</div>}
                        {IncomeArray.length != 0 && <table className="table-auto  mx-auto md:w-3/4 overflow-hidden rounded-md pt-24 mb-16 ">
                            <thead className=' text-white w-fit px-4 my-5 md:text-xl text-xs'>
                                <tr>
                                    <th className='py-3 px-2'>Date</th>
                                    <th className='py-4 px-2 '>Description</th>
                                    <th className='py-4 px-2'>Mode</th>
                                    <th className='py-4 px-2'>Amount</th>
                                    <th className='py-4 px-2'>Delete</th>
                                  
                                </tr>
                            </thead>
                            <tbody className='gap-3'>
                                {IncomeArray.map((item, index) => {

                                    return <tr className='border-2 rounded-md text-green-200 font-semibold md:text-lg text-xs border-t-2 py-52 border-white my-3' key={index} >
                                     
                                        <td className=' text-center w-fit md:px-1 px-3 py-3  '>{item.date}
                                            
                                        </td>
                                        <td className='border-t-2 border-white text-center md:px-4 px-2 py-3  w-fit'>{item.desc}
                            
                                        </td>
                                        <td className='  text-center w-fit md:px-6 px-1 flex-col  '>{item.mode}
                                            
                                        </td>
                                        <td className='  text-center w-fit md:px-8 px-4  py-3 font-bold md:text-lg text-green-600 '>{item.amount}
                                            
                                        </td>
                                        <td className=' pt-1 text-center w-fit md:px-8 px-1 font-semibold  text-red-500 '> 
                                          <button onClick={() => { deleteIncome(item.id) }}>
                                          <script src="https://cdn.lordicon.com/lordicon.js"></script>
                                          <lord-icon
                                              style={{ "width": "25px", "height": "25px", "paddingBottom": "0px" }}
                                              src="https://cdn.lordicon.com/drxwpfop.json"
                                              trigger="hover"
                                              stroke="bold"
                                              colors="primary:#9cf4a7,secondary:#d1fad7">
                                          </lord-icon> 
                                          </button>
                                        </td>
                                    </tr>
                                  
                                })}

                            </tbody>
                        </table>}
                        <Link to="/addincome">
                          <div className=" btn md:w-1/6 w-1/3 flex mx-auto justify-center items-center  text-center bg-green-600 m-1 shadow-yellow-200 hover:shadow-none shadow-inner text-white text-md font-semibold rounded-md py-2">
                          Add Income 
                          </div>
                        </Link>
                    </div>
    </div>
  </>
  );
};

export default Income;
