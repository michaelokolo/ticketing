import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@mokolotickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
