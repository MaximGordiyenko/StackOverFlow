import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'relative',
    width: 400,
    top: 'calc(50vh - 30%)',
    left: 'calc(100vw - 70%)',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Mod = ({onClose, open, order, setOrder, setSort, sort}) => {
  const classes = useStyles();
  
  const body = (
    <div className={classes.paper}>
      
      <button type="button" onClick={onClose}>&times;</button>
      <label htmlFor="order-select">Order:</label>
      <select id="order-select" onChange={event => setOrder({ value: event.target.value })}
              defaultValue={order.value}>
        <option value="desc">desc</option>
        <option value="asc">asc</option>
      </select>
  
      <label htmlFor="sort-select">Sort:</label>
      <select id="sort-select" onChange={e => setSort({ value: e.target.value })} defaultValue={sort.value}>
        <option value="activity">activity</option>
        <option value="votes">votes</option>
        <option value="creation">creation</option>
        <option value="hot">hot</option>
        <option value="week">week</option>
        <option value="month">month</option>
      </select>
      {/*<button onClick={send}>filter</button>*/}
    </div>
  );
  
  return (
    <div>
      <Modal open={open}
             onClose={onClose}
             aria-labelledby="simple-modal-title"
             aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

export default Mod;
