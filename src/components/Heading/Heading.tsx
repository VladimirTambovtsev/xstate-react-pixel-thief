import { FC } from 'react'

interface Props {
  text: string
}
export const Heading: FC<Props> = ({ text }) => {
  return (
    <>
      <h1>{text}</h1>
    </>
  )
}
