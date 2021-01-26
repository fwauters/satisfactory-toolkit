export const Extractors = [
  {
    alias: 'oil_extractor',
    category: 'production',
    name: 'Oil Extractor',
    prod_by_min: {
      impure: 60,
      normal: 120,
      pure: 240
    }
  },
  {
    alias: 'water_extractor',
    category: 'production',
    name: 'Water Extractor',
    prod_by_min: 120
  }
];

export const Miners = [
  {
    alias: 'miner_mk1',
    category: 'production',
    mark: 'mk1',
    name: 'Miner Mk.1',
    prod_by_min: {
      impure: 30,
      normal: 60,
      pure: 120
    }
  },
  {
    alias: 'miner_mk2',
    category: 'production',
    mark: 'mk2',
    name: 'Miner Mk.2',
    prod_by_min: {
      impure: 60,
      normal: 120,
      pure: 240
    }
  },
  {
    alias: 'miner_mk3',
    category: 'production',
    mark: 'mk3',
    name: 'Miner Mk.3',
    prod_by_min: {
      impure: 120,
      normal: 240,
      pure: 480
    }
  }
];

/* export const Smelters = [
  {
    alias: 'foundry',
    category: 'production',
    name: 'Foundry'
  },
  {
    alias: 'smelter',
    category: 'production',
    ingr_by_min: {
      caterium: 45,
      copper: 30,
      iron: 30
    },
    name: 'Smelter',
    prod_by_min: {
      caterium: 15,
      copper: 30,
      iron: 30
    }
  }
]; */