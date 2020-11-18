import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../../reducer';
import { useStateValue } from '../../StateProvider';
import './CheckoutFunctionality.css';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const promise = loadStripe(
    "pk_test_51Hny8REHKODMqeDaWFLUfCjFToI8HfVYRMpqZ2eTHsvrxzfZFpr0RPBG0ytV2of0txdH5Y6BBHVmMh3Xc3kJOjIU00Jp0ZqRFs"
  );

function CheckoutFunctionality() {

    const [{basket}] = useStateValue();
    const [deliveryCharges] = useState(50);

    return (
        <div className='checkout'>
            <div className='checkout__userDetails'>
                <Step1 />
                
                <Step2 />
                
                <Elements stripe={promise}>
                    <Step3 />
                </Elements>

            </div>

            <div className="checkout__subtotal">
                <CurrencyFormat 
                    renderText={value=>(
                        <>
                                <div className='checkout__priceDetails'>
                                    <div className='checkout__priceDetailsRow'>
                                        <span>Subtotal ( {basket.length} items )</span>
                                        <span style={{}}>{value}</span>
                                    </div>
                                    <div className='checkout__priceDetailsRow'>
                                        <span>Delivery</span>
                                        <span style={{marginLeft:'60px'}}>{deliveryCharges ? deliveryCharges : 'Free'}</span>
                                    </div>
                                    <div className='checkout__priceDetailsRow'>
                                        <span>Sales Tax</span>
                                        <span style={{marginLeft:'60px'}}>Calculated in Checkout</span>
                                    </div>
                                </div>

                                <div className='checkout__total'>
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
                    {/* <Link to='/checkout'>
                        <span className='checkout__button'>See Item Details...</span>
                    </Link> */}
        </div>

            </div>
    )
}

export default CheckoutFunctionality
