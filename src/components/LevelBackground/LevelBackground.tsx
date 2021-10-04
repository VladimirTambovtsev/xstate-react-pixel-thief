import { FC } from 'react'
import s from './LevelBackground.module.scss'

interface Props {
  src: string
  alt: string
}
export const LevelBackground: FC<Props> = ({ src, alt }) => {
  return (
    <>
      <img className={s.background} src={src} alt={alt} />
    </>
  )
}
