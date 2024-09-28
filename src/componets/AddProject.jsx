import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { addProjectApi } from "../services/allApi";
function AddProject() {
  const [show, setShow] = useState(false);
  const [token, setToken] = useState("");
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"));
    }
  }, []);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [projectDetails, setProjectDetails] = useState({
    title: "",
    language: "",
    github: "",
    website: "",
    overview: "",
    projectImage: "",
  });
  // state for showing previewImage
  const [preview, setPreview] = useState("");
  useEffect(() => {
    if (projectDetails.projectImage) {
      // To create image url for preview URL.createObjectURL(image value) is used
      setPreview(URL.createObjectURL(projectDetails.projectImage));
    }
  }, [projectDetails.projectImage]);
  const handleAddProject = async (e) => {
    e.preventDefault();
    const { title, language, github, website, overview, projectImage } =
      projectDetails;
    if (
      !title ||
      !language ||
      !github ||
      !website ||
      !overview ||
      !projectImage
    ) {
      alert("Please fill the form completely");
    } else {
      // here we are also uploading a file, so we should send body in the form of FormData
      const reqBody = new FormData();
      reqBody.append("title",title);
      reqBody.append("language", language);
      reqBody.append("github", github);
      reqBody.append("website", website);
      reqBody.append("overview", overview);
      reqBody.append("projectImage", projectImage);

      // here content type we are passing is multipart form data,so specific req header needed
      const reqHeader = {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      };
      const result = await addProjectApi(reqBody, reqHeader);
      if(result.status === 200){
        alert(`${title} uploaded successfully`)
        setProjectDetails(
          {
            title: "",
            language: "",
            github: "",
            website: "",
            overview: "",
            projectImage: "",
          }
        )
        handleClose();
        setPreview("")


      }
      else if(result.status === 409){
        alert(`${title} already exists`)
        setProjectDetails(
          {
            title: "",
            language: "",
            github: "",
            website: "",
            overview: "",
            projectImage: "",
          }
        )
        handleClose();
        setPreview("")

      }
      else{
        alert(`${title} uploading failed`)
      }
    }
  };
  const handleClose1 = ()=>{
    handleClose();
    setProjectDetails({
      title: "",
      language: "",
      github: "",
      website: "",
      overview: "",
      projectImage: "",
    })
    setPreview("")
  }
  return (
    <>
      <button className="btn btn-success" onClick={handleShow}>
        ADD PROJECT
      </button>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title className="text-success">ADD PROJECT</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="projectImg">
                <input
                  type="file"
                  style={{ display: "none" }}
                  id="projectImg"
                  onChange={(e) =>
                    setProjectDetails({
                      ...projectDetails,
                      projectImage: e.target.files[0],
                    })
                  }
                />
                <img
                  src={
                    preview
                      ? preview
                      : "https://www.pngall.com/wp-content/uploads/2/Upload-PNG-HD-Image.png"
                  }
                  alt=""
                  className="w-100"
                />
              </label>
            </div>
            <div className="col-md-6">
              <input
                value={projectDetails.title}
                onChange={(e) =>
                  setProjectDetails({
                    ...projectDetails,
                    title: e.target.value,
                  })
                }
                type="text"
                placeholder="Project title"
                className="form-control mb-3"
              />

              <input
                value={projectDetails.language}
                onChange={(e) =>
                  setProjectDetails({
                    ...projectDetails,
                    language: e.target.value,
                  })
                }
                type="text"
                placeholder="Languages used"
                className="form-control mb-3"
              />

              <input
                value={projectDetails.github}
                onChange={(e) =>
                  setProjectDetails({
                    ...projectDetails,
                    github: e.target.value,
                  })
                }
                type="text"
                placeholder="Github Link"
                className="form-control mb-3"
              />
              <input
                value={projectDetails.website}
                onChange={(e) =>
                  setProjectDetails({
                    ...projectDetails,
                    website: e.target.value,
                  })
                }
                type="text"
                placeholder="Website Link"
                className="form-control mb-3"
              />
              <textarea
                value={projectDetails.overview}
                onChange={(e) =>
                  setProjectDetails({
                    ...projectDetails,
                    overview: e.target.value,
                  })
                }
                placeholder="Project Overview"
                rows={4}
                className="form-control mb-3"
              ></textarea>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose1}>
            CANCEL
          </Button>
          <Button
            variant="success"
            onClick={handleAddProject}
            className="btn btn-success"
          >
            ADD
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddProject;
