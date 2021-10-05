import { Heading } from '../Heading/Heading'
import { MenuScreen } from '../MenuScreen/MenuScreen'
import { Image } from '../Image/Image'
import thiefGif from '../../assets/images/thief.gif'
import { FC } from 'react'

interface Props {
  onStartGame: () => void
}

export const HomeScreen: FC<Props> = ({ onStartGame }) => {
  return (
    <>
      <MenuScreen>
        <Heading text="Pixel Thief" />
        <Image src={thiefGif} alt="thief" size="lg" />
        <button className="button" onClick={() => onStartGame()}>
          Start Game
        </button>
      </MenuScreen>
    </>
  )
}
