import { Link } from 'react-router-dom';
import './header.css'
function Header() {
    
    return (
        <div className='header'>
            <div className='header-main'>
            <h1>To-do List</h1>
            <div>Keep your tasks at hand :)</div>
            </div>
        </div>
    )
}

export default Header;