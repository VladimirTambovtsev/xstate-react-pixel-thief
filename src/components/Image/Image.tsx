import { FC } from 'react'

interface Props {
  src: string
  size: 'sm' | 'md' | 'lg'
  alt: string
}
export const Image: FC<Props> = ({ src, size, alt }) => {
  return (
    <>
      <img
        src={src}
        alt={alt}
        style={
          size === 'lg'
            ? { width: '64px' }
            : size === 'md'
            ? { width: '48px' }
            : { width: '32px' }
        }
      />
    </>
  )
}
