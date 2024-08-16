import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateShowSpotRequest } from './request/create-show-spot.request';
import { UpdateShowSpotRequest } from './request/update-show-spot.request';
import { SpotsService } from '@app/core/spots/spots.service';

@Controller('shows/:eventId/spots')
export class SpotsController {
  constructor(private readonly spotsService: SpotsService) {}

  @Post()
  create(
    @Body() createShowSpotRequest: CreateShowSpotRequest,
    @Param('eventId') eventId: string,
  ) {
    return this.spotsService.create({
      name: createShowSpotRequest.spotName,
      eventId,
    });
  }

  @Get()
  findAll(@Param('eventId') eventId: string) {
    return this.spotsService.findAll(eventId);
  }

  @Get('spotId')
  findOne(@Param('spotId') spotId: string, @Param('eventId') eventId: string) {
    return this.spotsService.findOne(eventId, spotId);
  }

  @Patch('spotId')
  update(
    @Param('spotId') spotId: string,
    @Param('eventId') eventId: string,
    @Body() updateShowSpotRequest: UpdateShowSpotRequest,
  ) {
    return this.spotsService.update(eventId, spotId, {
      name: updateShowSpotRequest.spotName,
    });
  }

  @Delete('spotId')
  remove(@Param('spotId') spotId: string, @Param('eventId') eventId: string) {
    return this.spotsService.remove(eventId, spotId);
  }
}
