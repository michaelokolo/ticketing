import useRequest from '../../hooks/use-request';
import Router from 'next/router';

const TicketShow = ({ ticket }) => {
  const { doRequest, errors } = useRequest({
    url: `/api/orders`,
    method: 'post',
    body: {
      ticketId: ticket.id,
    },
    onSuccess: (order) =>
      Router.push('/orders/[orderId]', `/orders/${order.id}`),
  });
  return (
    <div className="card w-75 mb-3 container py-5 my-5">
      <div className="card-body">
        <h1>{ticket.title}</h1>
        <p>Price: {ticket.price}</p>
        {errors}
        <button onClick={doRequest} class="btn btn-primary">
          Purchase
        </button>
      </div>
    </div>
  );
};

TicketShow.getInitialProps = async (context, client) => {
  const { ticketId } = context.query;
  const { data } = await client.get(`/api/tickets/${ticketId}`);

  return { ticket: data };
};

export default TicketShow;
