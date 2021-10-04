import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Health } from './Health'

export default {
  title: 'Health',
  component: Health,
} as ComponentMeta<typeof Health>

export const Index: ComponentStory<typeof Health> = (args) => (
  <Health healthCount={3} />
)
