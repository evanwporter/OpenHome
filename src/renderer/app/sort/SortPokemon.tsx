import { Autocomplete, Card, Chip, Modal, ModalDialog, ModalOverflow, Stack } from '@mui/joy'
import dayjs from 'dayjs'
import { GameOfOrigin } from 'pokemon-resources'
import { useContext, useMemo, useState } from 'react'
import { MdAdd } from 'react-icons/md'
import PokemonDetailsPanel from 'src/renderer/pokemon/PokemonDetailsPanel'
import BoxCell from 'src/renderer/saves/boxes/BoxCell'
import SavesModal from 'src/renderer/saves/SavesModal'
import { PKMFile } from 'src/types/pkm/util'
import { GameColors } from 'src/types/SAVTypes/util'
import { filterUndefined } from 'src/util/Sort'
import { LookupContext } from '../../state/lookup'
import { OpenSavesContext } from '../../state/openSaves'

function getSortFunction(
  sortStr: string | undefined
): (
  a: { mon: PKMFile; saveGame: GameOfOrigin },
  b: { mon: PKMFile; saveGame: GameOfOrigin }
) => number {
  switch (sortStr?.toLowerCase()) {
    case 'nickname':
      return (a, b) => a.mon.nickname.localeCompare(b.mon.nickname)
    case 'level':
      return (a, b) => b.mon.getLevel() - a.mon.getLevel()
    case 'species':
      return (a, b) => a.mon.dexNum - b.mon.dexNum
    case 'met_date':
      return (a, b) => {
        const aDate =
          'metDate' in a.mon && a.mon.metDate
            ? dayjs(new Date(a.mon.metDate.year, a.mon.metDate.month, a.mon.metDate.day)).unix()
            : 0
        const bDate =
          'metDate' in b.mon && b.mon.metDate
            ? dayjs(new Date(b.mon.metDate.year, b.mon.metDate.month, b.mon.metDate.day)).unix()
            : 0
        return bDate - aDate
      }
    case 'ribbons':
      return (a, b) => {
        const aCount = 'ribbons' in a.mon ? a.mon.ribbons.length : 0
        const bCount = 'ribbons' in b.mon ? b.mon.ribbons.length : 0
        return bCount - aCount
      }
    default:
      return () => 0
  }
}

export default function SortPokemon() {
  const [{ homeMons }] = useContext(LookupContext)
  const [{ homeData }, , openSaves] = useContext(OpenSavesContext)
  const [openSaveDialog, setOpenSaveDialog] = useState(false)
  const [selectedMon, setSelectedMon] = useState<PKMFile>()
  const [tab, setTab] = useState('summary')
  const [sort, setSort] = useState('')

  const allMonsWithSaves = useMemo(() => {
    const all: { mon: PKMFile; saveGame: GameOfOrigin }[] = openSaves
      .flatMap((save) =>
        save.boxes.flatMap((box) =>
          box.pokemon.flatMap((mon) => (mon ? { mon, saveGame: save.origin } : undefined))
        )
      )
      .concat(
        Object.values(homeData?.boxes.flatMap((box) => box.pokemon) ?? {}).map((mon) =>
          mon ? { mon, saveGame: 0 } : undefined
        )
      )
      .filter(filterUndefined)

    return all
  }, [openSaves, homeData?.boxes])

  if (!homeMons) return <div />
  return (
    <Stack direction="row" flexWrap="wrap" padding={1} overflow="hidden" height="calc(100% - 16px)">
      <Card style={{ height: 'calc(100% - 16px)' }}>
        <Stack style={{ width: 120, flex: 0 }}>
          <Chip variant="solid">OpenHome</Chip>
          {openSaves.map((save) => (
            <Chip key={save.tid} variant="solid">
              {save.name} ({save.tid})
            </Chip>
          ))}
          <Chip onClick={() => setOpenSaveDialog(true)}>
            <MdAdd />
          </Chip>
        </Stack>
      </Card>
      <Stack style={{ flex: 1, height: '100%' }}>
        <Card>
          <Autocomplete
            options={['nickname', 'level', 'species', 'ribbons', 'met_date']}
            onChange={(_, value) => setSort(value ?? '')}
            placeholder="Sort"
          />
        </Card>
        <Card style={{ overflowY: 'auto' }}>
          <Stack direction="row" flexWrap="wrap" justifyContent="center">
            {Object.values(allMonsWithSaves)
              .sort(getSortFunction(sort))
              .map((monWithSave, i) => (
                <div style={{ width: 36, height: 36, margin: 4 }} key={`mon_${i}`}>
                  <BoxCell
                    onClick={() => setSelectedMon(monWithSave.mon)}
                    onDragEvent={() => {}}
                    onDrop={() => {}}
                    key=""
                    mon={monWithSave.mon}
                    disabled={false}
                    zIndex={2}
                    borderColor={
                      monWithSave.saveGame ? GameColors[monWithSave.saveGame] : GameColors[0]
                    }
                  />
                </div>
              ))}
          </Stack>
        </Card>
      </Stack>
      <Modal open={openSaveDialog} onClose={() => setOpenSaveDialog(false)}>
        <ModalDialog sx={{ minHeight: 400, height: 600, width: 1000 }}>
          <SavesModal
            onClose={() => {
              setOpenSaveDialog(false)
            }}
          />
        </ModalDialog>
      </Modal>
      <Modal open={!!selectedMon} onClose={() => setSelectedMon(undefined)}>
        <ModalOverflow>
          <ModalDialog
            style={{
              width: 800,
              maxWidth: '80%',
              padding: 0,
              maxHeight: '95%',
              overflow: 'hidden',
            }}
          >
            {selectedMon && <PokemonDetailsPanel mon={selectedMon} tab={tab} setTab={setTab} />}
          </ModalDialog>
        </ModalOverflow>
      </Modal>
    </Stack>
  )
}
