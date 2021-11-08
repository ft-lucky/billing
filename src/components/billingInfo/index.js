import { Field, Form, Formik } from 'formik';
import TextField from '@mui/material/TextField';
import clsx from 'clsx';
import { combineValidators, requiredValidator } from '../../validators'
import './style.scss'

const BillingInfo = ({ data = [], initialValues }) => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={async (values, actions) => {
                console.log("Hanldle submit")
            }}
        >
            <Form>
                <div className='billing-info-container'>
                    {
                        data.map(item => {
                            const fieldItem = item?.fields;
                            return (
                                <div key={item.id}>
                                    <p>{item.label}</p>
                                    {fieldItem.map((elementsGroup, index) => {
                                        return (
                                            <div
                                                className={clsx(
                                                    elementsGroup.length === 2 && 'billing-info-container__twoFields',
                                                    elementsGroup.length === 1 && 'billing-info-container__singleField',
                                                )}
                                                key={index}
                                            >
                                                {elementsGroup.map(element => (
                                                    <div
                                                        className={clsx(elementsGroup.length === 2 && 'is-half')}
                                                        key={element.name}
                                                    >
                                                        <Field
                                                            name={element.name}
                                                            validate={combineValidators(
                                                                element.required ? requiredValidator : () => { },
                                                                element.onValidate ? element.onValidate : () => { }
                                                            )}
                                                        >
                                                            {({ field, meta }) => {
                                                                return (
                                                                    <TextField
                                                                        label={element.label}
                                                                        type={element.type}
                                                                        fullWidth
                                                                        error={!!meta.error && meta.touched}
                                                                        helperText={meta.touched && meta.error}
                                                                        {...field}
                                                                    />
                                                                )
                                                            }}
                                                        </Field>
                                                    </div>
                                                ))}
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        })
                    }
                    <button type="submit">Submit</button>
                </div>
            </Form>
        </Formik>
    )
};

export default BillingInfo;