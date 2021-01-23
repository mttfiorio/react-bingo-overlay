import { useContext } from 'react';
import BingoContext from '../BingoContext';

const Display = () => {
    const bingoContext = useContext(BingoContext);

    return (<div className='display'>
        {bingoContext.numbers.map((number, i) => <div key={i}>{number}</div>)}
    </div>);
}

export default Display;