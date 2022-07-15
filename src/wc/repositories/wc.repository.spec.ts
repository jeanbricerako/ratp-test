import WCRepository from './wc.repository';

describe('WCRepository', () => {
  const repository = new WCRepository();

  it('should get wc list for metro 4', async () => {
    const result = await repository.getListByMetroName('B');

    expect(result).toEqual([
      {
        coord_geo: [48.75482748503882, 2.3008650705983067],
        id: 'c981ddba331a15dcff616b967a04695c91a0c3c4',
        isFree: 'gratuit',
        isPubliclyAvailable: 'oui',
        metro: 'B',
        station: 'Antony',
      },
    ]);
  });
});
