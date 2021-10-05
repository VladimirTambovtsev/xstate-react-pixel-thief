import { flatten } from 'lodash'
import { FC } from 'react'
import { gridCoordsList } from '../../util/gridCoordsList'
import s from './Grid.module.scss'

interface Props {
  rowsCount?: number
  columnsCount?: number
  chlidren?: React.ReactNode
}

export const Grid: FC<Props> = ({ children }) => {
  return (
    <>
      <div className={s.layout}>
        {gridCoordsList.map(([x, y]) => (
          <div key={`${x}${y}`} className={s.gridSquare}>
            {children}
          </div>
        ))}
      </div>
    </>
  )
}
