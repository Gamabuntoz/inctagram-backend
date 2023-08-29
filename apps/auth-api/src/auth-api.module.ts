import { Module } from '@nestjs/common';
import {AuthApiController} from "./auth-api.controller";
import {AuthApiService} from "./users-api.service";


@Module({
  imports: [],
  controllers: [AuthApiController],
  providers: [AuthApiService],
})
export class AuthApiModule {}
