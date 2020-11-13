import React, { useState } from 'react';
import Modal from "./Modal";

const Header = () => {
  const [order, setOrder] = useState({ value: 'desc' });
  const [sort, setSort] = useState({ value: 'activity' });
  const [open, setOpen] = useState(false)
  console.log(sort, order);
  return (
    <header className={`page-header`}>
      
      <button onClick={() => setOpen(!open)}>Filter</button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <label htmlFor="order-select">Order:</label>
        <select id="order-select" onChange={event => setOrder({ value: event.target.value })} defaultValue={order.value}>
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
      </Modal>
      
    </header>
  );
};

export default Header;
