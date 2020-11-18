import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../reducer";
import axios from '../../axios';
import { db } from "../../firebase";
import { useStateValue } from '../../StateProvider';

function Step3() {

    const history = useHistory();
    const [{basket,user},dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const [succeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState(true);

    // ! we use "error" to capture the error if there is some 
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);

    // ! this will tell stripe to give the information that client just entered (number) !
    const [clientSecret , setClientSecret] = useState(true);

    useEffect(() => {
        // generate the special stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // Stripe expects the total in a currencies subunits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret);
        }

        getClientSecret();
    }, [basket]);
    // ? here when the component reloads we run this function as well we run when the basket component changes

    console.log('The Secret Key Is >>> ', clientSecret);

     const handleSubmit = async (event) => {
        // do all the fancy stripe stuff...
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {

            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            console.log("thisone" ,paymentIntent )
            // console.log('paymentIntent : ',paymentIntent.id);
            // ! paymentIntent = payment confirmation

            db.collection('users').doc(user?.uid)
                .collection('orders').doc(paymentIntent.id)
              .set({
                  basket: basket,
                  amount: paymentIntent.amount,
                  created: paymentIntent.created
              })

            setSucceeded(true);
            setError(null)
            setProcessing(false)

            dispatch({
                type: 'EMPTY_BASKET'
            })

            history.replace('/')
        })
    }

    const handleChange = (event) =>{
        // ? this function listens for the changes in the CardElement
        // ? and diplay any errors as the customer types ther card detais.

        setDisabled(false);
        setProcessing(false);
        setError(event.error ? event.error.message : "success");
    }

    return (
        <div className="checkout__payment">
                <div className='checkoutDelivery__optionNames' style={{marginBottom:'50px'}}>
                    <span className='delivery__icon'>3</span>
                    <h2>Enter Payment Details </h2>
                </div>
            <div className="payment__details">
                {/* Stripe magic will go here */}
                <form onSubmit={handleSubmit} style={{marginLeft:'50px'}}>
                        <CardElement onChange={handleChange} />

                    <div className="payment__priceCantainer">
                        <CurrencyFormat 
                            renderText={(value) =>(
                                <h3>Order Total : {value}</h3>
                            )}
                            decimalScale={2}
                            value={getBasketTotal(basket)}
                            displayType={"text"}
                            thousandSeperator={true}
                            prefix={"$"}
                        />
                        <button disabled={processing || disabled || succeded} type="submit">
                            <span>{processing ? <p>Processing</p> : "buy Now"}</span>
                        </button>
                    </div>
                    {/* Errors*/}
                    {error && <div>{error}</div>}
                </form>
        </div>
</div>
    )
}

export default Step3
