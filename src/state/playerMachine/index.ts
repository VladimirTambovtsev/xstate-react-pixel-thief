import { createMachine } from 'xstate'
import { assign, choose, sendParent } from 'xstate/lib/actions'
import { PLAYER_STARTING_COORDS, PLAYER_STARTING_HEALTH } from '../../constants'
import { getTargetCoords } from '../../util/getTargetCoords'
import { isCoordsOnGrid } from '../../util/isCoordsOnGrid'
import { PlayerMovedType } from '../game/types'
import {
  ArrowButtonClickedType,
  PlayerContextType,
  PlayerEventType,
  PlayerStateType,
} from './types'

export const playerMachine = createMachine<
  PlayerContextType,
  PlayerEventType,
  PlayerStateType
>(
  {
    context: {
      coords: PLAYER_STARTING_COORDS,
      health: PLAYER_STARTING_HEALTH,
    },
    id: `player`,
    initial: `alive`,
    states: {
      alive: {
        on: {
          ARROW_BUTTON_CLICKED: {
            actions: `onArrowButtonClick`,
          },
          RESET_PLAYER_COORDS: {
            actions: `resetCoords`,
          },
          ATTACK_PLAYER: {
            actions: `reduceHealth`,
            target: `determining`,
          },
        },
      },
      dead: {},
      determining: {
        always: [
          {
            cond: `isHealth0`,
            target: `dead`,
            actions: `broadcastPlayerDied`,
          },
          {
            target: `alive`,
          },
        ],
      },
    },
  },
  {
    actions: {
      onArrowButtonClick: choose([
        {
          cond: `isSquareAvailable`,
          actions: [`move`, `broadcastPlayerMoved`],
        },
      ]),
      resetCoords: assign<PlayerContextType>(() => ({
        coords: PLAYER_STARTING_COORDS,
      })) as any,
      broadcastPlayerMoved: sendParent((context) => {
        const { coords } = context
        const event: PlayerMovedType = {
          type: 'PLAYER_MOVED',
          coords,
        }

        return event
      }),
      broadcastPlayerDied: sendParent('PLAYER_DIED'),
      move: assign<PlayerContextType, ArrowButtonClickedType>(
        (context, event) => {
          const { coords } = context
          const { direction } = event
          const targetCoords = getTargetCoords({ coords, direction })

          return {
            coords: targetCoords,
          }
        }
      ) as any,
      reduceHealth: assign<PlayerContextType>((context) => ({
        health: context.health - 1,
      })) as any,
    },
    guards: {
      isSquareAvailable: (
        context: PlayerContextType,
        event: PlayerEventType
      ) => {
        if (event.type === 'ARROW_BUTTON_CLICKED') {
          const { coords } = context
          const { direction } = event
          const targetCoords = getTargetCoords({ coords, direction })

          return isCoordsOnGrid(targetCoords)
        }

        return false
      },
      isHealth0: (context: PlayerContextType) => {
        const { health } = context

        return health === 0
      },
    },
  }
)
