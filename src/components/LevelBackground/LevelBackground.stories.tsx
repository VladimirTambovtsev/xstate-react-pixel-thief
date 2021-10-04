import { ComponentStory, ComponentMeta } from '@storybook/react'
import { LevelBackground } from './LevelBackground'
import levelBackgroundImgPng from '../../assets/images/level1Background.png'

export default {
  title: 'LevelBackground',
  component: LevelBackground,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LevelBackground>

export const Index: ComponentStory<typeof LevelBackground> = (args) => (
  <LevelBackground src={levelBackgroundImgPng} alt="A dungeon room" />
)
