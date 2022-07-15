import { Test, TestingModule } from '@nestjs/testing';
import { WC } from '../entities/wc';
import { WCService } from '../services/wc/wc.service';
import { WCController } from './wc.controller';

describe('WCController', () => {
  let wcController: WCController;
  let wcService: WCService;
  let app: TestingModule;

  const MOCKED_WC_LIST = [
    {
      id: '1',
      station: 'chatelet',
      isPubliclyAvailable: true,
      isFree: true,
      coord_geo: [1, 1],
    } as WC,
    {
      id: '1',
      station: 'gare du nord',
      isPubliclyAvailable: true,
      isFree: true,
      coord_geo: [2, 2],
    } as WC,
  ];

  const mockWCService = {
    getListWC: () => MOCKED_WC_LIST,
  };

  const wcServiceProvider = {
    provide: WCService,
    useValue: mockWCService,
  };

  beforeEach(async () => {
    app = await Test.createTestingModule({
      controllers: [WCController],
      providers: [wcServiceProvider],
    }).compile();

    wcController = app.get<WCController>(WCController);
    wcService = app.get<WCService>(WCService);
  });

  it('should be defined', () => {
    const controller: WCController = app.get<WCController>(WCController);
    expect(controller).toBeDefined();
  });

  it('should call service getListWC method', async () => {
    jest
      .spyOn(wcService, 'getListWC')
      .mockImplementation(async () => MOCKED_WC_LIST);

    const result = await wcController.getListWC('4');

    expect(wcService.getListWC).toHaveBeenCalledWith('4');
    expect(result).toEqual(MOCKED_WC_LIST);
  });
});
