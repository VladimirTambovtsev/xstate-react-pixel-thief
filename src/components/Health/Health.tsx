import { Image } from '../Image/Image'
import s from './Health.module.scss'
import heartPng from '../../assets/images/heart.png'
import { FC } from 'react'

interface Props {
  healthCount: number
}
export const Health: FC<Props> = ({ healthCount }) => {
  return (
    <>
      <div className={s.layout}>
        {Array(healthCount)
          .fill(undefined)
          .map((_, i) => (
            <Image key={i} src={heartPng} size="sm" alt="Player Heart" />
          ))}
      </div>
    </>
  )
}
