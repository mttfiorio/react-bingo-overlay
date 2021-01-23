import { useState, createContext, useEffect } from 'react';

export const BingoContext = createContext();

export const BingoProvider = props => {
    const storageName = "numbers-saved-locally";
    const [numbers, setNumbers] = useState([]);

    //Load locally
    useEffect(() => {
        const json = localStorage.getItem(storageName);
        const savedNumbers = JSON.parse(json);
        if (savedNumbers) {
            setNumbers(savedNumbers);
        }
    }, []);

    //Save locally
    useEffect(() => {
        const json = JSON.stringify(numbers);
        localStorage.setItem(storageName, json);
    }, [numbers]);

    const insertNumber = number => {
        setNumbers(prev => [...prev, number]);
    }

    const state = {
        numbers: numbers,
        insertNumber: insertNumber
    };

    return <BingoContext.Provider value={state}>{props.children}</BingoContext.Provider>;
};

export default BingoContext;
