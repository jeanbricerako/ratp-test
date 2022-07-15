import { Controller, Get, Param } from '@nestjs/common';
import { WC } from '../entities/wc';
import { WCService } from '../services/wc/wc.service';

@Controller()
export class WCController {
  constructor(private readonly service: WCService) {}

  @Get('wc/list/ligne/:name')
  async getListWC(@Param('name') name: string): Promise<WC[]> {
    return this.service.getListWC(name);
  }
}
