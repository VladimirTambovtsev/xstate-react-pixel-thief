import { ComponentStory, ComponentMeta } from '@storybook/react'
import { GameCompleteScreen } from './GameCompleteScreen'

export default {
  title: 'Menu Screens/GameCompleteScreen',
  component: GameCompleteScreen,
} as ComponentMeta<typeof GameCompleteScreen>

export const Index: ComponentStory<typeof GameCompleteScreen> = (args) => (
  <GameCompleteScreen onStartGame={() => {}} />
)
