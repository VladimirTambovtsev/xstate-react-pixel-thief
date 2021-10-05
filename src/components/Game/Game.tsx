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

  if (state.matches('playing'))
    return (
      <>
        Playing state
        <button onClick={() => send('PLAYER_DIED')}>Game over</button>
        <button onClick={() => send('PLAYER_GOT_TREASURE')}>
          Game got treasure
        </button>
      </>
    )

  if (state.matches('gameOver'))
    return <GameOverScreen onStartGame={() => send('RESTART_BUTTON_CLICKED')} />

  if (state.matches('gameComplete'))
    return (
      <GameCompleteScreen onStartGame={() => send('RESTART_BUTTON_CLICKED')} />
    )

  throw Error(`Uknown game state: ${state.value}`)
}
