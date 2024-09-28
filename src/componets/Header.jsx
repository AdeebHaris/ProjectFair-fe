import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
     <Navbar className="bg-success">
        <Container className='p-1'>
          <Navbar.Brand >
            <Link to={'/'} style={{textDecoration:'none'}} className='text-light'>
            <i className="fa-brands fa-stack-overflow me-3"></i>
            Project Fair
            </Link>
          </Navbar.Brand>
          
          <button className='btn btn-warning'><i className="fa-solid fa-power-off me-2"></i>Logout</button>
        </Container>
      </Navbar>
    </>
  )
}

export default Header