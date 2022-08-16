import React from "react"
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import TableData from "../../stories/table";
import { FamilyPerson, selectFamily, update } from "./familyTree.slice"
import { SelectChangeEvent } from '@mui/material';
import SnackbarComponent from "../../stories/snackbar";

const FamilyTree = () => {
  const tree = useAppSelector(selectFamily);
  const dispatch = useAppDispatch();
  const [open, setOpen] = React.useState(false);
  // function test(family:FamilyPerson){
  //     dispatch(update({...family,age:"53"}))
  // }
  let columns = [
    { id: "parent&siblins", label: "Parents & Siblings", minWidth: 170 },
    { id: "gender", label: "Gender", minWidth: 100, },
    { id: "birth", label: "Birth", minWidth: 170, },
    { id: "birthLocation", label: "Birth Location", minWidth: 170, },
    { id: "death", label: "Death", minWidth: 170, },
    { id: "deathLocation", label: "Death Location", minWidth: 170, },
    { id: "marriage", label: "Marriage", minWidth: 170, },
    { id: "spouse", label: "Spouse", minWidth: 170, }
  ]

  const handleChange = (event: SelectChangeEvent<unknown>, type: string, id: number | undefined) => {
    let value = event.target.value;
    dispatch(update({ id, type, value }))
    showMsg()
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>, id: number, type: string) => {
    let value = e.target.value;
    dispatch(update({ id, type, value }))
    showMsg()
  }
const showMsg=()=>{
  setOpen(true);
}
const hideMsg=()=>{
setTimeout(()=>{  setOpen(false); },2000);
}


  return (
    <div>
      {/* {tree.familyTree.map((family) =>(
        <div key={family.id} >
       <h1 >{family.name}</h1> 
       <h1 >{family.birth}</h1> 
       <button onClick={(event: React.MouseEvent<HTMLElement>)=>test(family)}>Addd</button>
       </div>
    ))} */}
      <TableData columns={columns} tree={tree.familyTree} handleChange={handleChange} handleBlur={handleBlur} />
      <SnackbarComponent  variant="standard" severity="success" handleClose={()=>hideMsg()} isOpen={open}/>
    </div>
  )
}

export default FamilyTree