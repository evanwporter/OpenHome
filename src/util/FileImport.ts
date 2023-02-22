import OHPKM from '../PKM/OHPKM';
import { COLOPKM } from '../PKM/COLOPKM';
import { PA8 } from '../PKM/PA8';
import { PK2 } from '../PKM/PK2';
import { PK3 } from '../PKM/PK3';
import { PK4 } from '../PKM/PK4';
import { PK5 } from '../PKM/PK5';
import { PK6 } from '../PKM/PK6';
import { PK7 } from '../PKM/PK7';
import { PK8 } from '../PKM/PK8';
import { PK9 } from '../PKM/PK9';
import { PKM } from '../PKM/PKM';
import { XDPKM } from '../PKM/XDPKM';
import { PK1 } from '../PKM/PK1';
import { PB7 } from '../PKM/PB7';

export const acceptableExtensions = [
  'OHPKM',
  'PKM',
  'PK1',
  'PK2',
  'COLOPKM',
  'XDPKM',
  'PK5',
  'PK6',
  'PK7',
  'PB7',
  'PK8',
  'PA8',
  'PB8',
  'PK9',
];

export const bytesToPKM = (bytes: Uint8Array, extension: string): PKM => {
  if (extension === 'ohpkm') {
    return new OHPKM(bytes);
  } else if (bytes.length === 69 || extension === 'PK1') {
    return new PK1(bytes.slice(3, bytes.length));
  } else if (bytes.length === 73 || extension === 'PK2') {
    return new PK2(bytes.slice(3, bytes.length));
  } else if (extension === 'COLOPKM') {
    return new COLOPKM(bytes);
  } else if (extension === 'XDPKM') {
    return new XDPKM(bytes);
  } else if (
    extension === 'PK3' ||
    bytes.length === 100 ||
    bytes.length === 80
  ) {
    return new PK3(bytes);
  } else if (
    bytes[0x5f] < 20 &&
    (extension === 'PK4' || bytes.length === 136 || bytes.length === 236)
  ) {
    return new PK4(bytes);
  } else if (
    extension === 'PK5' ||
    bytes.length === 0xdc ||
    bytes.length === 0x88 ||
    bytes.length === 136
  ) {
    return new PK5(bytes);
  } else if (extension === 'PK6') {
    return new PK6(bytes);
  } else if (extension === 'PK7') {
    return new PK7(bytes);
  } else if (extension === 'PB7') {
    return new PB7(bytes);
  } else if (extension === 'PK8' || extension === 'PB8') {
    return new PK8(bytes, extension === 'PB8' ? 'PB8' : 'PK8');
  } else if (extension === 'PA8') {
    return new PA8(bytes);
  } else {
    return new PK9(bytes);
  }
};
