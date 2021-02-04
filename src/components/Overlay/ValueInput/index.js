import { useState, useContext } from 'react';
import BingoContext from '../BingoContext';

const ValueInput = () => {
    const bingoContext = useContext(BingoContext);
    const [currentInput, setCurrentInput] = useState('');

    const updateValue = e => {
        setCurrentInput(e.target.value);
    }

    const onKeyPress = e => {
        if (e.charCode === 13) {
            const sanitizedInput = parseInt(currentInput, 10);

            bingoContext.insertBall(sanitizedInput);
            setCurrentInput('');
        }
    }

    const onClick = e => {
        const sanitizedInput = parseInt(currentInput, 10);

        bingoContext.insertBall(sanitizedInput)
        setCurrentInput('');
    }


    return (
        <div className="value-input">

            <input
                value={currentInput}
                type="number"
                onChange={updateValue}
                onKeyPress={onKeyPress}
            />
            <button onClick={onClick}>
                Insert
            </button>

        </div>
    );
}

export default ValueInput;