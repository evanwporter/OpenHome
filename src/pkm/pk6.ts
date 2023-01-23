import { getMetLocation } from "../MetLocation/MetLocation";
import { Gen9RibbonsPart1 } from "../consts/Ribbons";
import { bytesToUint16LittleEndian, bytesToUint32LittleEndian } from "../util/utils";
import { pkm } from "./pkm";
import { Abilities } from "../consts/Abilities";
import { Items } from "../consts/Items";
import { Languages } from "../consts/Languages";

export class pk6 extends pkm {
  constructor(bytes: Uint8Array) {
    super(bytes);
    this.format = "pk6";
    this.personalityValue = bytesToUint32LittleEndian(bytes, 0x18);
    this.dexNum = bytesToUint16LittleEndian(bytes, 0x08);
    this.formNum = bytes[0x1d] >> 3;
    this.heldItem = Items[bytesToUint16LittleEndian(bytes, 0x0a)];
    this.ability = Abilities[bytes[0x14]];
    this.abilityNum = bytes[0x15];
    this.nature = bytes[0x1c];
    this.isFatefulEncounter = !!(bytes[0x1d] & 1)
    this.trainerID = bytesToUint16LittleEndian(bytes, 0x0c);
    this.secretID = bytesToUint16LittleEndian(bytes, 0x0e);
    this.displayID = this.trainerID;
    this.ball = bytes[0xdc];
    this.metLevel = bytes[0xdd] & ~0x80;
    this.trainerGender = bytes[0xdd] >> 7;
    this.moves = [
      bytesToUint16LittleEndian(bytes, 0x5a),
      bytesToUint16LittleEndian(bytes, 0x5c),
      bytesToUint16LittleEndian(bytes, 0x5e),
      bytesToUint16LittleEndian(bytes, 0x60),
    ];
    this.relearnMoves = [
      bytesToUint16LittleEndian(bytes, 0x6a),
      bytesToUint16LittleEndian(bytes, 0x6c),
      bytesToUint16LittleEndian(bytes, 0x6e),
      bytesToUint16LittleEndian(bytes, 0x70),
    ];
    let ivBytes = bytesToUint32LittleEndian(bytes, 0x74);
    this.ivs = {
      hp: ivBytes & 0x1f,
      atk: (ivBytes >> 5) & 0x1f,
      def: (ivBytes >> 10) & 0x1f,
      spa: (ivBytes >> 15) & 0x1f,
      spd: (ivBytes >> 20) & 0x1f,
      spe: (ivBytes >> 25) & 0x1f,
    };
    this.evs = {
      hp: bytes[0x1e],
      atk: bytes[0x1f],
      def: bytes[0x20],
      spa: bytes[0x21],
      spd: bytes[0x22],
      spe: bytes[0x23],
    };
    this.contest = {
      cool: bytes[0x24],
      beauty: bytes[0x25],
      cute: bytes[0x26],
      smart: bytes[0x27],
      tough: bytes[0x28],
      sheen: bytes[0x29],
    };
    this.gameOfOrigin = bytes[0xdf];
    let byteArray = new Uint16Array(12);
    for (let i = 0; i < 12; i += 1) {
      let byte = bytesToUint16LittleEndian(bytes, 0x40 + 2 * i);
      if (byte == 0) {
        break;
      }
      byteArray[i] = byte;
    }
    this.nickname = new TextDecoder("utf-16").decode(byteArray);
    byteArray = new Uint16Array(12);
    for (let i = 0; i < 12; i += 1) {
      let byte = bytesToUint16LittleEndian(bytes, 0xb0 + 2 * i);
      if (byte == 0) {
        break;
      }
      byteArray[i] = byte;
    }
    this.trainerName = new TextDecoder("utf-16").decode(byteArray);
    this.ribbons = [];
    for (let byte = 0; byte < 4; byte++) {
      let ribbonsUint8 = bytes[0x30 + byte];
      for (let bit = 0; bit < 8; bit++) {
        if (ribbonsUint8 & Math.pow(2, bit)) {
          this.ribbons.push(Gen9RibbonsPart1[8 * byte + bit]);
        } else {
        }
      }
    }
    this.eggYear = bytes[0xd1];
    this.eggMonth = bytes[0xd2];
    this.eggDay = bytes[0xd3];
    this.eggLocation =
      getMetLocation(
        this.gameOfOrigin,
        bytesToUint16LittleEndian(bytes, 0xd8),
        true
      ) ?? bytesToUint16LittleEndian(bytes, 0xd8).toString();
    this.metYear = bytes[0xd4];
    this.metMonth = bytes[0xd5];
    this.metDay = bytes[0xd6];
    this.metLocation =
      getMetLocation(
        this.gameOfOrigin,
        bytesToUint16LittleEndian(bytes, 0xda)
      ) ?? bytesToUint16LittleEndian(bytes, 0xda).toString();

    this.language = Languages[bytes[0xe3]];
    this.isShiny =
      (this.trainerID ^
        this.secretID ^
        bytesToUint16LittleEndian(bytes, 0x18) ^
        bytesToUint16LittleEndian(bytes, 0x1a)) <
      16;
    this.isSquareShiny =
      this.gameOfOrigin === 34 ||
      (this.trainerID ^
        this.secretID ^
        bytesToUint16LittleEndian(bytes, 0x18) ^
        bytesToUint16LittleEndian(bytes, 0x1a)) ===
        0;
  }
}
