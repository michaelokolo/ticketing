import {
  Subjects,
  Publisher,
  OrderCancelledEvent,
} from '@mokolotickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
