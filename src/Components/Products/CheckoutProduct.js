import React from 'react'

function CheckoutProduct({product}) {
    return (
        <div className='deliveryProduct'>
        <img src={product.image} alt='image' />
        <h4>Arrives by </h4>
        <div>
            Thu , Nov 10         Free
        </div>
    </div>
    )
}

export default CheckoutProduct
