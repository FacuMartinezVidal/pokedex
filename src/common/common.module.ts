import { Module } from '@nestjs/common';
import { AxiosAdapter } from './http-adapater/axios.adapater';

@Module({
  providers: [AxiosAdapter],
  exports: [AxiosAdapter],
})
export class CommonModule {}
