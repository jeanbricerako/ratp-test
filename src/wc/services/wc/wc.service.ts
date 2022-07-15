import { Injectable } from '@nestjs/common';
import { WC } from 'src/wc/entities/wc';
import { buildGetList } from './getList';

export abstract class WCRepository {
  abstract getListByMetroName(): Promise<WC[]>;
}

@Injectable()
export class WCService {
  readonly getListWC: ReturnType<typeof buildGetList>;

  constructor(repository: WCRepository) {
    this.getListWC = buildGetList(repository);
  }
}
