import React, { createContext, useState } from "react";
import Main from "./components/Main";
import Header from "./components/Header";
import Mod from "./components/Modal";
import { Container } from '@material-ui/core';


const DataContext = createContext()

const App = () => {
  const [order, setOrder] = useState({ value: "desc" });
  const [sort, setSort] = useState({ value: "activity" });
  const [open, setOpen] = useState(false);
  const [selectedDateFrom, setSelectedDateFrom] = useState(new Date('2020-11-10'));
  const [selectedDateTo, setSelectedDateTo] = useState(new Date('2020-11-11'));
  console.log(order);
  return (
    <>
      <Header open={open} setOpen={setOpen}/>
      <Container maxWidth="sm">
        {
          open && <Mod onClose={() => setOpen(false)}
                       open={open}
                       sort={sort}
                       setSort={setSort}
                       order={order}
                       setOrder={setOrder}
                       selectedDateFrom={selectedDateFrom} setSelectedDateFrom={setSelectedDateFrom}
                       selectedDateTo={selectedDateTo} setSelectedDateTo={setSelectedDateTo}
          />
        }
        <DataContext.Provider value={{f: sort}}>
        <Main order={order}
              sort={sort}
              setOrder={setOrder}
              setSort={setSort}
              selectedDateFrom={selectedDateFrom}
              selectedDateTo={selectedDateTo}
        />
        </DataContext.Provider>
      
      </Container>
    </>
  );
};

export default (App);
