import { useMachine } from '@xstate/react'
import { gameMachine } from '../../state/game'
import { GameCompleteScreen } from '../GameCompleteScreen/GameCompleteScreen'
import { GameOverScreen } from '../GameOverScreen/GameOverScreen'
import { HomeScreen } from '../HomeScreen/HomeScreen'

export const Game = () => {
  const [state, send] = useMachine(gameMachine)

  console.log('state: ', state)

  if (state.matches('home'))
    return <HomeScreen onStartGame={() => send('START_BUTTON_CLICKED')} />

  if (state.matches('playing')) {
    if (state.matches('playing.level1')) {
      return (
        <>
          Player level1{' '}
          <button onClick={() => send('PLAYER_WALKED_THROUGH_DOOR')}>
            Player won room
          </button>
        </>
      )
    }
    if (state.matches('playing.level2')) {
      return (
        <>
          Player level2{' '}
          <button onClick={() => send('PLAYER_WALKED_THROUGH_DOOR')}>
            Player won room
          </button>
          <button onClick={() => send('PLAYER_DIED')}>Player Died</button>
        </>
      )
    }
    if (state.matches('playing.level3')) {
      return (
        <>
          Player level3{' '}
          <button onClick={() => send('PLAYER_GOT_TREASURE')}>
            Player got treasure
          </button>
        </>
      )
    }
  }

  if (state.matches('gameOver'))
    return <GameOverScreen onStartGame={() => send('RESTART_BUTTON_CLICKED')} />

  if (state.matches('gameComplete'))
    return (
      <GameCompleteScreen onStartGame={() => send('RESTART_BUTTON_CLICKED')} />
    )

  throw Error(`Uknown game state: ${state.value}`)
}
