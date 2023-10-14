import { bytesToUint32LittleEndian, bytesToUint64LittleEndian } from '../../util/ByteLogic'
import { getMonGen12Identifier, getMonGen345Identifier } from '../../util/Lookup'
import { OHPKM, PKM } from '../PKMTypes'
import { SaveType, StringToStringMap } from '../types'
import { DPSAV } from './DPSAV'
import { G1SAV } from './G1SAV'
import { G2SAV } from './G2SAV'
import { G3SAV } from './G3SAV'
import { G5SAV } from './G5SAV'
import { HGSSSAV } from './HGSSSAV'
import { PtSAV } from './PtSAV'
import { SAV } from './SAV'

const SIZE_GEN12 = 0x8000
const SIZE_GEN3 = 0x20000
const SIZE_GEN45 = 0x80000

// check if each pokemon in a save file has OpenHome data associated with it
const recoverOHPKMData = (
  saveFile: SAV,
  getIdentifier: (_: PKM) => string | undefined,
  homeMonMap?: { [key: string]: OHPKM },
  lookupMap?: { [key: string]: string }
) => {
  if (!homeMonMap || !lookupMap || !getIdentifier) {
    return saveFile
  }
  saveFile.boxes.forEach((box) => {
    box.pokemon.forEach((mon, monIndex) => {
      if (mon) {
        // GameBoy PKM files don't have a personality value to track the mons with OpenHome data,
        // so they need to be identified with their IVs and OT
        const lookupIdentifier = getIdentifier(mon)
        if (!lookupIdentifier) return
        const homeIdentifier = lookupMap[lookupIdentifier]
        if (!homeIdentifier) return
        // console.log(identifier.slice(0, identifier.length - 3))
        const result = Object.entries(homeMonMap).find((entry) => entry[0] === homeIdentifier)
        if (result) {
          const updatedOHPKM = result[1]
          updatedOHPKM.updateData(mon)
          console.info('updating home data for', updatedOHPKM.nickname)
          window.electron.ipcRenderer.send('write-ohpkm', updatedOHPKM.bytes)
          box.pokemon[monIndex] = updatedOHPKM
        }
      }
    })
  })
  return saveFile
}

export const getSaveType = (bytes: Uint8Array): SaveType => {
  // Gen 4 saves include a size and hex "date" that can identify save type
  const validGen4DateAndSize = (offset: number) => {
    const size = bytesToUint32LittleEndian(bytes, offset - 0xc)
    if (size !== (offset & 0xffff)) return false
    const date = bytesToUint32LittleEndian(bytes, offset - 0x8)

    const DATE_INT = 0x20060623
    const DATE_KO = 0x20070903
    return date === DATE_INT || date === DATE_KO
  }
  // const validGen5Footer = (mainSize: number, infoLength: number) => {
  //   const footer = bytes.slice(
  //     mainSize - 0x100,
  //     mainSize - 0x100 + infoLength + 0x10
  //   )
  //   const stored = bytesToUint16LittleEndian(footer, 2)
  //   const actual = 0 // Checksums.CRC16_CCITT(footer[..infoLength]);
  //   return stored === actual
  // }
  if (bytes.length >= SIZE_GEN45) {
    if (validGen4DateAndSize(0x4c100)) {
      return SaveType.DP
    }
    if (validGen4DateAndSize(0x4cf2c)) {
      return SaveType.Pt
    }
    if (validGen4DateAndSize(0x4f628)) {
      return SaveType.HGSS
    }
    return SaveType.G5
  }
  if (bytes.length >= SIZE_GEN3) {
    const valueAtAC = bytesToUint32LittleEndian(bytes, 0xac)
    switch (valueAtAC) {
      case 1:
        return SaveType.FRLG
      case 0:
        return SaveType.RS
      default:
        for (let i = 0x890; i < 0xf2c; i += 4) {
          if (bytesToUint64LittleEndian(bytes, i) !== 0) return SaveType.E
        }
        return SaveType.RS
    }
  } else if (bytes.length >= SIZE_GEN12) {
    // hacky
    const g2save = new G2SAV('', bytes)
    if (g2save.areCrystalInternationalChecksumsValid()) {
      return SaveType.C_I
    }
    if (g2save.areGoldSilverChecksumsValid()) {
      return SaveType.GS_I
    }
    const g1save = new G1SAV('', bytes)
    if (!g1save.invalid) {
      return SaveType.RBY_I
    }
  }
  return SaveType.UNKNOWN
}

export const buildSaveFile = (
  filePath: string,
  fileBytes: Uint8Array,
  lookupMaps: {
    homeMonMap?: { [key: string]: OHPKM }
    gen12LookupMap?: StringToStringMap
    gen345LookupMap?: StringToStringMap
    fileCreatedDate?: Date
  }
): SAV | undefined => {
  const { homeMonMap, gen12LookupMap, gen345LookupMap, fileCreatedDate } = lookupMaps
  const saveType = getSaveType(fileBytes)
  let saveFile
  switch (saveType) {
    case SaveType.RBY_I:
      saveFile = new G1SAV(filePath, fileBytes)
      if (homeMonMap && gen12LookupMap) {
        saveFile.boxes.forEach((box) => {
          box.pokemon.forEach((mon, monIndex) => {
            if (!mon) return
            // GameBoy PKM files don't have a personality value to track the mons with OpenHome data,
            // so they need to be identified with their IVs and OT
            const gen12identifier = getMonGen12Identifier(mon)
            if (!gen12identifier) return
            const homeIdentifier = gen12LookupMap[gen12identifier]
            if (!homeIdentifier) return
            // console.log(identifier.slice(0, identifier.length - 3))
            const result = Object.entries(homeMonMap).find((entry) => entry[0] === homeIdentifier)
            if (result) {
              console.info('home mon found:', result[1])
              box.pokemon[monIndex] = result[1]
            }
          })
        })
      }
      return saveFile
    case SaveType.C_I:
    case SaveType.GS_I:
      saveFile = recoverOHPKMData(
        new G2SAV(filePath, fileBytes),
        getMonGen12Identifier,
        homeMonMap,
        gen12LookupMap
      )
      return saveFile
    case SaveType.RS:
    case SaveType.FRLG:
    case SaveType.E:
      saveFile = recoverOHPKMData(
        new G3SAV(filePath, fileBytes, fileCreatedDate),
        getMonGen345Identifier,
        homeMonMap,
        gen345LookupMap
      )
      break
    case SaveType.DP:
      saveFile = recoverOHPKMData(
        new DPSAV(filePath, fileBytes),
        getMonGen345Identifier,
        homeMonMap,
        gen345LookupMap
      )
      break
    case SaveType.Pt:
      saveFile = recoverOHPKMData(
        new PtSAV(filePath, fileBytes),
        getMonGen345Identifier,
        homeMonMap,
        gen345LookupMap
      )
      break
    case SaveType.HGSS:
      saveFile = recoverOHPKMData(
        new HGSSSAV(filePath, fileBytes),
        getMonGen345Identifier,
        homeMonMap,
        gen345LookupMap
      )
      break
    case SaveType.G5:
      saveFile = recoverOHPKMData(
        new G5SAV(filePath, fileBytes),
        getMonGen345Identifier,
        homeMonMap,
        gen345LookupMap
      )
      break
  }
  return saveFile
}
