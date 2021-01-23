import Display from './Display';
import ValueInput from './ValueInput';
import { BingoProvider } from './BingoContext'

const Overlay = () => {

    return (
        <div className='overlay'>
            <BingoProvider>
                <ValueInput />
                <Display />
            </BingoProvider>
        </div>
    );
}

export default Overlay;
