import React, { useContext } from 'react';
import BingoContext from '../BingoContext';
import BingoBall from './BingoBall'

const Display = () => {
    const bingoContext = useContext(BingoContext);


    return (
        <div className='display'>
            {bingoContext.balls.map((ball, i) => {
                const isFirst = i === 0;

                return (
                    <BingoBall
                        handleOnClick={() => bingoContext.removeBall(ball.number)}
                        ball={ball}
                        isFirst={isFirst} />
                );
            })}
        </div>
    );
}

export default Display; 