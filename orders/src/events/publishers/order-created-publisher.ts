import { Publisher, OrderCreatedEvent, Subjects } from '@mokolotickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
