import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}
export const MenuScreen: FC<Props> = ({ children }) => {
  return (
    <>
      <div>{children}</div>
    </>
  )
}
