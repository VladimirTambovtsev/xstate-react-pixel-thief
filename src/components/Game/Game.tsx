import { useEffect } from 'react'
import { gameMachine } from '../../state/game'
import { useMachine } from '@xstate/react'
import { HomeScreen } from '../HomeScreen/HomeScreen'
import { GameOverScreen } from '../GameOverScreen/GameOverScreen'
import { GameCompleteScreen } from '../GameCompleteScreen/GameCompleteScreen'
import { GameEventType } from '../../state/game/types'
import level1BackgroundPng from '../../assets/images/level1Background.png'
import level2BackgroundPng from '../../assets/images/level2Background.png'
import level3BackgroundPng from '../../assets/images/level3Background.png'
import { LevelBackground } from '../LevelBackground/LevelBackground'
import { Grid } from '../Grid/Grid'
import { Player } from '../Player/Player'
import { MonsterActorType } from '../../state/monsterMachine/types'
import { Treasure } from '../Treasure/Treasure'
import { Monster } from '../Monster/Monster'

interface PropsType {
  fastForwardEvents?: GameEventType[]
}

export const Game = ({ fastForwardEvents }: PropsType) => {
  const [state, send] = useMachine(gameMachine)
  const { monsterActor, playerActor } = state.children

  console.log('state: ', state)

  useEffect(() => {
    // note: batching events doesn't work at time of writing
    if (fastForwardEvents) {
      fastForwardEvents.forEach((event: GameEventType) => {
        send(event)
      })
    }
  }, [fastForwardEvents, send])

  const Screen = () => {
    console.log('screen ')
    if (state.matches('home')) {
      console.log('home ')
      return <HomeScreen onStartGame={() => send('START_BUTTON_CLICKED')} />
    }

    if (state.matches('playing')) {
      if (state.matches('playing.level1')) {
        return (
          <>
            <LevelBackground src={level1BackgroundPng} alt="Dungeon room" />
            <Grid>{playerActor && <Player actor={playerActor} />}</Grid>
          </>
        )
      }

      if (state.matches('playing.level2')) {
        return (
          <>
            <LevelBackground src={level2BackgroundPng} alt="Dungeon room" />
            <Grid>
              {playerActor && <Player actor={playerActor} />}
              {monsterActor && (
                <Monster actor={monsterActor as MonsterActorType} />
              )}
            </Grid>
          </>
        )
      }

      if (state.matches('playing.level3')) {
        return (
          <>
            <LevelBackground src={level3BackgroundPng} alt="Dungeon room" />
            <Grid>
              {playerActor && <Player actor={playerActor} />}
              <Treasure />
            </Grid>
          </>
        )
      }
    }

    if (state.matches('gameOver')) {
      return (
        <GameOverScreen onStartGame={() => send('RESTART_BUTTON_CLICKED')} />
      )
    }

    if (state.matches('gameComplete')) {
      return (
        <GameCompleteScreen onStartGame={() => send('HOME_BUTTON_CLICKED')} />
      )
    }

    throw Error(`Unknown game state: ${state.value}`)
  }

  console.log('state: ', state)

  return <Screen />
  // return (
  //   <ScreenTransition key={JSON.stringify(state.value)}>
  //     <Screen />
  //   </ScreenTransition>
  // )
}
