import React, { useState } from 'react'
import { UseAddTransaction } from "../hooks/useAddTransaction"

export const Exp = () => {


    const { addTransaction } = UseAddTransaction();


    const [description, setdes] = useState("");
    const [transactionAmount, settra] = useState(0);
    const [transactionType, settype] = useState("expense");




    const onSumbit = (e) => {
        e.preventDefault()
        addTransaction({
            description,
            transactionAmount,
            transactionType,


        })


    }




    return (
        <>
            <div>
                <div>
                    <h1> Expense Tracker</h1>
                    <div>
                        <h3>Your Balance</h3>
                        <h3>$0.00</h3>
                    </div>
                    <div>
                        <h4>İncome</h4>
                        <p>$0.00</p>
                    </div>
                    <div>
                        <h4>Expenses</h4>
                        <p>$0.00</p>
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
                    <button type='sumbit' >Add Transaction</button>



                </form>
            </div>
            <div>
                <div>Transactions</div>




            </div>

        </>

    )
}

export default Exp