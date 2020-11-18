import React from 'react'

function DeliveryForm() {
    return (
        <div className='checkout__deliveryForm'>
            <div className='checkout__addressCol1'>
                    <div>
                    <div>First Name *</div>
                    <input placeholder='First name' />
                    </div>
                    <div>
                    <div>Last Name *</div>
                    <input placeholder='Last Name' />
                    </div>
                    <div>
                    <div>Phone number*(Ex: 9836326451</div>
                    <input placeholder='Phone Number'/>
                    </div>
                    <div>
                    <div>Street address*</div>
                    <input placeholder='Street address *' />
                    </div>
                </div>

                <div className='checkout__addressCol2'>
                    <div>
                    <div>Apt, suite, etc (optional)</div>
                    <input />
                    </div>
                    <div>
                    <div>City</div>
                    <input />
                    </div>
                    <div>
                    <div>State</div>
                    <input />
                    </div>
                    <div>
                    <div>ZIP Code*</div>
                    <input />
                    </div>
                </div>
        </div>
    )
}

export default DeliveryForm
