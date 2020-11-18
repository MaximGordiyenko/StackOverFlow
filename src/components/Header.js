import React from 'react';
import { Button } from '@material-ui/core';
import { buttonStyles, headerStyles } from "../material-ui-style";

const Header = ({open, setOpen}) => {
  const header = headerStyles()
  const button = buttonStyles()
  return (
    <header className={header.root}>
      <Button className={button.root} variant="outlined" color="secondary" onClick={() => setOpen(!open)}>
        Open Modal
      </Button>
    </header>
  );
};

export default Header;
