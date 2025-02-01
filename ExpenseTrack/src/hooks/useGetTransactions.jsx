import React, { useEffect, useState } from 'react';
import { db } from "../Firebase";
import { collection, onSnapshot, query, where, orderBy } from "firebase/firestore";
import useGetuserİnfo from './useGetuserİnfo';

export const useGetTransactions = () => {
    const [transactions, setTransactions] = useState([]);
    const [transactionTotals, settransactionTotals] = useState([]);  // Initialize with an empty array
    const { userID } = useGetuserİnfo(); // Get user info (assuming you need it)

    const transCollectionRef = collection(db, "transactions");

    useEffect(() => {

        const queryTransactions = query(
            transCollectionRef,
            where("userID", "==", userID),
            orderBy("createdAt")
        );


        // Define unsubscribe inside useEffect
        const unsubscribe = onSnapshot(queryTransactions, (snapshot) => {
            let docs = [];
            let totalIncome = 0;
            let totalExpenses = 0;



            snapshot.forEach((doc) => {
                const data = doc.data();
                const id = doc.id;
                docs.push({ ...data, id });

                if (data.transactionType === "expense") {
                    totalExpenses += Number(data.transactionAmount);
                } else {
                    totalIncome += Number(data.transactionAmount);
                }
            });






            setTransactions(docs); // Update state with the new docs


            let balance = totalIncome - totalExpenses;
            settransactionTotals({
                balance,
                expenses: totalExpenses,
                income: totalIncome,
            });


        });

        // Cleanup the subscription on unmount or dependency change
        return () => unsubscribe();
    }, []); // Empty dependency array means it runs once when component mounts

    return { transactions, transactionTotals }; // Return the transactions
};

export default useGetTransactions;
