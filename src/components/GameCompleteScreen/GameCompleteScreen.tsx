import { Heading } from '../Heading/Heading'
import { MenuScreen } from '../MenuScreen/MenuScreen'
import { Image } from '../Image/Image'
import treasurePng from '../../assets/images/treasure.png'
import { FC } from 'react'

interface Props {
  onStartGame: () => void
}

export const GameCompleteScreen: FC<Props> = ({ onStartGame }) => {
  return (
    <>
      <MenuScreen>
        <Heading text="Quest Complete" />
        <Image src={treasurePng} alt="skull" size="lg" />
        <button className="button" onClick={() => onStartGame()}>
          Go Home
        </button>
      </MenuScreen>
    </>
  )
}
