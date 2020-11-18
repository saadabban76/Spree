import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';
import { useHistory } from 'react-router-dom';

function Subtotal() {

    const history = useHistory();
    const [{basket}] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText={(value)=>(
                    <>
                    <h2>Order Summary</h2>
                    <div className='order__priceDetails'>
                        <div className='order__priceDetailsRow'>
                            <span>Item Total({basket.length})</span>
                            <span style={{}}>{value}</span>
                        </div>
                        <div className='order__priceDetailsRow'>
                            <span>Sales Tax</span>
                            <span style={{marginLeft:'60px'}}>Calculated in Checkout</span>
                        </div>
                    </div>

                    <div className='order__total'>
                        <h4>Total</h4>
                        <h4>{value}</h4>
                    </div>
                    </>
                )}

                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeperator={true}
                prefix={"$"}
            />

            <button className='subtotal__button' onClick={e=>history.push('/checkout')}>Checkout</button>
        
        </div>
    )
}

export default Subtotal
