import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { WC } from '../entities/wc';
import { WCService } from '../services/wc/wc.service';

@Controller()
export class WCController {
  constructor(private readonly service: WCService) {}

  @Get('wc/list/ligne/:name')
  async getListWC(@Param('name') name: string): Promise<WC[]> {
    try {
      const list = await this.service.getListWC(name);
      return list;
    } catch (e) {
      throw new HttpException('Ligne not found', HttpStatus.NOT_FOUND);
    }
  }
}
