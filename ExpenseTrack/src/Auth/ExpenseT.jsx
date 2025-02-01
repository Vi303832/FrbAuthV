import React, { useState } from 'react'
import { UseAddTransaction } from "../hooks/useAddTransaction"
import { useGetTransactions } from '../hooks/useGetTransactions';
import { useGetuserİnfo } from "../hooks/useGetuserİnfo"
import { signOut } from 'firebase/auth';
import { useNavigate } from "react-router-dom"
import { auth } from '../Firebase';


export const Exp = () => {

    const navigate = useNavigate();
    const { addTransaction } = UseAddTransaction();
    const { transactions, transactionTotals } = useGetTransactions();

    const [description, setdes] = useState("");
    const [transactionAmount, settra] = useState(0);
    const [transactionType, settype] = useState("expense");

    const { userID, profilePhoto, isAuth, Name } = useGetuserİnfo();

    const { balance, income, expenses } = transactionTotals;



    const onSumbit = (e) => {
        e.preventDefault()
        addTransaction({
            description,
            transactionAmount,
            transactionType,


        })


    }

    const signuserout = async () => {

        try {
            await signOut(auth)
            localStorage.clear();
            navigate("/")
        } catch (error) {
            console.error(error)
        }

    }


    return (
        <>
            <div>
                <div>
                    <h1> Expense Tracker</h1>
                    <div>
                        <h3>Your Balance</h3>
                        {balance >= 0 ? <h2> ${balance}</h2> : <h2> -${balance * -1}</h2>}
                    </div>
                    <div>
                        <h4>İncome</h4>
                        <p>${income}0.00</p>
                    </div>
                    <div>
                        <h4>Expenses</h4>
                        <p>${expenses}</p>
                    </div>
                </div>
                <form onSubmit={onSumbit}>
                    <input value={description} onChange={(e) => setdes(e.target.value)} type="text" placeholder='Description'></input>
                    <input value={transactionAmount} onChange={(e) => settra(e.target.value)} type="number" placeholder='Amount'></input>
                    <br></br>
                    <br></br>
                    <span>
                        <input checked={transactionType === "expense"} value={transactionType} onChange={(e) => settype(e.target.value)} type="radio" ></input>
                        <label>Expense</label>

                    </span>
                    <br></br>
                    <br></br>
                    <span>
                        <input checked={transactionType === "income"} value={transactionType} onChange={(e) => settype(e.target.value)} type='radio'></input>
                        <label>Income</label>



                    </span>
                    <br></br>
                    <br></br>
                    <button type='sumbit' className='border-2 p-1 rounded cursor-pointer ' >Add Transaction</button>



                </form>
                <div>
                    {profilePhoto && (<>

                        <div><img src={profilePhoto} /></div>

                        <button onClick={signuserout} className='border-2 p-1 rounded cursor-pointer ' >Sign Out</button>
                    </>
                    )}

                </div>

            </div>
            <div>
                <div>Transactions</div>
                <br></br>
                <ul>

                    {transactions.map((t, index) => {
                        const { description, transactionAmount, transactionType } = t;
                        return (
                            <li key={index}> {/* Use a unique key here */}
                                <h4>{description}</h4>

                                <p>${transactionAmount} <label>{transactionType}</label></p>
                                <br></br>
                                <br></br>
                            </li>
                        );
                    })}



                </ul>



            </div>

        </>

    )
}

export default Exp