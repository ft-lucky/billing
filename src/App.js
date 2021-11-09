import BillingInfo from './components/billingInfo';

function App() {
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
    </div>
  );
}

export default App;
