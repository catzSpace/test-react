import './header.css'
import components from './modules/headerComponents';


export default function Enc() {
    return(
        <>
        <div className='cont'>
            <img
                className="menu"
                src={components.menu}
            />
            <button className='theme'>
                Dark
            </button>
        </div>
        </>
        
    );
}