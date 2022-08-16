import TableData from "./table";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default{
     title:"Table",
     component:TableData
} 

const Template: ComponentStory<typeof TableData> = args =><TableData {...args} />

export const MainTable = Template.bind({});

MainTable.args = {
     columns: [
          { id: 'parent&siblins', label: 'Parents & Siblings', minWidth: 170 ,align: 'right'},
          { id: 'gender', label: 'Gender', minWidth: 100,align: 'right' },
          {id: 'birth',label: 'Birth', minWidth: 170,align: 'right' },
          {id: 'birthLocation', label: 'Birth Location', minWidth: 170,align: 'right'},
          {id: 'death', label: 'Death', minWidth: 170,align: 'right'},
          {id: "deathLocation", label: "Death Location", minWidth: 170,},
          {id: 'marriage', label: 'Marriage', minWidth: 170,align: 'right'},
          {id: 'spouse', label: 'Spouse', minWidth: 170,align: 'right'}
        ],
        tree:[
          { id: 1, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrUC_dwqjEZ5OiFKXlTsZqWmA0-W7JzJduNGrl5GGC4lm4Ne4_Pz7unT51QA&s", name: "Errol Musk", birth: "24 june 1945", gender: "m", relation: "parent",birthLocation:"",death:"",deathLocation:"",marrige:"1970",spouse:"Maye Musk"},
          { id: 2, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKTOYlgzHE43Md4Eow28H-CdXCTI69gtzk6fV_u-CtdaHAXAYSTwQVbrdD&s", name: "Maye Musk", birth: "19 April 1948", gender: "f", relation: "parent",birthLocation:"",death:"",deathLocation:"",marrige:"1970",spouse:"Errol Musk" },
          { id: 4, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrFgsRWKKxd8zffU82tfSivw7-AA7XXG-2ukCeWO0nGw&s", name: "Elon Musk", birth: "28 June 1971 ", gender: "m", relation: "child",birthLocation:"Pretoria, South Africa",death:"",deathLocation:"",marrige:"2000",spouse:"Justine Musk" },
          // { id: 4, name: "Kimbal Musk", birth: "56", gander: "female", relation: "child",birthLocation:"",death:"",deathLocation:"",marrige:"1970",spouse:"Errol Musk" },
          // { id: 5, name: "Tosca Musk", birth: "56", gander: "female", relation: "child",birthLocation:"",death:"",deathLocation:"",marrige:"1970",spouse:"Errol Musk" },
          // { id: 6, name: "Asha Rose Musk", birth: "56", gander: "female", relation: "child",birthLocation:"",death:"",deathLocation:"",marrige:"1970",spouse:"Errol Musk" },
          // { id: 7, name: "Alexandra Musk", birth: "56", gander: "female", relation: "child",birthLocation:"",death:"",deathLocation:"",marrige:"1970",spouse:"Errol Musk" },
          // { id: 7, name: "Elliot Rush Musk", birth: "56", gander: "female", relation: "child",birthLocation:"",death:"",deathLocation:"",marrige:"1970",spouse:"Errol Musk" }
      ]
     
}
