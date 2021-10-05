import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MenuScreen } from './MenuScreen'

export default {
  title: 'Menu Screens/MenuScreen',
  component: MenuScreen,
} as ComponentMeta<typeof MenuScreen>

const Template: ComponentStory<typeof MenuScreen> = (args) => (
  <MenuScreen>
    <div>Child 1</div>
    <div>Child 2</div>
  </MenuScreen>
)

export const Primary = Template.bind({})
