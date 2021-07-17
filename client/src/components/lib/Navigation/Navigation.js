import jwt from 'jwt-decode';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import { useEffect, useState } from 'react';

export default function Navigation({ routeDetails = [] }) {
  const [userName, setUserName] = useState('');

  const getLoggedInUserRoute = () => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      return false;
    }
    const user = jwt(token);
    setUserName(user?.username);
  };

  useEffect(() => {
    getLoggedInUserRoute();
  }, []);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="px-3 py-2">
      <Navbar.Brand href="/">{userName}</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          {routeDetails.map(ele => (
            <Nav.Link href={ele.url} key={ele.name}>
              {ele.name}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
