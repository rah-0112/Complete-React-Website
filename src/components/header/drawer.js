import React, { Fragment } from 'react';
import RcDrawer from 'rc-drawer';
import styled from 'styled-components';

const DrawerStyle = styled.div`
width: 100%;
height: 100%;
background-color: #fff;
`
const Close = styled.div`
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 25px;
right: 30px;
z-index: 1;
cursor: pointer;
`

export default function Drawer ({ 
  className,
  children,
  closeButton,
  closeButtonStyle,
  drawerHandler,
  toggleHandler,
  open,
  width,
  placement,
  ...props
}) {
  return (
    <Fragment>
      <RcDrawer
        open={open}
        onClose={toggleHandler}
        className={`drawer ${className || ''}`.trim()}
        width={width}
        placement={placement}
        handler={false}
        level={null}
        duration={'0.4s'}
        {...props}
      >
        {closeButton && (
          <Close onClick={toggleHandler}>
            {closeButton}
          </Close>
        )}
        <DrawerStyle>{children}</DrawerStyle>
      </RcDrawer>
      <div style={{ display: 'inline-block', margin: '10px' }} onClick={toggleHandler}>
        {drawerHandler}
      </div>
    </Fragment>
  );
};

Drawer.defaultProps = {
  width: '320px',
  placement: 'left',
};