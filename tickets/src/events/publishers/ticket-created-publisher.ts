import { Publisher, Subjects, TicketCreatedEvent } from '@mokolotickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
