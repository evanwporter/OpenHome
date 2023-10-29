import { GameOfOrigin } from '../../consts'
import {
  ORAS_TRANSFER_RESTRICTIONS,
  XY_TRANSFER_RESTRICTIONS,
} from '../../consts/TransferRestrictions'
import { bytesToUint16LittleEndian, uint16ToBytesLittleEndian } from '../../util/ByteLogic'
import { CRC16_CCITT } from '../../util/Encryption'
import { utf16BytesToString } from '../../util/Strings/StringConverter'
import { OHPKM, PK6 } from '../PKMTypes'
import { SaveType } from '../types'
import { Box, SAV } from './SAV'

const XY_PC_OFFSET = 0x22600
const XY_PC_CHECKSUM_OFFSET = 0x655c2
const ORAS_PC_OFFSET = 0x33000
const ORAS_PC_CHECKSUM_OFFSET = 0x75fda
const BOX_NAMES_OFFSET: number = 0x04400
const BOX_SIZE: number = 232 * 30

export class G6SAV extends SAV<PK6> {
  trainerDataOffset: number = 0x14000

  boxes: Array<Box<PK6>>

  saveType = SaveType.G6

  boxChecksumOffset: number = 0x75fda

  pcOffset = XY_PC_OFFSET
  pcChecksumOffset = XY_PC_CHECKSUM_OFFSET

  constructor(path: string, bytes: Uint8Array) {
    super(path, bytes)
    this.name = utf16BytesToString(this.bytes, this.trainerDataOffset + 72, 0x10)
    this.tid = bytesToUint16LittleEndian(this.bytes, this.trainerDataOffset)
    this.sid = bytesToUint16LittleEndian(this.bytes, this.trainerDataOffset + 2)
    this.currentPCBox = this.bytes[0]
    this.displayID = this.tid.toString().padStart(5, '0')
    this.origin = this.bytes[this.trainerDataOffset + 4]
    switch (this.origin) {
      case GameOfOrigin.X:
      case GameOfOrigin.Y:
        this.transferRestrictions = XY_TRANSFER_RESTRICTIONS
        break
      case GameOfOrigin.OmegaRuby:
      case GameOfOrigin.AlphaSapphire:
        this.transferRestrictions = ORAS_TRANSFER_RESTRICTIONS
        this.pcOffset = ORAS_PC_OFFSET
        this.pcChecksumOffset = ORAS_PC_CHECKSUM_OFFSET
        break
    }
    this.boxes = Array(31)
    for (let box = 0; box < 31; box++) {
      const boxName = utf16BytesToString(this.bytes, BOX_NAMES_OFFSET + 34 * box, 17)
      this.boxes[box] = new Box(boxName, 30)
    }

    for (let box = 0; box < 31; box++) {
      for (let monIndex = 0; monIndex < 30; monIndex++) {
        try {
          const startByte = this.pcOffset + BOX_SIZE * box + 232 * monIndex
          const endByte = this.pcOffset + BOX_SIZE * box + 232 * (monIndex + 1)
          const monData = bytes.slice(startByte, endByte)
          const mon = new PK6(monData, true)
          if (mon.gameOfOrigin !== 0 && mon.dexNum !== 0) {
            this.boxes[box].pokemon[monIndex] = mon
          }
        } catch (e) {
          console.error(e)
        }
      }
    }
  }

  prepareBoxesForSaving() {
    // for (let i = 0; i < 58; i++) {
    //   const blockInfoOffset = 0x75e00 + 0x14 + i * 8
    //   const len = bytesToUint32LittleEndian(this.bytes, blockInfoOffset)
    //   const id = bytesToUint16LittleEndian(this.bytes, blockInfoOffset + 4)
    //   const checksum = bytesToUint16LittleEndian(this.bytes, blockInfoOffset + 6)
    //   console.log({
    //     i,
    //     id,
    //     len,
    //     checksum: checksum.toString(16),
    //     checksumOffset: blockInfoOffset,
    //   })
    // }
    // console.log(CRC16_CCITT(this.bytes, 0x000, 0x2c8).toString(16))
    const changedMonPKMs: OHPKM[] = []
    console.log(this.updatedBoxSlots)
    this.updatedBoxSlots.forEach(({ box, index }) => {
      const changedMon = this.boxes[box].pokemon[index]
      // we don't want to save OHPKM files of mons that didn't leave the save
      // (and would still be PK6s)
      if (changedMon instanceof OHPKM) {
        changedMonPKMs.push(changedMon)
      }
      const writeIndex = this.pcOffset + BOX_SIZE * box + 232 * index
      // changedMon will be undefined if pokemon was moved from this slot
      // and the slot was left empty
      if (changedMon) {
        try {
          const mon =
            changedMon instanceof OHPKM ? new PK6(undefined, undefined, changedMon) : changedMon
          if (mon?.gameOfOrigin && mon?.dexNum) {
            mon.refreshChecksum()
            console.log(`setting ${writeIndex.toString(16)}`)
            this.bytes.set(mon.toPCBytes(), writeIndex)
          }
        } catch (e) {
          console.error(e)
        }
      } else {
        const mon = new PK6(new Uint8Array(232))
        this.bytes.set(mon.toPCBytes(), writeIndex)
      }
    })
    this.bytes.set(
      uint16ToBytesLittleEndian(CRC16_CCITT(this.bytes, this.pcOffset, 0x34ad0)),
      this.pcChecksumOffset
    )
    return changedMonPKMs
  }
}
