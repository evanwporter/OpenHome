import React, { useContext, useEffect, useMemo, useState } from 'react'
import PokemonIcon from 'src/renderer/components/PokemonIcon'
import { FilterContext } from 'src/renderer/state/filter'
import { bytesToPKM } from 'src/types/FileImport'
import { filterApplies } from 'src/types/Filter'
import { PKMFile } from 'src/types/pkm/util'
import { Styles } from 'src/types/types'
import BoxIcons from '../../images/BoxIcons.png'
import { ItemFromString } from 'pokemon-resources'

const styles = {
  fillContainer: { width: '100%', height: '100%' },
  button: {
    padding: 0,
    width: '100%',
    aspectRatio: 1,
    position: 'relative',
    borderRadius: 3,
    textAlign: 'center',
    borderWidth: 1,
  },
  background: {
    background: `url(${BoxIcons}) no-repeat 0.02777% 0.02777%`,
    backgroundSize: '3600%',
    imageRendering: 'crisp-edges',
    height: '100%',
    width: '100%',
    zIndex: 1,
    top: 0,
    left: 0,
    position: 'absolute',
  },
} as Styles

interface BoxCellProps {
  onClick: () => void
  onDragEvent: (_: boolean) => void
  onDrop: (_: PKMFile[] | undefined) => void
  disabled?: boolean
  zIndex: number
  mon: PKMFile | undefined
  borderColor?: string
  setDraggedMon: React.Dispatch<React.SetStateAction<PKMFile | null>>
  removeItemFromBag: (itemName: string) => void 
}

const BoxCell = (props: BoxCellProps) => {
  const { onClick, onDragEvent, onDrop, disabled, zIndex, mon, borderColor, setDraggedMon, removeItemFromBag } = props
  const [isBeingDragged, setIsBeingDragged] = useState(false)
  const [isDraggedOver, setIsDraggedOver] = useState(false)
  const [filterState] = useContext(FilterContext)

  const isFilteredOut = useMemo(() => {
    return (
      Object.values(filterState).some((val) => val !== undefined) &&
      (mon === undefined || !filterApplies(filterState, mon))
    )
  }, [filterState, mon])

  const onDropFromFiles = async (files: FileList) => {
    const importedMons: PKMFile[] = []
    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      const bytes = new Uint8Array(await file.arrayBuffer())
      const [extension] = file.name.split('.').slice(-1)
      try {
        importedMons.push(bytesToPKM(bytes, extension.toUpperCase()))
      } catch (e) {
        console.error(e)
      }
    }
    onDrop(importedMons)
  }

  const handleDrop: React.DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault()
    setIsDraggedOver(false)
    const droppedData = e.dataTransfer.getData('ItemTransfer')

    if (droppedData) {
      const itemId = ItemFromString(droppedData)
      if (itemId && mon && !mon.heldItemIndex) {
        mon.heldItemIndex = itemId
        console.log(`Assigned item "${droppedData}" to Pokémon`)

        removeItemFromBag(droppedData)
        console.log(`Removed item "${droppedData}" from Bag`)

      } else if (itemId && mon?.heldItemIndex) {
        console.log('Pokémon already holds an item!')
      }
    } else if (e.dataTransfer.files[0]) { // dropped data is files
      onDropFromFiles(e.dataTransfer.files)
    } else {
      onDrop(undefined)
    }
    e.nativeEvent.preventDefault()
  }

  const getBackgroundDetails = () => {
    if (disabled) {
      return {
        backgroundBlendMode: 'multiply',
        backgroundColor: '#555',
      }
    }
    return {
      backgroundColor: '#0000',
    }
  }

  useEffect(() => {
    setIsBeingDragged(false)
  }, [mon])

  function getIsShiny(mon: PKMFile) {
    try {
      return mon.isShiny()
    } catch {
      return false
    }
  }

  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        ...styles.button,
        backgroundColor: disabled || isFilteredOut ? '#555' : '#6662',
        borderColor: borderColor ?? (isDraggedOver ? 'red' : undefined),
        zIndex,
      }}
      disabled={disabled}
    >
      {mon ? (
        <PokemonIcon
          dexNumber={mon.dexNum}
          formeNumber={mon.formeNum}
          greyedOut={isFilteredOut || disabled}
          isShiny={getIsShiny(mon)}
          heldItemIndex={mon.heldItemIndex}
          heldItemFormat={mon.format}
          style={{
            width: '100%',
            height: '100%',
            ...getBackgroundDetails(),
            transition: '0.01s, background-color 0s',
            transform: isBeingDragged ? 'translateX(-9999px)' : undefined,
          }}
          draggable
          onDragStart={() => {
            onDragEvent(false)
            setIsBeingDragged(true)
            
            if (mon?.heldItemIndex) {
              setDraggedMon(mon)
            }
          }}
          onDragEnter={() => setIsDraggedOver(true)}
          onDragLeave={() => setIsDraggedOver(false)}
          onDragEnd={(e: { dataTransfer: any; target: any }) => {
            setIsBeingDragged(false)
            setDraggedMon(null)
            if (e.dataTransfer.dropEffect !== 'copy') {
              onDragEvent(true)
            }
          }}
          onDragOver={
            disabled
              ? undefined
              : (e) => {
                  e.preventDefault()
                }
          }
          onDrop={(e) => {
            setIsDraggedOver(false)
            handleDrop(e)
          }}
        />
      ) : (
        <div
          className="pokemon_slot"
          style={{ ...styles.fillContainer, ...getBackgroundDetails() }}
          onDragEnter={() => setIsDraggedOver(true)}
          onDragLeave={() => setIsDraggedOver(false)}
          onDragOver={
            disabled
              ? undefined
              : (e) => {
                  e.preventDefault()
                }
          }
          onDrop={(e) => {
            setIsDraggedOver(false)
            handleDrop(e)
          }}
        />
      )}
    </button>
  )
}

export default BoxCell
