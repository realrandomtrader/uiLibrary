import React from 'react'
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import MuiAlert, { AlertColor } from '@mui/material/Alert';

type ComponentProps = {
    variant: "standard" | "filled" | "outlined" | undefined;
    severity: AlertColor | undefined;
    handleClose:() => void;
    isOpen:boolean;
}

const SnackbarComponent = ({ variant, severity,isOpen,handleClose }: ComponentProps) => {

   
    return (
        <>
            {/* <button onClick={handleClick} >click</button> */}
            <Snackbar open={isOpen} autoHideDuration={2000} onClose={handleClose}>
                <MuiAlert elevation={6} variant={variant} onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
                    Data Updated!
                </MuiAlert>
            </Snackbar>
        </>
    )
}

export default SnackbarComponent