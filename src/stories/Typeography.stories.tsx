import TypoGraphy from "./typography";
import { ComponentStory, ComponentMeta } from '@storybook/react';
export default{
    title:"Typography",
    component:TypoGraphy
}
const Template: ComponentStory<typeof TypoGraphy> = args => <TypoGraphy {...args} />;

export const TypographyMia = Template.bind({});

TypographyMia.args={
    variant:"h2",
    color: "blue",
    text: "This is Typography"
}