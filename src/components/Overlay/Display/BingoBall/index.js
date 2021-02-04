import React from 'react';

const BingoBall = ({ ball, isFirst, handleOnClick }) => {
    const style = {
        backgroundColor: ball.backgroundColor,
        color: ball.numberColor
    }

    console.log(style)

    var containerClass = 'ball-container';

    if (isFirst) {
        containerClass += ' first';
    };

    return (
        <div className={containerClass}>
            <div style={style} className={'back'}></div>
            <div
                key={ball.number}
                style={style}
                className={'bingo-ball'}
                onClick={handleOnClick}
            >
                <div className={'text'}>
                    {ball.number}
                </div>
            </div>

        </div>
    );
}

export default BingoBall;