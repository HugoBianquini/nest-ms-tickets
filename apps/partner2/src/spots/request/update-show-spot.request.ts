import { PartialType } from '@nestjs/mapped-types';
import { CreateShowSpotRequest } from './create-show-spot.request';

export class UpdateShowSpotRequest extends PartialType(CreateShowSpotRequest) {}
