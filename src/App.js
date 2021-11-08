import BillingInfo from './components/billingInfo';

function App() {
  const billingInfoData = [
    {
      id: 1,
      label: "Get Your Tickets",
      fields: [
        [
          {
            name: 'firstName',
            label: 'First Name',
            type: 'text',
            required: true,
            onValidate: () => { }
          },
          {
            name: 'lastName',
            label: 'Last Name',
            type: 'text',
            required: true,
            onValidate: () => { }
          },
        ],
        [
          {
            name: 'email',
            label: 'Email',
            type: 'email',
            required: true,
            onValidate: () => { }
          }
        ],
        [
          {
            name: 'phone',
            label: 'Phone',
            type: 'text',
            required: true,
            onValidate: () => { }
          }
        ]
      ]
    },
    {
      id: 2,
      label: "Ticket Holders",
      fields: [
        [
          {
            name: 'holderFirstName',
            label: 'First Name',
            type: 'text',
            required: true
          }
        ]
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

  return (
    <div className="App">
      <BillingInfo data={billingInfoData} initialValues={initialValues} />
    </div>
  );
}

export default App;
