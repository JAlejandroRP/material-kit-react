import { Helmet } from "react-helmet-async";

import { OrderForm } from "src/sections/orders/newOrderView";

export default function OrderFormPage() {
  return (
    <>
      <Helmet>
        <title> New Order </title>
      </Helmet>
      <OrderForm />
    </>
  );
}