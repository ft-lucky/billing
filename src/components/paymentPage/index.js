import React, { useCallback } from 'react';
import './style.scss';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Field, Form, Formik } from 'formik';
import { combineValidators, requiredValidator } from '../../validators';

export default function PaymentPage({
  formTitle = 'Get Your Tickets',
  orderData,
  paymentFields,
  onSubmit,
  paymentCardFields,
  paymentInitialValues
}) {
  const handleSubmit = useCallback((paymentData) => {
    onSubmit({ ...paymentData, ...orderData });
  }, [onSubmit, orderData]);

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

          <Formik initialValues={paymentInitialValues} onSubmit={handleSubmit}>
            <Form className="payment_form">
              <Box
                sx={{
                  borderRadius: '8px',
                  width: 600,
                  height: 250,
                  backgroundColor: '#232323',
                }}
              >
                {paymentCardFields.map((fieldItem) => (
                  <Field
                    key={fieldItem.name}
                    name={fieldItem.name}
                    validate={combineValidators(
                      fieldItem.required ? requiredValidator : () => {},
                      fieldItem.onValidate ? fieldItem.onValidate : () => {}
                    )}
                  >
                    {({ field, meta }) => {
                      return (
                        <TextField
                          variant="standard"
                          label={fieldItem.label}
                          type={field.type}
                          placeholder={fieldItem.placeholder}
                          fullWidth
                          error={!!meta.error && meta.touched}
                          helperText={meta.touched && meta.error}
                          {...field}
                        />
                      );
                    }}
                  </Field>
                ))}
              </Box>
              <div className="payment_button">
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#f08057',
                  }}
                  type="submit"
                >{`Pay ${orderData.total}`}</Button>
              </div>
            </Form>
          </Formik>
        </div>
      </Container>
    </div>
  );
}
