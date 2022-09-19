/*
 * Copyright 2020 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { ComponentStory, Meta, Story } from '@storybook/react'



import DateRangePicker from '../components/DatePicker';
import { DaterangepickerProps } from '../components/DatePicker/typings';



export default{
    title: 'Inputs/DateRangePicker',
    component:DateRangePicker,
    argTypes: {
 },
}





const Template: ComponentStory<typeof DateRangePicker> = args => <DateRangePicker {...args} />;


// export const chiptest = Template.bind({});

// chiptest.args = chiptest.args;

export const Multiple  : Story<DaterangepickerProps> = Template.bind({})

Multiple.args = {
}



// export const Playground : Story<DateSelectorProps> = Template.bind({})
// Playground.args = {
//     name: 'startDate'
// }