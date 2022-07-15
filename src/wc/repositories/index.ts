import { Module } from '@nestjs/common';
import WCRepository from './wc.repository';

@Module({
  providers: [WCRepository],
  exports: [WCRepository],
})
export class RepositoriesModule {}
