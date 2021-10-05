import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Grid } from './Grid'

export default {
  title: 'Grid',
  component: Grid,
} as ComponentMeta<typeof Grid>

export const Index: ComponentStory<typeof Grid> = (args) => (
  <Grid rowsCount={4} columnsCount={12} chlidren={<div>Children</div>} />
)
