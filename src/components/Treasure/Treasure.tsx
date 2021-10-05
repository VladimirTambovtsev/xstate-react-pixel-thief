import { Image } from '../Image/Image'
import { coordsToPosition } from '../../util/coordsToPosition'
import { TREASURE_COORDS } from '../../constants'
import treasurePng from '../../assets/images/treasure.png'

export const Treasure = () => {
  const position = coordsToPosition(TREASURE_COORDS)

  return (
    <div style={{ position: 'absolute', top: position[1], left: position[0] }}>
      <Image src={treasurePng} alt="Treasure chest" size="lg" />
    </div>
  )
}
