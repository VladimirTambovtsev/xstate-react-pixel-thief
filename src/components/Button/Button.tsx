import { FC } from 'react'
import styles from './Button.module.scss'

interface Props {
  label: string
}

export const Button: FC<Props> = ({ label }) => {
  return (
    <button type="button" className={styles.button}>
      {label}
    </button>
  )
}
