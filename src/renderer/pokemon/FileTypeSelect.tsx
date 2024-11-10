import { uniq } from 'lodash'
import { useMemo } from 'react'
import { ALL_SAVE_TYPES } from 'src/types/SAVTypes/util'
import { isRestricted } from 'src/types/TransferRestrictions'
import { PKMFormData } from 'src/types/interfaces/base'
import { Styles } from 'src/types/types'
import {
  BDSP_TRANSFER_RESTRICTIONS,
  LA_TRANSFER_RESTRICTIONS,
  LGPE_TRANSFER_RESTRICTIONS,
  SV_TRANSFER_RESTRICTIONS,
  SWSH_TRANSFER_RESTRICTIONS,
} from '../../consts/TransferRestrictions'
import { filterUndefined } from '../../util/Sort'

const styles = {
  fileTypeChip: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    boxShadow: 'none',
    flex: 1,
    margin: 8,
  },
} as Styles

const fileTypeColors: Record<string, string> = {
  OHPKM: '#748fcd',
  PK1: '#b34',
  PK2: '#b6c',
  PK3: '#9b3',
  COLOPKM: '#93f',
  XDPKM: '#53b',
  PK4: '#f88',
  PK5: '#484',
  PK6: 'blue',
  PK7: 'orange',
  PB7: '#a75',
  PK8: '#6bf',
  PB8: '#6bf',
  PA8: '#8cc',
  PK9: '#f52',
}

interface FileTypeSelectProps {
  baseFormat: string
  currentFormat: string
  formData: PKMFormData
  onChange: (selectedFormat: string) => void
}

const FileTypeSelect = (props: FileTypeSelectProps) => {
  const { baseFormat, currentFormat, formData, onChange } = props

  const supportedFormats = useMemo(() => {
    const supportedFormats = uniq(
      ALL_SAVE_TYPES.map((saveType) =>
        !isRestricted(saveType.transferRestrictions, formData.dexNum, formData.formeNum)
          ? saveType.pkmType.name.slice(1) // hack to get the class name (slice(1) removes the underscore prefix)
          : undefined
      )
    ).filter(filterUndefined)

    // These should be removed when support is added for their corresponding saves
    if (!isRestricted(LGPE_TRANSFER_RESTRICTIONS, formData.dexNum, formData.formeNum)) {
      supportedFormats.push('PB7')
    }
    if (!isRestricted(SWSH_TRANSFER_RESTRICTIONS, formData.dexNum, formData.formeNum)) {
      supportedFormats.push('PK8')
    }
    if (!isRestricted(BDSP_TRANSFER_RESTRICTIONS, formData.dexNum, formData.formeNum)) {
      supportedFormats.push('PB8')
    }
    if (!isRestricted(LA_TRANSFER_RESTRICTIONS, formData.dexNum, formData.formeNum)) {
      supportedFormats.push('PA8')
    }
    if (!isRestricted(SV_TRANSFER_RESTRICTIONS, formData.dexNum, formData.formeNum)) {
      supportedFormats.push('PK9')
    }
    return supportedFormats
  }, [formData])

  return (
    <select
      value={currentFormat}
      onChange={(e) => {
        onChange(e.target.value)
      }}
      style={{
        ...styles.fileTypeChip,
        backgroundColor: fileTypeColors[currentFormat],
      }}
    >
      <option value="OHPKM">OpenHome</option>
      {baseFormat !== 'OHPKM'
        ? [<option value={baseFormat}>{baseFormat}</option>]
        : supportedFormats.map((format) => <option value={format}>{format}</option>)}
    </select>
  )
}

export default FileTypeSelect
