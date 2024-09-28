import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function EditProject() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <i onClick={handleShow} className="fa-solid fa-pen-to-square text-info"></i>
    <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title className='text-success'>ADD PROJECT</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className='row'>
                <div className='col-md-6'>
                    <label htmlFor="projectImg">
                    <input type="file" style={{display:'none'}} id='projectImg'/>
                    <img src="https://www.pngall.com/wp-content/uploads/2/Upload-PNG-HD-Image.png" alt="" className='w-100'/>
                    </label>   
                </div>
                <div className='col-md-6'>
                   
                        <input type="text" placeholder='Project title' className='form-control mb-3' />
                    
                        <input type="text" placeholder='Languages used' className='form-control mb-3'/>
                    
                        <input type="text" placeholder='Github Link' className='form-control mb-3' />
                        <input type="text" placeholder='Website Link' className='form-control mb-3' />
                        <textarea placeholder='Project Overview' rows={4} className='form-control mb-3'></textarea>
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            CANCEL
          </Button>
          <Button variant="success" onClick={handleClose} className='btn btn-success'>
            UPDATE
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default EditProject