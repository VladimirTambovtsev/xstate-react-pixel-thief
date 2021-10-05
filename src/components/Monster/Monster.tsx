import { Image } from '../Image/Image'
import monsterGif from '../../assets/images/monster.gif'
import { useActor } from '@xstate/react'
import { coordsToPosition } from '../../util/coordsToPosition'
import { MonsterActorType } from '../../state/monsterMachine/types'

interface PropsType {
  actor: MonsterActorType
}

export const Monster = ({ actor }: PropsType) => {
  // At time of writing, there is a bug with useActor type
  // @ts-ignore
  const [state] = useActor(actor)
  const { coords } = state.context
  const position = coordsToPosition(coords)

  return (
    <div style={{ position: 'absolute', top: position[1], left: position[0] }}>
      <Image src={monsterGif} alt="treasure" size="lg" />
    </div>
  )
}
