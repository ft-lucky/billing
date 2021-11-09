import { Field, Form, Formik } from 'formik';
import TextField from '@mui/material/TextField';
import { combineValidators, requiredValidator } from '../../validators'
import './style.scss'

const BillingInfo = ({
    data = [],
    initialValues = {},
    buttonName = "",
    onSubmit = () => { }
}) => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
        >
            <Form>
                <div className='billing-info-container'>
                    {
                        data.map(item => {
                            const fieldItem = item?.fields;
                            return (
                                <div key={item.id}>
                                    <p>{item.label}</p>
                                    {fieldItem.map((group, index) => {
                                        const { groupClassname, groupItems } = group;
                                        return (
                                            <div
                                                className={groupClassname}
                                                key={index}
                                            >
                                                {groupItems.map(element => (
                                                    <div
                                                        className={element.className}
                                                        key={element.name}
                                                    >
                                                        {
                                                            element.component ? element.component : (
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
                                                            )
                                                        }
                                                    </div>
                                                ))}
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        })
                    }
                    <button type="submit">{buttonName || `Submit`}</button>
                </div>
            </Form>
        </Formik>
    )
};

export default BillingInfo;