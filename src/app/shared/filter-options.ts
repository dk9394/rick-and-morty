import { IFilterOption } from './models/interfaces';

export class Filters {
  static filterTypes = {
    species: 'species',
    gender: 'gender',
    origin: 'origin',
  };

  static filterNames = {
    species: {
      human: 'Human',
      mytholog: 'Mytholog',
      other: 'Other Species',
    },
    genders: {
      male: 'Male',
      female: 'Female',
    },
    origins: {
      unknown: 'Unknown',
      postApocalypticEarth: 'Post-Apocalyptic Earth',
      nuptia: 'Nuptia 4',
      other: 'Other Origins',
    },
  };

  static filterOptions: {
    species: IFilterOption[];
    genders: IFilterOption[];
    origins: IFilterOption[];
  } = {
    species: [
      {
        key: 'human',
        name: Filters.filterNames.species.human,
        type: Filters.filterTypes.species,
        checked: false,
        other: false,
      },
      {
        key: 'mytholog',
        name: Filters.filterNames.species.mytholog,
        type: Filters.filterTypes.species,
        checked: false,
        other: false,
      },
      {
        key: 'otherSpecies',
        name: Filters.filterNames.species.other,
        type: Filters.filterTypes.species,
        checked: false,
        other: true,
      },
    ],
    genders: [
      {
        key: 'male',
        name: Filters.filterNames.genders.male,
        type: Filters.filterTypes.gender,
        checked: false,
        other: false,
      },
      {
        key: 'female',
        name: Filters.filterNames.genders.female,
        type: Filters.filterTypes.gender,
        checked: false,
        other: false,
      },
    ],
    origins: [
      {
        key: 'unknown',
        name: Filters.filterNames.origins.unknown,
        type: Filters.filterTypes.origin,
        checked: false,
        other: false,
      },
      {
        key: 'postApocalypticEarth',
        name: Filters.filterNames.origins.postApocalypticEarth,
        type: Filters.filterTypes.origin,
        checked: false,
        other: false,
      },
      {
        key: 'nuptia',
        name: Filters.filterNames.origins.nuptia,
        type: Filters.filterTypes.origin,
        checked: false,
        other: false,
      },
      {
        key: 'otherOrigins',
        name: Filters.filterNames.origins.other,
        type: Filters.filterTypes.origin,
        checked: false,
        other: true,
      },
    ],
  };
}
