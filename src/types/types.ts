export type Dictionary = { [index: string]: any };
export type Stat = 'HP' | 'Atk' | 'Def' | 'SpA' | 'SpD' | 'Spe' | 'Sp';
export type Type =
  | 'Fire'
  | 'Grass'
  | 'Electric'
  | 'Ghost'
  | 'Fairy'
  | 'Water'
  | 'Ice'
  | 'Rock'
  | 'Ground'
  | 'Flying'
  | 'Fighting'
  | 'Psychic'
  | 'Dark'
  | 'Bug'
  | 'Steel'
  | 'Poison'
  | 'Dragon'
  | 'Normal';
export type levelUpType =
  | 'Slow'
  | 'Medium Slow'
  | 'Medium Fast'
  | 'Fast'
  | 'Erratic'
  | 'Fluctuating';

export enum SaveType {
  UNKNOWN,
  RGBY_J,
  RBY_I,
  GS_J,
  GS_I,
  C_J,
  C_I,
  RS,
  FRLG,
  E,
  DP,
  Pt,
  HGSS,
  G5,
}

export const getSaveTypeString = (saveType: SaveType): string => {
  switch (saveType) {
    case SaveType.UNKNOWN:
      return 'Unknown Game';
    case SaveType.RGBY_J:
      return 'Pokémon Red/Blue/Green/Yellow (JP)';
    case SaveType.RBY_I:
      return 'Pokémon Red/Blue/Yellow (INT)';
    case SaveType.GS_J:
      return 'Pokémon Gold/Silver (JP)';
    case SaveType.GS_I:
      return 'Pokémon Gold/Silver (INT)';
    case SaveType.C_J:
      return 'Pokémon Crystal (JP)';
    case SaveType.C_I:
      return 'Pokémon Crystal';
    case SaveType.RS:
      return 'Pokémon Ruby/Sapphire';
    case SaveType.FRLG:
      return 'Pokémon FireRed/LeafGreen';
    case SaveType.E:
      return 'Pokémon Emerald';
    case SaveType.DP:
      return 'Pokémon Diamond/Pearl';
    case SaveType.Pt:
      return 'Pokémon Platinum';
    case SaveType.HGSS:
      return 'Pokémon HeartGold/SoulSilver';
    case SaveType.G5:
      return 'Pokémon Black/White/Black 2/White 2';
  }
};

export interface SaveRef {
  filePath: string;
  saveType: SaveType;
  game?: string;
  trainerName?: string;
  trainerID?: string;
}

export type RegionalForme = 'Alola' | 'Galar' | 'Hisui' | 'Paldea';
export type Pokemon = {
  name: string;
  nationalDex: number;
  formes: Forme[];
  levelUpType: levelUpType;
};

export type Origin = {
  name: string;
  mark?: string;
  region?: string;
  logo?: string;
  gc?: number;
};

export type MonReference = { dexNumber: number; formeNumber: number };

export type Forme = {
  name: string;
  formeName: string;
  formeNumber: number;
  isBaseForme: boolean;
  isMega: boolean;
  isGMax: boolean;
  isBattleOnly: boolean;
  alias: string;
  types: Type[];
  genderRatio: { M: number; F: number };
  baseStats: {
    hp: number;
    atk: number;
    def: number;
    spa: number;
    spd: number;
    spe: number;
  };
  ability1: string;
  ability2?: string;
  abilityH?: string;
  height: number;
  weight: number;
  evos: MonReference[];
  prevo?: MonReference;
  eggGroups: string[];
  gen: number;
  regional?: RegionalForme;
  subLegendary: boolean;
  restrictedLegendary: boolean;
  ultraBeast: boolean;
  paradox: boolean;
  mythical: boolean;
  sprite: string;
  spriteIndex: [number, number];
};

export type Move = {
  name: string;
  accuracy?: number;
  class: 'physical' | 'status' | 'special';
  generation: string;
  power?: number;
  pp: number;
  pastGenPP: {
    G1?: number;
    G2?: number;
    G3?: number;
    G4?: number;
    G5?: number;
    G6?: number;
    SMUSUM?: number;
    LGPE?: number;
    G8?: number;
  };
  type: string;
  id: number;
};

export type GameLocations = { [key: number]: string[] }
