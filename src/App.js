import React, { useState } from "react";
import Main from "./components/Main";
import Header from "./components/Header";
import Mod from "./components/Modal";
import { Container } from '@material-ui/core';

const App = () => {
  const [order, setOrder] = useState({ value: "desc" });
  const [sort, setSort] = useState({ value: "activity" });
  const [open, setOpen] = useState(false);
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
          />
        }
        
        <Main order={order}
              sort={sort}
              setOrder={setOrder}
              setSort={setSort}
        />
      
      </Container>
    </>
  );
};

export default (App);
