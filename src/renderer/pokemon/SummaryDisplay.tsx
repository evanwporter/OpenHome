import { Chip, Grid } from '@mui/joy'
import { getDisplayID } from 'pokemon-files'
import { AbilityToString } from 'pokemon-resources'
import { PokemonData } from 'pokemon-species-data'
import { useMemo, useState } from 'react'
import { getLevelGen12, getLevelGen3Onward } from 'src/util/StatCalc'
import { PKMInterface } from '../../types/interfaces'
import { getTypes } from '../../types/pkm/util'
import { Styles } from '../../types/types'
import PokemonIcon from '../components/PokemonIcon'
import TypeIcon from '../components/TypeIcon'
import { getPublicImageURL } from '../images/images'
import { BallsList, getItemIconPath } from '../images/items'
import { getPokemonSpritePath } from '../images/pokemon'
import { getTypeColor } from '../util/PokemonSprite'
import AttributeRow from './AttributeRow'
import AttributeTag from './AttributeTag'

const styles = {
  column: {
    height: 200,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    maxWidth: 100,
    maxHeight: 100,
    transform: 'scale(2)',
    imageRendering: 'pixelated',
    objectFit: 'contain',
  },
  attributesList: { textAlign: 'left', marginTop: 10 },
  language: { padding: '5px 10px 5px 10px', marginLeft: 'auto' },
  nicknameRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 20,
    marginBottom: 8,
  },
} as Styles

const SummaryDisplay = (props: { mon: PKMInterface }) => {
  const { mon } = props
  const [imageError, setImageError] = useState(false)

  const itemAltText = useMemo(() => {
    const monData = PokemonData[mon.dexNum]?.formes[mon.formeNum]
    if (!monData) return 'pokemon sprite'
    return `${monData.formeName}${mon.isShiny() ? '-shiny' : ''} sprite`
  }, [mon])

  return (
    <Grid container spacing={1} width="100%" paddingLeft={1}>
      <Grid xs={6}>
        <div style={styles.column}>
          {imageError ? (
            <PokemonIcon
              dexNumber={mon.dexNum}
              formeNumber={mon.formeNum}
              style={{ width: '90%', height: 0, paddingBottom: '90%' }}
            />
          ) : (
            <img
              draggable={false}
              alt={itemAltText}
              style={styles.image}
              src={getPublicImageURL(getPokemonSpritePath(mon))}
              onError={() => setImageError(true)}
            />
          )}
        </div>
        <div style={styles.nicknameRow}>
          {mon.ball ? (
            <img
              draggable={false}
              alt="poke ball type"
              style={{ width: 24, height: 24 }}
              src={BallsList[mon.ball]}
            />
          ) : (
            <div />
          )}
          <div style={{ fontWeight: 'bold' }}>{mon.nickname}</div>
          {mon.languageIndex !== undefined && <Chip style={styles.language}>{mon.language}</Chip>}
        </div>
        <AttributeRow label="Item" justifyEnd>
          {mon.heldItemName !== 'None' && (
            <img
              alt="item icon"
              src={getPublicImageURL(getItemIconPath(mon.heldItemIndex, mon.format))}
              style={{ width: 24, height: 24, marginRight: 5 }}
            />
          )}
          <div>{mon.heldItemName}</div>
        </AttributeRow>
        <div style={styles.flexRowWrap}>
          {mon.isShiny() && (
            <AttributeTag
              icon={getPublicImageURL('icons/Shiny.png')}
              color="white"
              backgroundColor="#cc0000"
            />
          )}
          {mon.canGigantamax && (
            <AttributeTag
              icon={getPublicImageURL('icons/GMax.png')}
              color="white"
              backgroundColor="#e60040"
            />
          )}
          {mon.isAlpha && (
            <AttributeTag
              icon={getPublicImageURL('icons/Alpha.png')}
              color="white"
              backgroundColor="#f2352d"
            />
          )}
          {mon.isNoble && <AttributeTag label="NOBLE" backgroundColor="#cccc00" color="white" />}
          {'isShadow' in mon && (mon.isShadow as boolean) && (
            <AttributeTag label="SHADOW" backgroundColor={getTypeColor('shadow')} color="white" />
          )}
          {mon.isNsPokemon && (
            <AttributeTag label="N's Pokémon" backgroundColor="green" color="white" />
          )}
        </div>
      </Grid>
      <Grid xs={6} style={styles.attributesList}>
        <AttributeRow label="Nickname" value={mon.nickname} />
        <AttributeRow
          label="Species"
          value={`${PokemonData[mon.dexNum]?.formes[mon.formeNum]?.formeName} ${
            mon.gender !== undefined ? ['♂', '♀', ''][mon.gender] : ''
          }`}
        />
        <AttributeRow label="Dex No." value={`${mon.dexNum}`} />
        <AttributeRow label="Type">
          {getTypes(mon)?.map((type) => <TypeIcon type={type} key={`${type}_type_icon`} />)}
        </AttributeRow>
        <AttributeRow label="OT" value={`${mon.trainerName} ${mon.trainerGender ? '♀' : '♂'}`} />
        <AttributeRow label="Trainer ID" value={getDisplayID(mon as any)} />
        {mon.abilityIndex !== undefined && (
          <AttributeRow
            label="Ability"
            value={`${AbilityToString(mon.abilityIndex)} (${
              mon.abilityNum === 4 ? 'HA' : mon.abilityNum
            })`}
          />
        )}
        <AttributeRow label="Level">
          {['PK1', 'PK2'].includes(mon.format)
            ? getLevelGen12(mon.dexNum, mon.exp)
            : getLevelGen3Onward(mon.dexNum, mon.exp)}
        </AttributeRow>
        <AttributeRow label="EXP">{mon.exp}</AttributeRow>
      </Grid>
    </Grid>
  )
}
export default SummaryDisplay
