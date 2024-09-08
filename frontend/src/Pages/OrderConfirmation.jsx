import Navigation from "../components/Navigation";

const OrderConfirmation = () => {
  return (
    <>
      <Navigation />
      <div className="container mx-auto text-center mt-12">
        <h1 className="text-2xl font-bold">Thank you for your order!</h1>
        <p>Your order has been placed successfully.</p>
      </div>
    </>
  );
};

export default OrderConfirmation;
