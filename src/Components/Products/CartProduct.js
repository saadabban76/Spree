import React from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import './CartProduct.css';

function CartProduct({product}) {
    console.log(product.id);

    const [{}, dispatch] = useStateValue();

    const removeProduct = () =>{
        dispatch(
            {
                type:'REMOVE_FROM_BASKET',
                id:product.id
            }
        )
    }

    return (
        <div className='cartProduct'>
                    <img className='cartProduct__image' alt='product image' src={product.image} />
                    <div className='cartProductRow'>
                    <Link to={`/productdetails/${product.id}`}>
                            <span className='cartProduct__name'>{product.name}</span>
                        </Link>
                        <span>
                            <input type='checkbox' style={{borderRadius:'100%',marginRight:'6px'}} />
                            Shipping to 
                            <span style={{color:'#001e73'}}> your address</span>
                        </span>
                    </div>
                    <div className='quantityBox'>
                        <div>
                            <span className='cartProduct__price'>${product.price}</span>
                        </div>
                        <div className='dropdownBox'>
                            <select className='dropdown'>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                                <option value='6'>6+</option>
                            </select>
                        </div>
                        <div className='removeSave__button'>
                        <Link onClick={removeProduct}>
                            <span>Remove</span>
                        </Link>
                        <Link>
                            <span>Save</span>
                        </Link>
                        </div>
                    {/* <div> */}
                    </div>
                </div>
    )
}

export default CartProduct
