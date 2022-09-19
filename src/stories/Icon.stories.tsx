// import { Story } from '@storybook/react'
// import { Icon, IIconProps } from './Icon'
// import { argTypes } from './Icon.argTypes'
// import { Template, TemplateWithMultipleSizes } from './Template'

// import SelectInput from "./selectInput";
import { ComponentStory, ComponentMeta, Story } from '@storybook/react';
import Icon, { IIconProps } from "../components/Icon";
import { iconNames } from '../components/Icon/iconGroup';


export default{
    title: 'Icon',
    component:Icon,
    argTypes: {
    onClose: { action: 'onClose' }
 },
}

// export default {
//   argTypes,
//   component: Icon,
//   title: 'Components/Icon'
// }
const Template: ComponentStory<typeof Icon> = args => <Icon {...args} />;

export const Playground : Story<IIconProps> = Template.bind({})

export const SmallIcon : Story<IIconProps> = Template.bind({})
SmallIcon.args = {
//   size: '24'
}

export const TinyIcon: Story<IIconProps> = Template.bind({})
TinyIcon.args = {
//   size: '32'
}

export const MicroIcon: Story<IIconProps> = Template.bind({})
MicroIcon.args = {
//   size: '50'
}

export const IconTemplate = Template.bind({});

// IconTemplate.args={
//     variant:"standard",
//     severity:"error",
//     isOpen:true,

// }

IconTemplate.args = Playground.args;
// export const Sizes : Story<IIconProps> = TemplateWithMultipleSizes.bind({})
// Sizes.args = Playground.args