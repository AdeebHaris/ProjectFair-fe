import { Link } from "react-router-dom"

function Footer() {
  return (
    <>
     <div className="d-flex justify-content-center align-items-center bg-success p-3">
      <div className="footer d-flex align-items-center justify-content-evenly">
        <div style={{width:"400px"}}>
          <h5 className='textstyle'><i className="fa-brands fa-stack-overflow"></i>Project Fair</h5>
          <p className='textstyle' style={{textAlign:"justify"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, quae! Consectetur dolorum dolore placeat iusto nobis! Fuga, tenetur, autem dicta necessitatibus voluptatibus ipsum sit, quo et excepturi nobis nam aliquam!</p>
        </div>
        <div className="d-flex flex-column ms-5">
          <h4 className='textstyle'>Links</h4>
          <Link to='/' style={{textDecoration:'none',color:"black"}}>
            Home
          </Link>
          <Link to='/dashboard' style={{textDecoration:'none',color:"black"}}>
            Dashboard
          </Link>
          <Link to='/project' style={{textDecoration:'none',color:"black"}}>
            Projects
          </Link>
        </div>
        <div className="d-flex flex-column ms-5">
          <h4 className='textstyle'>Guides</h4>
          <Link to='https://react.dev/' target='/blank' style={{textDecoration:'none',color:"black"}}>
            React
          </Link>
          <Link to='https://react-bootstrap.github.io/' target='/blank' style={{textDecoration:'none',color:"black"}}>
            React Bootstrap
          </Link>
          <Link to='https://www.npmjs.com/package/json-server' target='/blank' style={{textDecoration:'none',color:"black"}}>
            Json Server 
          </Link>
        </div>
        <div className='ms-5'>
          <h4 className='textstyle'>Contact Us</h4>
          <div className='d-flex '>
            <input type="text" name='' id='' className='form-control' placeholder='Enter your email id' />
            <button className='btn btn-warning  ms-2'>Subscribe</button>
            </div>
            <div className='d-flex justify-content-evenly align-items-center mt-4'>
            <Link style={{textDecoration:'none',color:"black"}}>
            <i className="fa-brands fa-instagram fa-2x"></i>
            </Link>
            <Link style={{textDecoration:'none',color:"black"}}>
            <i className="fa-brands fa-facebook fa-2x"></i>
            </Link>
            <Link style={{textDecoration:'none',color:"black"}}>
            <i className="fa-brands fa-reddit fa-2x"></i>
            </Link>
            <Link style={{textDecoration:'none',color:"black"}}>
            <i className="fa-brands fa-twitter fa-2x"></i>
            </Link>
            </div>                    
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer