import { ComponentStory, ComponentMeta } from '@storybook/react'
import { GameOverScreen } from './GameOverScreen'

export default {
  title: 'Menu Screens/GameOverScreen',
  component: GameOverScreen,
} as ComponentMeta<typeof GameOverScreen>

export const Index: ComponentStory<typeof GameOverScreen> = (args) => (
  <GameOverScreen onStartGame={() => {}} />
)
