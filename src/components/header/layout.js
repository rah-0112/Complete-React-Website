import React, { useState } from 'react';
import Sticky from 'react-stickynode';
import Header from './header';

export default function Layout({ children }) {
  const [isSticky, setIsSticky] = useState(false);

  const handleStateChange = (status) => {
    if (status.status === Sticky.STATUS_FIXED) {
      setIsSticky(true);
    } else if (status.status === Sticky.STATUS_ORIGINAL) {
      setIsSticky(false);
    }
  };
  
  return (
    <React.Fragment>
      <Sticky innerZ={1001} top={0} onStateChange={handleStateChange}>
        <Header className={`${isSticky ? 'sticky' : 'unSticky'}`} />
      </Sticky>
      <main>
        {children}
      </main>
    </React.Fragment>
  );
}