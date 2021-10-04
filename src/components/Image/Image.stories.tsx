import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Image } from './Image'
import thiefGif from '../../assets/images/thief.gif'

export default {
  title: 'Image',
  component: Image,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Image>

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />

export const Large = Template.bind({})
Large.args = {
  size: 'lg',
  src: thiefGif,
  alt: 'Gif',
}

export const Medium = Template.bind({})
Medium.args = {
  size: 'md',
  src: thiefGif,
  alt: 'Gif',
}

export const Small = Template.bind({})
Small.args = {
  size: 'sm',
  src: thiefGif,
  alt: 'Gif',
}
