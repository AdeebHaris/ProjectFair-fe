import { Link } from "react-router-dom"
import AddProject from "./AddProject"
import EditProject from "./EditProject"

function MyProject() {
  return (
    <>
    <div className="shadow p-5 mb-5">
        <div className="d-flex mt-4">
            <h5 className="text-success me-auto">My Projects</h5>
            <AddProject/>
        </div>
        <div className="p-3 mt-4 rpunded-2 d-flex bg-light" >
            <h5>Media Player</h5>
        
        <div className="d-flex ms-auto align-items-center">
            <EditProject/>
            <Link className="ms-3 text-success">
            <i className="fa-solid fa-link" ></i>
            </Link>
            <Link className="ms-3 text-info">
            <i className="fa-brands fa-github" ></i>
            </Link>
            <Link className="ms-3 text-danger">
            <i className="fa-solid fa-trash"></i>
            </Link>
        </div>
    </div>
    </div>
    </>
  )
}

export default MyProject