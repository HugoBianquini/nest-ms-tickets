import { TicketKind } from '@prisma/client';

export class ReserveShowSpotRequest {
  show_spots: string[];
  ticket_kind: TicketKind;
  email: string;
}
