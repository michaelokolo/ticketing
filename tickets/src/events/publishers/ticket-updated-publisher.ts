import { Publisher, Subjects, TicketUpdatedEvent } from '@mokolotickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
