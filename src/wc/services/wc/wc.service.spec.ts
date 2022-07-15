import { Test, TestingModule } from '@nestjs/testing';
import { WC } from 'src/wc/entities/wc';
import { WCRepository, WCService } from './wc.service';

describe('WCService', () => {
  let wcService: WCService;
  let wcRepository: WCRepository;

  const MOCKED_WC_LIST = [
    {
      id: '1',
      metro: '4',
      station: 'chatelet',
      isPubliclyAvailable: true,
      isFree: true,
      coord_geo: [1, 1],
    } as WC,
    {
      id: '1',
      metro: '4',
      station: 'gare du nord',
      isPubliclyAvailable: true,
      isFree: true,
      coord_geo: [1, 1],
    } as WC,
  ];

  const mockWCRepository = {
    getListByMetroName: () => Promise<WC[]>,
  };

  const wcRepositoryProvider = {
    provide: WCRepository,
    useValue: mockWCRepository,
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WCService, wcRepositoryProvider],
    }).compile();

    wcService = module.get<WCService>(WCService);
    wcRepository = module.get<WCRepository>(WCRepository);
  });

  it('should be defined', () => {
    expect(wcService).toBeDefined();
  });

  it('should call repository add method', async () => {
    jest
      .spyOn(wcRepository, 'getListByMetroName')
      .mockImplementation(async () => MOCKED_WC_LIST);

    await wcService.getListWC('4');

    expect(wcRepository.getListByMetroName).toHaveBeenCalledWith('4');
  });
});
