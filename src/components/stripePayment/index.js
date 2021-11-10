import React from 'react';
import {
    useStripe,
    useElements,
    CardNumberElement,
    CardExpiryElement,
    CardCvcElement
} from '@stripe/react-stripe-js';
import './style.scss';

const options = {
    style: {
        base: {
            fontSize: '18px',
            color: '#ffffff',
            letterSpacing: '1px',

            '::placeholder': {
                color: 'rgba(201, 201, 201, 0.5)'
            }
        },
        invalid: {
            color: '#E53935'
        }
    }
}

const CheckoutForm = ({ total, onSubmit = () => { } }) => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return
        }

        const card = elements.getElement(CardNumberElement)
        onSubmit(stripe.createPaymentMethod({ type: 'card', card }))
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="card_form_inner">
                <label className="card_number_element">
                    <span className="card_label_text">Card number</span>
                    <CardNumberElement
                        options={options}
                        onReady={() => { }}
                        onChange={() => { }}
                        onBlur={() => { }}
                        onFocus={() => { }}
                    />
                </label>
                <label className="expiration_element">
                    <span className="card_label_text">Expiration date</span>
                    <CardExpiryElement options={options} />
                </label>
                <label className="cvc_element">
                    <span className="card_label_text">CVC</span>
                    <CardCvcElement options={options} />
                </label>
            </div>
            <div className="payment_button">
                <button disabled={!stripe} type="submit">
                    Pay {total}
                </button>
            </div>
        </form>
    );
};

export default CheckoutForm;