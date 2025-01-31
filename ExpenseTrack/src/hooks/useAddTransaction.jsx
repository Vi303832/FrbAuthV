import React from 'react'
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from '../Firebase'
import { useGetuserİnfo } from "./useGetuserİnfo"




export const UseAddTransaction = () => {

    const transcollectionref = collection(db, "transactions")
    const { userID } = useGetuserİnfo();

    const addTransaction = async ({ description, transactionAmount, transactionType }) => {
        if (!userID || !description || !transactionAmount || !transactionType) {
            console.error("Eksik parametreler. Lütfen tüm alanları doldurun.");
            return;
        }
        try {
            await addDoc(transcollectionref, {
                userID,
                description,
                transactionAmount,
                transactionType,
                createdAt: serverTimestamp(),
            });
        } catch (error) {
            console.error("Belge eklenirken bir hata oluştu:", error);
        }
    };




    return (
        { addTransaction }
    )
}

export default UseAddTransaction