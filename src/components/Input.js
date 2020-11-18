import React from 'react';
import { TextField } from '@material-ui/core';
import { inputStyles } from '../material-ui-style';

const Input = ({setSearch}) => {
  const input = inputStyles()
  return (
    <form className={input.root} noValidate autoComplete="off">
      <TextField id="standard-secondary" label="Standard secondary" color="secondary" placeholder='search ...' onChange={e => setSearch(e.target.value)}/>
    </form>
  );
};

export default Input;
