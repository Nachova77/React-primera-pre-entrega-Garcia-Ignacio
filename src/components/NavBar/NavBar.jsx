import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <nav className="navBar">
            <h1>Tech Shop</h1>
            <div className="navList">
                <a href="">Procesadores</a>
                <a href="">Placas de video</a>
                <a href="">Motherboards</a>
                <a href="">Fuentes</a>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar