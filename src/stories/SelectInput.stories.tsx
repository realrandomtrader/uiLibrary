import SelectInput from "./selectInput";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default{
    title: 'SelectInput',
    component:SelectInput,
    argTypes: {handleClick: { action: 'handleClose' },
    onClose: { action: 'onClose' }
 },
}

const Template: ComponentStory<typeof SelectInput> = args => <SelectInput {...args} />;

export const SelectInputType = Template.bind({});

SelectInputType.args = {
    menuItems: [{value:"m", label:"M"},{value:"f", label:"F"},{value:"o", label:"O"}],
    defaultValue:"m"
}