import React from 'react'
import CartProduct from '../Components/Products/CartProduct';
import { useStateValue } from '../StateProvider';
import Subtotal from '../Subtotal';
import './CartFunctionality.css';

function CartFunctionality() {
    const [{basket}] = useStateValue();
    return (
        <>
            <h2 style={{margin:' 20px 30px',fontSize:'1.6rem',fontWeight:'600'}}>Your Cart</h2>
            <div className='cart center'>
                <div className='cart__left'>
                    {basket.map(product=>(
                            <CartProduct key={product._id} product={product} />
                    ))}
                 </div>
                <div className='cart__right'>
                    <Subtotal />
                </div>
            </div>
        </>
    )
}

export default CartFunctionality
