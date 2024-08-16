import { PartialType } from '@nestjs/mapped-types';
import { CreateShowRequest } from './create-show.request';

export class UpdateShowRequest extends PartialType(CreateShowRequest) {}
