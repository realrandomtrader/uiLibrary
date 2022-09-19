/* eslint-disable max-lines */
import * as React from 'react'
import { ComponentStory, Meta, Story } from '@storybook/react'


// import { colors } from './__fixtures__/colors'
// import { sizes } from './__fixtures__/sizes'
// import { variants } from './__fixtures__/variants'
// import { Icon } from '../Icon'
// import { Avatar } from '../Avatar'
// import { Letter, Playground as AvatarPlayground } from '../Avatar/Avatar.stories'
// import { Template, TemplateWithVariants } from './Template'
// import { TinyIcon } from '../Icon/Icon.stories'
import Chip, { IChipProps } from '../components/Chip'
import colors from '../components/Chip/__fixtures__/colors'
import Icon from '../components/Icon/Icon'
import { TinyIcon } from './Icon.stories'

// export default {
//   component: Chip,
//   subcomponents: { Icon },
//   title: 'Components/Chip'
// } as Meta

export default{
    title: 'Chip',
    component:Chip,
    argTypes: {
    onClose: { action: 'onClose' }
 },
}

const Template: ComponentStory<typeof Chip> = args => <Chip {...args} />;

const customDeleteIcon = <Icon {...TinyIcon.args} name="filled-action-delete" />

export const Playground : Story<IChipProps> = Template.bind({})
Playground.args = {
  clickable: true,
  color: colors.default,
  disabled: false,
  label: 'Chip component label',
//   size: sizes.medium,
//   variant: variants.default
}

export const Standard : Story<IChipProps> = Template.bind({})
Standard.args = {
  color: colors.primary,
  label: 'Label',
//   size: sizes.medium,
//   variant: variants.default
}

export const Clickable : Story<IChipProps> = Template.bind({})
Clickable.args = {
  ...Standard.args,
  clickable: true
}

export const DefaultVariant : Story<IChipProps> = Template.bind({})
DefaultVariant.args = {
  ...Clickable.args,
//   variant: variants.default
}

export const OutlinedVariant : Story<IChipProps> = Template.bind({})
OutlinedVariant.args = {
  ...Clickable.args,
//   variant: variants.outlined
}

export const Disabled : Story<IChipProps> = Template.bind({})
Disabled.args = {
  ...Standard.args,
  disabled: true
}

export const WithoutDeleteIcon : Story<IChipProps> = Template.bind({})
WithoutDeleteIcon.args = {
  ...Standard.args,
  onDelete: null
}

export const WithCustomDeleteIcon : Story<IChipProps> = Template.bind({})
WithCustomDeleteIcon.args = {
  ...Standard.args,
  deleteIcon: customDeleteIcon
}

export const Primary : Story<IChipProps> = Template.bind({})
Primary.args = {
  ...Clickable.args,
  color: colors.primary
}

export const Secondary : Story<IChipProps> = Template.bind({})
Secondary.args = {
  ...Clickable.args,
  color: colors.secondary
}

export const Default : Story<IChipProps> = Template.bind({})
Default.args = {
  ...Clickable.args,
  color: colors.default
}

export const Small : Story<IChipProps> = Template.bind({})
Small.args = {
  ...Clickable.args,
//   size: sizes.small
}

export const Medium : Story<IChipProps> = Template.bind({})
Medium.args = {
  ...Clickable.args,
//   size: sizes.medium
}

// export const WithAvatar : Story<IChipProps> = TemplateWithVariants.bind({})
// WithAvatar.args = {
//   ...Standard.args,
//   avatar: <Avatar {...AvatarPlayground.args} />
// }

// export const WithLetterAvatar : Story<IChipProps> = TemplateWithVariants.bind({})
// WithLetterAvatar.args = {
//   ...Standard.args,
//   avatar: <Avatar {...Letter.args} />
// }

export const chiptest = Template.bind({});

// IconTemplate.args={
//     variant:"standard",
//     severity:"error",
//     isOpen:true,

// }
chiptest.args = Playground.args;

// export const WithTinyIcon : Story<IChipProps> = TemplateWithVariants.bind({})
// WithTinyIcon.args = {
//   ...Standard.args,
//   icon: <Icon {...TinyIcon.args} name="filled-default-mockup" />
// }
