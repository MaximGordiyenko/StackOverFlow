import React from 'react';

const Header = ({open, setOpen}) => {
  
  return (
    <header className={`page-header`}>
      <button onClick={() => setOpen(!open)}>Open Modal</button>
    </header>
  );
};

export default Header;
