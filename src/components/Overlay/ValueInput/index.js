import { useState, useContext } from 'react';
import BingoContext from '../BingoContext';

const ValueInput = () => {
    const bingoContext = useContext(BingoContext);
    const [currentInput, setCurrentInput] = useState();

    const updateValue = e => {
        setCurrentInput(e.target.value);
    }

    return (
        <div className="value-input">

            <input type="text" onChange={updateValue} />
            <button onClick={() => bingoContext.insertNumber(currentInput)}>Insert</button>

        </div>
    );
}

export default ValueInput;