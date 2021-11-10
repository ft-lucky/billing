import React from 'react';
import Container from '@mui/material/Container';
import StripePayment from '../stripePayment';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import './style.scss';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

export default function PaymentPage({
  formTitle = 'Get Your Tickets',
  orderData,
  paymentFields,
  handlePayment,
  errorText = ''
}) {

  return (
    <div className="payment_page">
      <Container maxWidth="md">
        <h1>{formTitle}</h1>
        <div className="order_info_text">Order Review</div>
        <div className="order_info_section">
          {paymentFields.map((field) => {
            const id = field.id;
            return (
              <div key={id} className="order_info_block">
                <div className="order_info_title">{field.label}</div>
                <div className={`${field.class} order_info_text`}>
                  {orderData[id]}
                </div>
              </div>
            );
          })}
        </div>
        <div className="payment_info">
          <div className="payment_info_label">
            Please provide your payment information
          </div>
          <p className="payment_info__error">{errorText}</p>
          <div>
            <Elements stripe={stripePromise}>
              <StripePayment
                total={orderData.total}
                onSubmit={handlePayment}
              />
            </Elements>
          </div>
        </div>
      </Container>
    </div>
  );
}
