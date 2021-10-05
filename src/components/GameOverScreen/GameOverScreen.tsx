import { Heading } from '../Heading/Heading'
import { MenuScreen } from '../MenuScreen/MenuScreen'
import { Image } from '../Image/Image'
import skullPng from '../../assets/images/skull.png'
import { FC } from 'react'

interface Props {
  onStartGame: () => void
}

export const GameOverScreen: FC<Props> = ({ onStartGame }) => {
  return (
    <>
      <MenuScreen>
        <Heading text="Game Over" />
        <Image src={skullPng} alt="skull" size="lg" />
        <button className="button" onClick={() => onStartGame()}>
          Start Game
        </button>
      </MenuScreen>
    </>
  )
}
