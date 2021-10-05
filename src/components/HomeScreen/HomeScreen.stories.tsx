import { ComponentStory, ComponentMeta } from '@storybook/react'
import { HomeScreen } from './HomeScreen'

export default {
  title: 'Menu Screens/HomeScreen',
  component: HomeScreen,
} as ComponentMeta<typeof HomeScreen>

export const Index: ComponentStory<typeof HomeScreen> = (args) => (
  <HomeScreen onStartGame={() => {}} />
)
