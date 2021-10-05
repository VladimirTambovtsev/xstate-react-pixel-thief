import { useActor } from '@xstate/react'
import s from './Player.module.scss'
import thiefGif from '../../assets/images/thief.gif'
import {
  ArrowButtonClickedType,
  // PlayerActorType,
} from '../../state/playerMachine/types'
import { Image } from '../Image/Image'
import { coordsToPosition } from '../../util/coordsToPosition'
import { usePlayerControls } from '../../hooks/usePlayerControls'
import { DirectionType } from '../../types'
import { Health } from '../Health/Health'

// const HealthLayout = styled.div`
//     position: absolute;
//     top: -${space(30)};
//     left: -${space(2)};

//     display: flex;
// `;

// const ImageLayout = styled.div`
//     position: absolute;

//     display: flex;
// `;

interface PropsType {
  actor: any
}

export const Player = ({ actor }: PropsType) => {
  const [state, send] = useActor(actor)
  const { coords, health } = (state as any).context
  const position = coordsToPosition(coords)

  usePlayerControls({
    handleArrowUp: () =>
      send({
        type: 'ARROW_BUTTON_CLICKED',
        direction: DirectionType.Up,
      } as ArrowButtonClickedType),
    handleArrowDown: () =>
      send({
        type: 'ARROW_BUTTON_CLICKED',
        direction: DirectionType.Down,
      } as ArrowButtonClickedType),
    handleArrowLeft: () =>
      send({
        type: 'ARROW_BUTTON_CLICKED',
        direction: DirectionType.Left,
      } as ArrowButtonClickedType),
    handleArrowRight: () =>
      send({
        type: 'ARROW_BUTTON_CLICKED',
        direction: DirectionType.Right,
      } as ArrowButtonClickedType),
  })

  return (
    <>
      <div className={s.healthLayout}>
        <Health healthCount={health} />
      </div>
      <div
        className={s.imageLayout}
        style={{ top: position[1], left: position[0] }}
      >
        <Image src={thiefGif} alt="thief" size={'lg'} />
      </div>
    </>
  )
}
