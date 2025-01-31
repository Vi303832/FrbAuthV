import React, { useEffect, useState } from 'react';
import { db } from "../Firebase";
import { collection, onSnapshot, query } from "firebase/firestore";
import useGetuserİnfo from './useGetuserİnfo';

export const useGetTransactions = () => {
    const [transactions, setTransactions] = useState([]); // Initialize with an empty array
    const { userID } = useGetuserİnfo(); // Get user info (assuming you need it)

    const transCollectionRef = collection(db, "transactions");

    useEffect(() => {
        // Define unsubscribe inside useEffect
        const unsubscribe = onSnapshot(transCollectionRef, (snapshot) => {
            const docs = [];
            snapshot.forEach((doc) => {
                const data = doc.data();
                const id = doc.id;
                docs.push({ ...data, id });
            });

            setTransactions(docs); // Update state with the new docs
        });

        // Cleanup the subscription on unmount or dependency change
        return () => unsubscribe();
    }, []); // Empty dependency array means it runs once when component mounts

    return { transactions }; // Return the transactions
};

export default useGetTransactions;
