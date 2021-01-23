import { useContext } from 'react';
import BingoContext from '../BingoContext';

const Display = () => {
    const bingoContext = useContext(BingoContext);

    return (
        <div className='display'>
            {bingoContext.numbers.map((number, i) => {
                var classNames = 'bingo-ball';
                if (i === 0) {
                    classNames += ' first';
                };

                return (
                    <div key={i} className={classNames} onClick={
                        () => bingoContext.removeNumber(number)
                    }>
                        {number}
                    </div>
                );
            })}
        </div>
    );
}

export default Display; 