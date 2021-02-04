import { useState, createContext, useEffect } from 'react';
import { getRandomColor } from '../../../ultils'

export const BingoContext = createContext();

export const BingoProvider = props => {
    const storageName = "numbers-saved-locally";
    const [balls, setBalls] = useState([]);

    //Load locally
    useEffect(() => {
        const json = localStorage.getItem(storageName);
        const savedNumbers = JSON.parse(json);
        if (savedNumbers) {
            setBalls(savedNumbers);
        }
    }, []);

    //Save locally
    useEffect(() => {
        const json = JSON.stringify(balls);
        localStorage.setItem(storageName, json);
    }, [balls]);

    const insertBall = number => {
        if (isNaN(number)) {
            return;
        }

        if (number < 0 || number > 90) {
            return;
        }

        var alreadyExists = false;
        balls.forEach(ball => {
            if (ball.number === number) {
                alreadyExists = true;
            }
        })

        if (alreadyExists) {
            return;
        }

        const newBall = {
            number: number,
            backgroundColor: getRandomColor('9ABCDEF'),
            numberColor: getRandomColor('012345678')
        }

        setBalls(prev => [newBall, ...prev]);
    }

    const removeBall = number => {
        setBalls(prev => prev.filter(ball => ball.number !== number));
    }

    const state = {
        balls: balls,
        insertBall: insertBall,
        removeBall: removeBall
    };

    return <BingoContext.Provider value={state}>{props.children}</BingoContext.Provider>;
};

export default BingoContext;
