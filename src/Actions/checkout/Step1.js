import React from 'react'
import CheckoutProduct from '../../Components/Products/CheckoutProduct';
import { useStateValue } from '../../StateProvider'

function Step1() {

    const [{basket}] = useStateValue();

    return (
        <div className='checkout__delivery'>
            <div className='checkoutDelivery__optionNames'>
                <span className='delivery__icon'>1</span>
                <h2>Delivery and pickup options</h2>
            </div>
            <div className='deliveryOptions'>
                <button>
                    Delivery
                </button>
                        
                <button className='pickup__button'>
                    Pickup <span style={{fontSize:'0.7rem'}}>Not available</span>
                </button>
            </div>

            {basket.map(product=>(
                <CheckoutProduct product={product} />
            ))}
            
            <div className='checkoutDelivery__button'>
            <button>Continue</button>
            </div>
        </div>
    )
}

export default Step1
