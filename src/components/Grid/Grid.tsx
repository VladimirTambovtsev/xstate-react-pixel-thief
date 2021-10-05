import { flatten } from 'lodash'
import { FC } from 'react'
import s from './Grid.module.scss'

const NUMBER_OF_GRID_COLUMNS = 4
const NUMBER_OF_GRID_ROWS = 4

interface Props {
  rowsCount: number
  columnsCount: number
  chlidren: React.ReactNode
}

export const Grid: FC<Props> = ({
  rowsCount = NUMBER_OF_GRID_ROWS,
  columnsCount = NUMBER_OF_GRID_COLUMNS,
  children,
}) => {
  const row = (rowLevel: number) =>
    Array(columnsCount)
      .fill(undefined)
      .map((_, i) => [i, rowLevel])

  const gridCoordsList = flatten(
    Array(rowsCount)
      .fill(undefined)
      .map((_, i) => row(i))
  )

  return (
    <>
      <div className={s.layout}>
        {gridCoordsList.map(([x, y]) => (
          <div
            key={`${x}${y}`}
            className={s.grid_square}
            style={{ top: `${64 * y}px`, left: `${64 * x}px` }}
          >
            {children}
          </div>
        ))}
      </div>
    </>
  )
}
