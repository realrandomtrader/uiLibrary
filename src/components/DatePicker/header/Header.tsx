import React from "react";
// import IconButton from "@material-ui/core/IconButton";
// import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
// import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
// import Button from "@material-ui/core/Button";
// import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
// import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import { IconButton } from "@mui/material";
import { ArrowBack, ArrowDropDown, ArrowDropUp, ArrowForward } from "@mui/icons-material";
import Button from "@mui/material/Button";


interface HeaderProps {
    goToPrevious:any
    goToNext:any
    changeView:any
    btnText:string
    open:boolean
}

function Header(props:HeaderProps) {
  const btnIcon = () =>
    props.open ? <ArrowDropUp /> : <ArrowDropDown />;

  return (
    <div className="dz-calendar-header">
      <div className="header__content">
        <Button onClick={props.changeView} endIcon={btnIcon()}>
          {props.btnText}
        </Button>
        <div className="header__content__spacer" />
        <IconButton
          className="header__content__previous-button"
          size="small"
          onClick={props.goToPrevious}
        >
          <ArrowBack fontSize="inherit" />
        </IconButton>
        <IconButton
          className="header__content__next-button"
          size="small"
          onClick={props.goToNext}
        >
          <ArrowForward fontSize="inherit" />
        </IconButton>
      </div>
    </div>
  );
}

// Specifies the default values for props:
Header.defaultProps = {
  open: false
};

export default Header;