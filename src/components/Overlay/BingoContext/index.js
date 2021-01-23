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
        var alreadyExists = false;
        numbers.forEach(element => {
            if (element === number) {
                alreadyExists = true;
            }
        })

        if (alreadyExists) {
            return;
        }

        setNumbers(prev => [number, ...prev]);
    }

    const removeNumber = number => {
        setNumbers(prev => prev.filter(el => el !== number));
    }

    const state = {
        numbers: numbers,
        insertNumber: insertNumber,
        removeNumber: removeNumber
    };

    return <BingoContext.Provider value={state}>{props.children}</BingoContext.Provider>;
};

export default BingoContext;
