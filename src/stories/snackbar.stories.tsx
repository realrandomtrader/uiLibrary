import SnackbarComponent from "./snackbar";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default{
    title: 'Snackbar',
    component:SnackbarComponent
}

const Template: ComponentStory<typeof SnackbarComponent> = args => <SnackbarComponent {...args} />;

export const SnackbarTemplate = Template.bind({});

SnackbarTemplate.args={
    variant:"standard",
    severity:"error"
}