import React from 'react';
import { Button } from '@material-ui/core';
import { headerStyles } from "../material-ui-style";

const Header = ({open, setOpen}) => {
  const header = headerStyles()
  return (
    <header className={header.root}>
      <Button variant="outlined" color="secondary" onClick={() => setOpen(!open)}>
        Open Modal
      </Button>
    </header>
  );
};

export default Header;
