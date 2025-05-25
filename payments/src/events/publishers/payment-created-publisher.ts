import {
  Subjects,
  Publisher,
  PaymentCreatedEvent,
} from '@mokolotickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
