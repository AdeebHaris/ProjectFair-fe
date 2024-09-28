import { useEffect, useState } from "react"
import Header from "../componets/Header"
import ProjectCard from "../componets/ProjectCard"
import {getAllProjectApi } from "../services/allApi"

function Project() {
  const [allProject,setAllProject] = useState([])

  const getAllProject = async()=>{
    if(sessionStorage.getItem('token')){
      const token = sessionStorage.getItem('token')
      const reqHeader = {
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
        
      }

      const result = await getAllProjectApi(reqHeader);
      console.log("User Project");
      console.log(result);
      setAllProject(result.data)
      

    }
  }
  useEffect(()=>{
    getAllProject();
  },[])
  return (
    <>
        <Header/>
        <div className="container-fluid">
          <h3 className="text-center mt-5">All Projects</h3>
          </div>
          <div className="row my-4">
            <div className="col-md-4"></div>
            <div className="col-md-4 d-flex">
              <input type="text" className="form-control" placeholder="Search by technology"/>
              <i className="fa-solid fa-magnifying-glass fa-rotate-90" style={{marginTop:'3px',marginLeft:'-38px'}}></i>
            </div>
            <div className="coll-md-4"></div>
          </div>
        
        
        <div className="container row my-5 ms-5">
              {
                allProject?.length >0?
                allProject.map((item) => (
            <div className="col-md-3 col-sm-6 ">
                  <ProjectCard key={item.id} project={item} /> 
            </div>

                )):
                <p>project not found</p>
              }
              {/* <ProjectCard/> */}
          </div>
    </>
  )
}

export default Project