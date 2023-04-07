import cart from './assets/cart.png'

const CartWidget = ()=> {
    return (
        <div className='cartBox'>
            <img className='cartImg' src={cart} alt="cart-widget"/>
            0
        </div>
    )
}

export default CartWidget