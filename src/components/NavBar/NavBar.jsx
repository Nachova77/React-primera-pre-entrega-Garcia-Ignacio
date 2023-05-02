import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import {NavLink, Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navBar">
            <Link to='/'>
                <h3>Ecommerce</h3>
            </Link>
            <div className='Categories'>
                <NavLink to={`/category/fuente`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Fuentes</NavLink>
                <NavLink to={`/category/cpu`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>CPUs</NavLink>
                <NavLink to={`/category/gpu`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>GPUs</NavLink>
                <NavLink to={`/category/mother`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Mothers</NavLink>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar