import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { CreateShowRequest } from './request/create-show.request';
import { UpdateShowRequest } from './request/update-show.request';
import { ReserveShowSpotRequest } from './request/reserve-show-spot-request';
import { EventsService } from '@app/core/events/events.service';

@Controller('shows')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  create(@Body() createShowRequest: CreateShowRequest) {
    return this.eventsService.create({
      name: createShowRequest.show_name,
      description: createShowRequest.show_description,
      date: createShowRequest.date,
      price: createShowRequest.price,
    });
  }

  @Get()
  findAll() {
    return this.eventsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateShowRequest: UpdateShowRequest,
  ) {
    return this.eventsService.update(id, {
      name: updateShowRequest.show_name,
      description: updateShowRequest.show_description,
      date: updateShowRequest.date,
      price: updateShowRequest.price,
    });
  }

  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventsService.remove(id);
  }

  @Post(':id/reserve')
  reserveSpots(
    @Body() request: ReserveShowSpotRequest,
    @Param('id') eventId: string,
  ) {
    return this.eventsService.reserveSpot({
      eventId,
      spots: request.show_spots,
      ticket_kind: request.ticket_kind,
      email: request.email,
    });
  }
}
