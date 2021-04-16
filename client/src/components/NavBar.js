import React, { useContext } from 'react';
import { Context } from './../index';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import { SHOP_ROUTE, ADMIN_ROUTE, LOGIN_ROUTE } from './../utils/consts';
import { observer } from 'mobx-react-lite'

const NavBar = observer(() => {
  const history = useHistory()
  const { user } = useContext(Context);
  const logOut = () => {
    user.setUser(false)
    user.setIsAuth(false)
  }
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink to={SHOP_ROUTE}>IElectronics</NavLink>
        <Nav className="ml-auto">
          {user.isAuth ? 
          <Nav className='ml-auto' style={{color: 'white'}}>
            <Button variant='outline-light' className='mr-2'onClick={() => history.push(ADMIN_ROUTE)}>Admin Panel</Button>
            <Button variant='outline-light' onClick={logOut}>Logout</Button> 
          </Nav>:
           <Nav className='ml-auto' style={{color: 'white'}}>
            <Button variant='outline-light' onClick={() => history.push(LOGIN_ROUTE)}>Login</Button>
          </Nav>
          }
        </Nav>
      </Container>
    </Navbar>
  );
});

export default NavBar;