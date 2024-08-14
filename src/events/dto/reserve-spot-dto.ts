import { TicketKind } from '@prisma/client';

export class ReserveSpotDto {
  spots: string[];
  ticker_kind: TicketKind;
  email: string;
}
