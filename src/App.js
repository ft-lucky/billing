import BillingInfo from "./components/billingInfo";
import PaymentPage from "./components/paymentPage";
import ConfirmationPage from "./components/confirmationPage";
import GetTickets from './components/getTickets';

function App() {
  const referralPromotions = [
    { label: "Your ticket is currently", price: "US$89.80", id: 1 },
    {
      label: "If your friends buy 2 tickets",
      subLabel: "Your ticket becomes",
      price: "US$80.82",
      id: 2,
    },
    {
      label: "If your friends buy 5 tickets",
      subLabel: "Your ticket becomes",
      price: "US$62.86",
      id: 3,
    },
    {
      label: "If your friends buy 8 tickets",
      subLabel: "Your ticket becomes",
      price: "FREE",
      id: 4,
    },
  ];
  const paymentCardFields = [
    {
      name: "cardNumber",
      label: "Card Number",
      type: "text",
      required: true,
      onValidate: () => {},
      placeholder: "1234 1234 1234 1234",
    },
    {
      name: "expDate",
      label: "Expiration date",
      type: "text",
      required: true,
      onValidate: () => {},
      placeholder: "12 / 31",
    },
    {
      name: "cvc",
      label: "CVC",
      type: "text",
      required: true,
      onValidate: () => {},
      placeholder: "1234",
    },
  ];

  const paymentFields = [
    {
      label: "Event",
      id: "eventName",
      class: "field-underline",
    },
    {
      label: "Ticket Type",
      id: "ticketType",
      class: "",
    },
    {
      label: "Number of Tickets",
      id: "numberOfTickets",
      class: "",
    },
    {
      label: "Price (per ticket, incl. fees)",
      id: "price",
      class: "field-underline",
    },
    {
      label: "Total (incl. fees, card processing and taxes)",
      id: "total",
      class: "",
    },
  ];

  //Populated order data...
  const orderData = {
    eventName: "Carmen - La Llorona",
    ticketType: "Ticket 1",
    numberOfTickets: 1,
    price: "89.80 USD",
    total: "89.80 USD",
  };

  const billingInfoData = [
    {
      id: 1,
      label: "Get Your Tickets",
      fields: [
        {
          groupClassname: "billing-info-container__twoFields",
          groupItems: [
            {
              className: "is-half",
              name: "firstName",
              label: "First Name",
              type: "text",
              required: true,
              onValidate: () => {},
            },
            {
              className: "is-half",
              name: "lastName",
              label: "Last Name",
              type: "text",
              required: true,
              onValidate: () => {},
            },
          ],
        },
        {
          groupClassname: "billing-info-container__singleField",
          groupItems: [
            {
              className: "",
              name: "email",
              label: "Email",
              type: "email",
              required: true,
              onValidate: () => {},
            },
          ],
        },
        {
          groupClassname: "billing-info-container__singleField",
          groupItems: [
            {
              className: "",
              name: "phone",
              label: "Phone",
              type: "text",
              required: true,
              onValidate: () => {},
              component: (
                <span onClick={() => console.log("OUR CUSTOM COMPONENT")}>
                  Custom Component
                </span>
              ),
            },
          ],
        },
      ],
    },
    {
      id: 2,
      label: "Ticket Holders",
      fields: [
        {
          groupClassname: "billing-info-container__singleField",
          groupItems: [
            {
              name: "holderFirstName",
              label: "Holder FirstName",
              type: "text",
              required: true,
              onValidate: () => {},
            },
          ],
        },
      ],
    },
  ];

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    holderFirstName: "",
  };

  const paymentInitialValues = {
    cardNumber: "",
    expDate: "",
    cvc: "",
  };

  const handlePayment = async (paymentAction) => {
    console.log("paymentAction", paymentAction);
  };

  const handleSubmit = () => {
    console.log("handleSubmit");
  };
  const svgUrsl = {
    clipboard: "",
    facebook: "",
    twitter: "",
    messenger: "",
  };

  return (
    <div className='App'>
      {/* <BillingInfo
        data={billingInfoData}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      /> */}
      {/* <PaymentPage
        orderData={orderData}
        paymentFields={paymentFields}
        handlePayment={handlePayment}
        paymentCardFields={paymentCardFields}
        paymentInitialValues={paymentInitialValues}
        errorText=""
      /> */}
      {/* <ConfirmationPage
        referralPromotions={referralPromotions}
        icons={svgUrsl}
        shareLink='https://restlessnit.es/events/iza-livemusic10dec2020?ttf_r=6'
      /> */}
      <GetTickets eventId={3483} />
    </div>
  );
}

export default App;
