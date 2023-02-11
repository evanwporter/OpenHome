import { MONS_LIST } from '../consts/Mons';
import Types from '../consts/Types';
import { writeUint32ToBuffer } from '../renderer/util/ByteLogic';
import { pkm, stats, statsPreSplit } from './pkm';

export const writeIVsToBuffer = (
  ivs: stats,
  buffer: Uint8Array,
  offset: number,
  isEgg: boolean,
  isNicknamed: boolean
) => {
  let ivsValue = 0;
  ivsValue = (ivsValue + (isNicknamed ? 1 : 0)) << 1;
  ivsValue = (ivsValue + (isEgg ? 1 : 0)) << 5;
  ivsValue = (ivsValue + (ivs.spe & 0x1f)) << 5;
  ivsValue = (ivsValue + (ivs.spd & 0x1f)) << 5;
  ivsValue = (ivsValue + (ivs.spa & 0x1f)) << 5;
  ivsValue = (ivsValue + (ivs.def & 0x1f)) << 5;
  ivsValue = (ivsValue + (ivs.atk & 0x1f)) << 5;
  ivsValue = ivsValue + (ivs.hp & 0x1f);
  writeUint32ToBuffer(ivsValue, buffer, offset);
};

export const getAbilityFromNumber = (
  dexNum: number,
  formNum: number,
  abilityNum: number
) => {
  console.log("ability from number", !MONS_LIST[dexNum]?.formes[formNum])
  if (!MONS_LIST[dexNum]?.formes[formNum]) {
    return 'None';
  }
  if (abilityNum === 4) {
    return (
      MONS_LIST[dexNum].formes[formNum].abilityH ??
      MONS_LIST[dexNum].formes[formNum].ability1
    );
  } else if (abilityNum === 2) {
    return (
      MONS_LIST[dexNum].formes[formNum].ability2 ??
      MONS_LIST[dexNum].formes[formNum].ability1
    );
  } else {
    return MONS_LIST[dexNum].formes[formNum].ability1
  }
};

export const generateTeraType = (dexNum: number, formNum: number) => {
  if (!MONS_LIST[dexNum]?.formes[formNum]) {
    return;
  }
  let types = MONS_LIST[dexNum].formes[formNum].types;
  if (!types) {
    return;
  }
  const typeIndex = Math.floor(Math.random() * types.length);
  return Types.indexOf(types[typeIndex]);
};

export const ivsFromDVs = (dvs: statsPreSplit) => {
  return {
    hp: dvs.hp * 2 + 1,
    atk: dvs.atk * 2 + 1,
    def: dvs.def * 2 + 1,
    spa: dvs.spc * 2 + 1,
    spd: dvs.spc * 2 + 1,
    spe: dvs.spe * 2 + 1,
  };
};

export const gvsFromIVs = (ivs: stats) => {
  return {
    hp: gvFromIV(ivs.hp),
    atk: gvFromIV(ivs.atk),
    def: gvFromIV(ivs.def),
    spa: gvFromIV(ivs.spa),
    spd: gvFromIV(ivs.spd),
    spe: gvFromIV(ivs.spe),
  };
};

export const dvsFromIVs = (ivs: stats) => {
  return {
    hp: Math.ceil((ivs.hp - 1) / 2),
    atk: Math.ceil((ivs.atk - 1) / 2),
    def: Math.ceil((ivs.def - 1) / 2),
    spc: Math.ceil(((ivs.spa + ivs.spd) / 2 - 1) / 2),
    spe: Math.ceil((ivs.spe - 1) / 2),
  };
};

const gvFromIV = (iv: number) => {
  return iv < 20 ? 0 : iv < 26 ? 1 : iv < 31 ? 2 : 3;
};

export const generateIVs = () => {
  return {
    hp: Math.round(Math.random() * 31),
    atk: Math.round(Math.random() * 31),
    def: Math.round(Math.random() * 31),
    spa: Math.round(Math.random() * 31),
    spd: Math.round(Math.random() * 31),
    spe: Math.round(Math.random() * 31),
  };
};
