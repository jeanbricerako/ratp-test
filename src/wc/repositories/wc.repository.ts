import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { WC } from '../entities/wc';

const url = `https://data.ratp.fr/api/records/1.0/search/?dataset=sanitaires-reseau-ratp&q=&facet=ligne&facet=station&facet=tarif_gratuit_payant&facet=acces_bouton_poussoir&facet=en_zone_controlee&facet=hors_zone_controlee_station&facet=hors_zone_controlee_voie_publique`;

@Injectable()
export default class WCRepository {
  async getListByMetroName(name: string): Promise<WC[] | Error> {
    const res = await axios.get(url);
    const records = res.data.records;
    const wcListFromMetro = records.filter((r) => r.fields.ligne === name);
    if (!wcListFromMetro.length) {
      throw new Error(`Cannot find a result with ${name}`);
    }
    return wcListFromMetro.map(this.transformToWCEntity);
  }

  private transformToWCEntity(data: any) {
    return {
      id: data.recordid,
      metro: data.fields.ligne,
      station: data.fields.station,
      isPubliclyAvailable: data.fields.accessible_au_public,
      isFree: data.fields.tarif_gratuit_payant,
      coord_geo: data.fields.coord_geo,
    };
  }
}
