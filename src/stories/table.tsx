import React from 'react'
import PropTypes, { number } from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box, SelectChangeEvent } from '@mui/material';
import TextField from '@mui/material/TextField';
import SelectInput, { IMenuItem } from './selectInput';
import TypoGraphy from './typography';
import { FamilyPerson } from '../features/familyTree/familyTree.slice';


interface Tablecolumns {
  id: string,
  label: string,
  minWidth: number,
  align?: "inherit" | "left" | "center" | "right" | "justify" | undefined,

};

interface PackageData {
  columns: Tablecolumns[];
  tree: FamilyPerson[];
  handleChange: (event: SelectChangeEvent<unknown>, type: string, id: number | undefined) => void;
  handleBlur: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>, id: number, type: string) => void;
}



let menuItems: IMenuItem[] = [{ value: "m", label: "M" }, { value: "f", label: "F" }, { value: "o", label: "O" }];


const TableData = ({ columns, tree, handleChange, handleBlur }: PackageData) => {

  const [isEditable, setIsEditable] = React.useState<{ id: number | null; editable: string }>({ id: null, editable: "" });

  const handleBlurChange = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>, id: number, type: string) => {
    handleBlur(e, id, type)
    setIsEditable({ id: null, editable: "" })
    // console.log(e.target.value,id,type)
  }

  const handleGenderEdit = (id: number, editable: string) => {
    setIsEditable({ id: id, editable: editable })
  }
const closeHandler = () =>{

  setIsEditable({ id: null, editable: "" })
}


  return (
    
    <TableContainer sx={{ maxHeight: 440, maxWidth: "100vw", margin: "10px" }} >
      <Table stickyHeader aria-label="sticky table" >
        <TableHead>
          <TableRow>
            {columns.map((column, i) => (
              <TableCell
                key={column.id}
                align="center"
                style={{ minWidth: column.minWidth, border: "1px solid #d5d3d3" }}
              >
                <TypoGraphy variant="body1" color={i == 0 ? "blue" : "#d5d3d3"} text={column.label} />
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {/* { id: 1, name: "Errol Musk", birth: "79", gander: "male", relation: "parent",birthLocation:"",death:"",deathLocation:"",marrige:"1970",spouse:"Maye Musk"}, */}
          {tree.map((row) => {
            return (
              <TableRow hover role="checkbox" tabIndex={-1} key={row.id} >
                <TableCell align={row.relation == "child" ? "center" : "left"} sx={row.relation == "child" ? { display: "flex", border: "1px solid #d5d3d3", borderLeft: "5px solid blue" } : { border: "1px solid #d5d3d3", display: "flex" }}>
                  <Box
                    component="img"
                    sx={{
                      marginLeft: row.relation == "child" ? "10px" : "0px",
                      height: 30,
                      width: 30,
                      maxHeight: { xs: 30, md: 30 },
                      maxWidth: { xs: 30, md: 30 },
                      marginRight: "10px",
                    }}
                    alt={row.name}
                    src={row.img}
                  />
                  <TypoGraphy variant="body1" color="black" text={row.name} />
                </TableCell>
                <TableCell align="center" sx={{ border: "1px solid #d5d3d3" }} onClick={() => { handleGenderEdit(row.id, "gender") }}>
                  {isEditable.id === row.id && isEditable.editable === "gender" ?
                    <SelectInput menuItems={menuItems} defaultValue={row.gender} elementId={row.id} handleClick={handleChange} onClose={closeHandler} />
                    : <TypoGraphy variant="body1" color="black" text={row.gender.toUpperCase()} />}
                </TableCell>
                <TableCell align="center" sx={{ border: "1px solid #d5d3d3" }} onClick={() => { handleGenderEdit(row.id, "birth") }}>
                  {isEditable.id === row.id && isEditable.editable === "birth" ?
                    <TextField id="outlined-basic" label="" defaultValue={row.birth} variant="outlined" size="small" onBlur={(e) => handleBlurChange(e, row.id, "birth")}/>
                    : <TypoGraphy variant="body1" color="black" text={row.birth} />
                  }
                </TableCell>
                <TableCell align="center" sx={{ border: "1px solid #d5d3d3" }} onClick={() => { handleGenderEdit(row.id, "birthLocation") }}>
                  {isEditable.id === row.id && isEditable.editable === "birthLocation" ?
                    <TextField id="outlined-basic" label="" defaultValue={row.birthLocation} variant="outlined" size="small" onBlur={(e) => handleBlurChange(e, row.id, "birthLocation")}/>
                    : <TypoGraphy variant="body1" color="black" text={row.birthLocation} useToolTip={true} />
                  }
                </TableCell >
                <TableCell align="center" sx={{ border: "1px solid #d5d3d3" }} onClick={() => { handleGenderEdit(row.id, "death") }}>
                  {isEditable.id === row.id && isEditable.editable === "death" ?
                    <TextField id="outlined-basic" label="" defaultValue={row.death} variant="outlined" size="small" onBlur={(e) => handleBlurChange(e, row.id, "death")} />
                    : <TypoGraphy variant="body1" color="black" text={row.death} />
                  }
                </TableCell>
                <TableCell align="center" sx={{ border: "1px solid #d5d3d3" }} onClick={() => { handleGenderEdit(row.id, "deathLocation") }}>
                  {isEditable.id === row.id && isEditable.editable === "deathLocation" ?
                    <TextField id="outlined-basic" label="" defaultValue={row.deathLocation} variant="outlined" size="small" onBlur={(e) => handleBlurChange(e, row.id, "deathLocation")}/>
                    : <TypoGraphy variant="body1" color="black" text={row.deathLocation}
                      useToolTip={true} />
                  }
                </TableCell>
                <TableCell align="center" sx={{ border: "1px solid #d5d3d3" }} onClick={() => { handleGenderEdit(row.id, "marrige") }}>
                  {isEditable.id === row.id && isEditable.editable === "marrige" ?
                    <TextField id="outlined-basic" label="" defaultValue={row.marrige} variant="outlined" size="small" onBlur={(e) => handleBlurChange(e, row.id, "marrige")}/>
                    : <TypoGraphy variant="body1" color="black" text={row.marrige} />
                  }
                </TableCell>
                <TableCell align="center" sx={{ border: "1px solid #d5d3d3" }} onClick={() => { handleGenderEdit(row.id, "spouse") }}>
                  {isEditable.id === row.id && isEditable.editable === "spouse" ?
                    <TextField id="outlined-basic" label="" defaultValue={row.spouse} variant="outlined" size="small" onBlur={(e) => handleBlurChange(e, row.id, "spouse")}/>
                    : <TypoGraphy variant="body1" color="black" text={row.spouse} />
                  }
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableData