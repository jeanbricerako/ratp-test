import { Module } from '@nestjs/common';
import { WCController } from '../controller/wc.controller';
import { RepositoriesModule } from '../repositories';
import WCRepository from '../repositories/wc.repository';
import { WCHandlerRepository, WCService } from '../services';

@Module({
  imports: [RepositoriesModule],
  controllers: [WCController],
  providers: [
    WCService,
    { provide: WCHandlerRepository, useExisting: WCRepository },
  ],
})
export class WCModule {}
