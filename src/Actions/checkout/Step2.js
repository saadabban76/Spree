import React from 'react';
import { Grid, Paper } from '@material-ui/core/';
import DeliveryForm from './DeliveryForm';

function Step2() {
    return (
            <div className='checkout__address'> 
                
                <div className='checkoutDelivery__optionNames'>
                    <span className='delivery__icon'>2</span>
                    <h2>Delivery address and details</h2>
                </div>

                <DeliveryForm />

                <div className='checkoutDelivery__button'>
                    <button>Save Address</button>
                </div>              
        </div>
    )
}

export default Step2
