import { WC } from 'src/wc/entities/wc';

type Repository = {
  getListByMetroName: (name: string) => Promise<WC[]>;
};

export function buildGetList(repository: Repository) {
  return async function getList(metroName: string): Promise<WC[]> {
    try {
      const wcs = await repository.getListByMetroName(metroName);
      return wcs;
    } catch (e) {
      throw e;
    }
  };
}
