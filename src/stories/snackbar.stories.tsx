import SnackbarComponent from "./snackbar";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default{
    title: 'Snackbar',
    component:SnackbarComponent,
    argTypes: {handleClose: { argaction: 'handleClose' } },
}

const Template: ComponentStory<typeof SnackbarComponent> = args => <SnackbarComponent {...args} />;

export const SnackbarTemplate = Template.bind({});

SnackbarTemplate.args={
    variant:"standard",
    severity:"error",
    isOpen:true,

}