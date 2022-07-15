import { WC } from 'src/wc/entities/wc';
import { buildGetList } from '.';

describe('getListWC', () => {
  const mockedRepository = {
    getListByMetroName: jest.fn(),
  };
  const getListWC = buildGetList(mockedRepository);
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

  beforeEach(() => {
    mockedRepository.getListByMetroName.mockResolvedValue(MOCKED_WC_LIST);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should get wc list for metro 4', async () => {
    const result = await getListWC('4');

    expect(mockedRepository.getListByMetroName).toHaveBeenCalledWith('4');
    expect(result).toEqual(MOCKED_WC_LIST);
  });
});
