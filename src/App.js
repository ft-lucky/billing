import BillingInfo from './components/billingInfo';
import PaymentPage from './components/paymentPage';

function App() {
const paymentCardFields = [
  {
    name: 'cardNumber',
    label: 'Card Number',
    type: 'text',
    required: true,
    onValidate: () => {},
    placeholder: '1234 1234 1234 1234',
  },
  {
    name: 'expDate',
    label: 'Expiration date',
    type: 'text',
    required: true,
    onValidate: () => {},
    placeholder: '12 / 31',
  },
  {
    name: 'cvc',
    label: 'CVC',
    type: 'text',
    required: true,
    onValidate: () => {},
    placeholder: '1234',
  },
];

const paymentFields = [
  {
    label:"Event",
    id:"eventName",
    class:"field-underline"
  },
  {
    label:"Ticket Type",
    id:"ticketType",
    class:""
  },
  {
    label:"Number of Tickets",
    id:"numberOfTickets",
    class:""
  },
  {
    label:"Price (per ticket, incl. fees)",
    id:"price",
    class:"field-underline"
  },
  {
    label:"Total (incl. fees, card processing and taxes)",
    id:"total",
    class:""
  },
]
//Populated order data...
const orderData = {
  eventName:"Carmen - La Llorona",
  ticketType:"Ticket 1",
  numberOfTickets:1,
  price:"89.80 USD",
  total:"89.80 USD"
}

  const billingInfoData = [
    {
      id: 1,
      label: "Get Your Tickets",
      fields: [
        {
          groupClassname: "billing-info-container__twoFields",
          groupItems: [
            {
              className: 'is-half',
              name: 'firstName',
              label: 'First Name',
              type: 'text',
              required: true,
              onValidate: () => { }
            },
            {
              className: 'is-half',
              name: 'lastName',
              label: 'Last Name',
              type: 'text',
              required: true,
              onValidate: () => { }
            },
          ]
        },
        {
          groupClassname: "billing-info-container__singleField",
          groupItems: [
            {
              className: '',
              name: 'email',
              label: 'Email',
              type: 'email',
              required: true,
              onValidate: () => { }
            }
          ]
        },
        {
          groupClassname: "billing-info-container__singleField",
          groupItems: [
            {
              className: '',
              name: 'phone',
              label: 'Phone',
              type: 'text',
              required: true,
              onValidate: () => { },
              component: <span onClick={() => console.log('OUR CUSTOM COMPONENT')}>Custom Component</span>
            }
          ]
        }
      ]
    },
    {
      id: 2,
      label: "Ticket Holders",
      fields: [
        {
          groupClassname: "billing-info-container__singleField",
          groupItems: [
            {
              name: 'holderFirstName',
              label: 'Holder FirstName',
              type: 'text',
              required: true,
              onValidate: () => { }
            }
          ]
        },
      ]
    }
  ];

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    holderFirstName: ''
  };
  const paymentInitialValues = {
    cardNumber: '',
    expDate: '',
    cvc: '',
  };
  
  const handlePaymentData = (val) => {
    console.log(val)
  }
  const handleSubmit = () => {
    console.log('handleSubmit')
  };

  return (
    <div className="App">
      <BillingInfo
        data={billingInfoData} 
        initialValues={initialValues}
        onSubmit={handleSubmit}
      />
      <PaymentPage
      orderData={orderData}
      paymentFields={paymentFields}
      onSubmit={handlePaymentData}
      paymentCardFields={paymentCardFields}
      paymentInitialValues={paymentInitialValues}
      />
    </div>
  );
}

export default App;
