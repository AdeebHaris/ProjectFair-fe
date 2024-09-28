import Collapse from 'react-bootstrap/Collapse';
import { useState } from 'react';
function Profile() {
  const [open, setOpen] = useState(false);
  return (
    <>
    <div className="shadow p-4">
      <div className="d-flex">
        <h5>Profile</h5>
        <button className="ms-auto btn btn-info" onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}>
          {
            open?
            <i className="fa-solid fa-angle-up"></i>:
            <i className="fa-solid fa-angle-down"></i>

          }
          </button>
      </div>
      <Collapse in={open}>
        <div>
          <div className='d-flex justify-content-center align-items-center mb-3 mt-3'>
            <label htmlFor="profileImg">
              <input type="file" id='profileImg' style={{display:'none'}}/>
              <img src="https://icon-library.com/images/profile-picture-icon/profile-picture-icon-1.jpg" alt="" width='180px'/>
            </label>
          </div>
          <div>
            <input type="text" placeholder='Github Link' className='form-control mb-3'/>
            <input type="text" placeholder='Website Link' className='form-control mb-3'/>
            <button className='btn btn-info w-100'>UPDATE</button>
          </div>
        </div>
      </Collapse>
    </div>
    </>
  )
}

export default Profile