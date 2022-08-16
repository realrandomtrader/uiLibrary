import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

export interface FamilyPerson {
    id: number;
    img:string;
    name: string;
    birth: string;
    gender: string,
    birthLocation: string;
    death: string;
    deathLocation: string;
    marrige: string;
    spouse: string;
    relation: string
}

const initialState: FamilyPerson[] = [
    { id: 1, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrUC_dwqjEZ5OiFKXlTsZqWmA0-W7JzJduNGrl5GGC4lm4Ne4_Pz7unT51QA&s", name: "Errol Musk", birth: "24 june 1945", gender: "m", relation: "parent",birthLocation:"",death:"",deathLocation:"",marrige:"1970",spouse:"Maye Musk"},
    { id: 2, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKTOYlgzHE43Md4Eow28H-CdXCTI69gtzk6fV_u-CtdaHAXAYSTwQVbrdD&s", name: "Maye Musk", birth: "19 April 1948", gender: "f", relation: "parent",birthLocation:"",death:"",deathLocation:"",marrige:"1970",spouse:"Errol Musk" },
    { id: 4, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrFgsRWKKxd8zffU82tfSivw7-AA7XXG-2ukCeWO0nGw&s", name: "Elon Musk", birth: "28 June 1971 ", gender: "m", relation: "child",birthLocation:"Pretoria, South Africa",death:"",deathLocation:"",marrige:"2000",spouse:"Justine Musk" },
    // { id: 4, name: "Kimbal Musk", birth: "56", gender: "female", relation: "child",birthLocation:"",death:"",deathLocation:"",marrige:"1970",spouse:"Errol Musk" },
    // { id: 5, name: "Tosca Musk", birth: "56", gender: "female", relation: "child",birthLocation:"",death:"",deathLocation:"",marrige:"1970",spouse:"Errol Musk" },
    // { id: 6, name: "Asha Rose Musk", birth: "56", gender: "female", relation: "child",birthLocation:"",death:"",deathLocation:"",marrige:"1970",spouse:"Errol Musk" },
    // { id: 7, name: "Alexandra Musk", birth: "56", gender: "female", relation: "child",birthLocation:"",death:"",deathLocation:"",marrige:"1970",spouse:"Errol Musk" },
    // { id: 7, name: "Elliot Rush Musk", birth: "56", gender: "female", relation: "child",birthLocation:"",death:"",deathLocation:"",marrige:"1970",spouse:"Errol Musk" }
];


export const familyTree = createSlice({
    name: 'familyPersons',
    initialState,
    reducers: {
        update: (state, action) => {
        state.map((item,i) =>{ if(item.id === action.payload.id )
            {
             state[i]= {...state[i], [action.payload.type]:action.payload.value}
        }
        })
        },
    },
});

export const { update } = familyTree.actions;

export const selectFamily = (state: RootState) => state;


// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export default familyTree.reducer;
