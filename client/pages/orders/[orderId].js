import { useEffect, useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';

const OrderShow = ({ order, currentUser }) => {
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const findTimeLeft = () => {
      const msLeft = new Date(order.expiresAt) - new Date();
      setTimeLeft(Math.round(msLeft / 1000));
    };

    findTimeLeft();
    const timerId = setInterval(findTimeLeft, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [order]);

  if (timeLeft < 0) {
    return <div>Order has expired.</div>;
  }

  return (
    <div>
      Time left to pay: {timeLeft} seconds
      <StripeCheckout
        token={(token) => console.log(token)}
        stripeKey="pk_test_51RSOOJQiB6aSGMlf6SEvak1rKXhIPAJgjhy3y2rjmYDOHsbU0VqaJO5LWWeXXOaTUCbAG2urbAMkaXhf8aoYS7qd00yBOx9ff4"
        amount={order.ticket.price * 100}
        email={currentUser.email}
      />
    </div>
  );
};

OrderShow.getInitialProps = async (context, client) => {
  const { orderId } = context.query;
  const { data } = await client.get(`/api/orders/${orderId}`);

  return { order: data };
};

export default OrderShow;

//4242424242424242
