import React from 'react';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import Modal from '@material-ui/core/Modal';
import { Button, FormControl, Grid, InputLabel, MenuItem, Select } from '@material-ui/core';
import { buttonStyles, formStyles, modStyles } from "../material-ui-style";
import { KeyboardDatePicker, MuiPickersUtilsProvider, } from '@material-ui/pickers';

const Mod = ({ onClose, open, order, setOrder, setSort, sort, selectedDateFrom, selectedDateTo, setSelectedDateFrom, setSelectedDateTo }) => {
  const mod = modStyles();
  const button = buttonStyles();
  const form = formStyles();
  
  const body = (
    <div className={mod.root}>
      
      <Button type="button" className={button.secondary} variant="outlined" color="secondary" onClick={onClose}>
        &times;
      </Button>
      
      <FormControl className={form.formControl}>
        <InputLabel id="demo-simple-select-label">Order:</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={order.value}
          onChange={event => setOrder({ value: event.target.value })}
        >
          <MenuItem value={`desc`}>desc</MenuItem>
          <MenuItem value={`asc`}>asc</MenuItem>
        </Select>
      </FormControl>
      
      <FormControl className={form.formControl}>
        <InputLabel id="demo-simple-select-label">Sort:</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sort.value}
          onChange={e => setSort({ value: e.target.value })}
        >
          <MenuItem value={`activity`}>activity</MenuItem>
          <MenuItem value={`votes`}>votes</MenuItem>
          <MenuItem value={`creation`}>creation</MenuItem>
          <MenuItem value={`hot`}>hot</MenuItem>
          <MenuItem value={`week`}>week</MenuItem>
          <MenuItem value={`month`}>month</MenuItem>
        </Select>
      </FormControl>
      
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="Date picker from"
            format="MM/dd/yyyy"
            value={selectedDateFrom}
            onChange={date => setSelectedDateFrom(date)}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="Date picker to"
            format="MM/dd/yyyy"
            value={selectedDateTo}
            onChange={date => setSelectedDateTo(date)}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
      
      
      {/*<label htmlFor="order-select">Order:</label>*/}
      {/*<select id="order-select" onChange={event => setOrder({ value: event.target.value })}*/}
      {/*        defaultValue={order.value}>*/}
      {/*  <option value="desc">desc</option>*/}
      {/*  <option value="asc">asc</option>*/}
      {/*</select>*/}
      
      {/*<label htmlFor="sort-select">Sort:</label>*/}
      {/*<select id="sort-select" onChange={e => setSort({ value: e.target.value })} defaultValue={sort.value}>*/}
      {/*  <option value="activity">activity</option>*/}
      {/*  <option value="votes">votes</option>*/}
      {/*  <option value="creation">creation</option>*/}
      {/*  <option value="hot">hot</option>*/}
      {/*  <option value="week">week</option>*/}
      {/*  <option value="month">month</option>*/}
      {/*</select>*/}
    </div>
  );
  
  return (
    <div>
      <Modal open={open}
             onClose={onClose}
             aria-labelledby="modal-title"
             aria-describedby="modal-description"
      >
        {body}
      </Modal>
    </div>
  );
};

export default Mod;
