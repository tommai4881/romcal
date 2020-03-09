import dayjs from 'dayjs';

import { Locales } from '../lib';
import { LITURGICAL_COLORS } from '@RomcalConstants/liturgical-colors.constant';
import { TITLES } from '@RomcalConstants/titles.constant';
import { IRomcalDateItem } from '@RomcalModels/romcal-date-item';
import Config, { IRomcalDefaultConfig } from '@RomcalModels/romcal-config';
import { TypesEnum } from '@RomcalEnums/types.enum';

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = async (config: Config): Promise<Array<IRomcalDateItem>> => {
  const year = config.year;
  const _dates: Array<IRomcalDateItem> = [
    {
      key: 'waitangiDay',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-2-6`),
    },
    {
      key: 'saintPaulMikiAndCompanionsMartyrs',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-2-7`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'saintPatrickBishop',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-3-17`),
    },
    {
      key: 'saintMarkApostle',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-4-26`),
    },
    {
      key: 'saintLouisGrignonDeMontfortPriest',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-27`),
    },
    {
      key: 'saintPeterChanelPriestAndMartyrSaintLouisGrignonDeMontfortPriest',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-4-28`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'saintPatrickBishop',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-3-17`),
    },
    {
      key: 'saintMarkTheEvangelist',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-4-26`),
    },
    {
      key: 'saintLouisGrignonDeMontfortPriest',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-4-27`),
    },
    {
      key: 'saintPeterChanelPriestAndMartyrSaintLouisGrignonDeMontfortPriest',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-4-28`),
      data: {
        meta: {
          liturgicalColor: LITURGICAL_COLORS.RED,
          titles: [TITLES.MARTYR],
        },
      },
    },
    {
      key: 'ourLadyHelpOfChristians',
      type: TypesEnum.MEMORIAL,
      date: dayjs.utc(`${year}-5-24`),
    },
    {
      key: 'saintMarcellinChampagnatPriest',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-6-6`),
    },
    {
      key: 'saintDominicPriest/SaintSixtusIiPopeAndCompanionsMartyrsSaintCajetanPriest',
      type: TypesEnum.OPT_MEMORIAL,
      date: dayjs.utc(`${year}-8-7`),
    },
    {
      key: 'saintMaryMacKillopVirgin',
      type: TypesEnum.FEAST,
      date: dayjs.utc(`${year}-8-8`),
    },
  ];

  // Get localized celebration names
  return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
