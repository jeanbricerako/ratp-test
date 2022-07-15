import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WCModule } from './wc/module';

@Module({
  imports: [WCModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
