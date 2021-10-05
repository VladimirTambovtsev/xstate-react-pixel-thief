import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Grid } from './Grid'

export default {
  title: 'Grid',
  component: Grid,
} as ComponentMeta<typeof Grid>

const Template: ComponentStory<typeof Grid> = (args) => <Grid {...args} />

export const Standart = Template.bind({})
Standart.args = {
  chlidren: <div>Children</div>,
}

export const FourByTwelve = Template.bind({})
FourByTwelve.args = {
  rowsCount: 4,
  columnsCount: 12,
  chlidren: <div>Children</div>,
}

export const TwelveByFour = Template.bind({})
TwelveByFour.args = {
  rowsCount: 12,
  columnsCount: 4,
  chlidren: <div>Children</div>,
}
