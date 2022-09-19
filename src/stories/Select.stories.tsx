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


import React from 'react';
import colors from '../components/Chip/__fixtures__/colors';
import { SelectComponent as Select, SelectProps } from '../components/Select/Select';

// export default {
//   title: 'Inputs/Select',
//   component: Select,
// };
const SELECT_ITEMS = [
    {
      label: 'test 1',
      value: 'test_1',
    },
    {
      label: 'test 2',
      value: 'test_2',
    },
    {
      label: 'test 3',
      value: 'test_3',
    },
  ];

export default{
    title: 'Inputs/Select',
    component:Select,
    argTypes: {
       
    
 },
}




// const customDeleteIcon = <Select {...TinyIcon.args} name="filled-action-delete" />

// export const Playground : Story<SelectProps> = Template.bind({})
// Playground.args = {
//   disabled: false,
//   label: 'Chip component label',
// //   size: sizes.medium,
// //   variant: variants.default
// }

// export const Standard : Story<SelectProps> = Template.bind({})
// Standard.args = {
//   color: colors.primary,
//   label: 'Label',
// //   size: sizes.medium,
// //   variant: variants.default
// }

// export const Default : Story<SelectProps> = Template.bind({})
// Default.args = {
//     placeholder:"All results"
//     label:"Default"
//     items:{SELECT_ITEMS}
//     onChange={() => {}}
// }

// export const Default = () => (
//   <Select
//     onChange={() => {}}
//     placeholder="All results"
//     label="Default"
//     items={SELECT_ITEMS}
//   />
// );

// export const Multiple = () => (
//   <Select
//     placeholder="All results"
//     label="Multiple"
//     items={SELECT_ITEMS}
//     multiple
//     onChange={() => {}}
//   />
// );

const Template: ComponentStory<typeof Select> = args => <Select {...args} />;


export const Multiple  : Story<SelectProps> = Template.bind({})

Multiple.args = {
    items:SELECT_ITEMS,
      label: "test here",
      placeholder:"Dropdown",
      multiple: true,
      onChange: ()=>{"clicked"}
}

// export const chiptest = Template.bind({});

// IconTemplate.args={
//     variant:"standard",
//     severity:"error",
//     isOpen:true,

// }
// chiptest.args = Playground.args;

export const Playground : Story<SelectProps> = Template.bind({})
Playground.args = {
  items:SELECT_ITEMS,
    label: "test here",
    multiple: true,
    onChange: ()=>{"clicked"}
}