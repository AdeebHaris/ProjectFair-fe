import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { loginApi, registerApi } from "../services/allApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Auth({ register }) {
  const registerForm = register ? true : false;
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleRegister = async (e) => {
    e.preventDefault();
    const { username, email, password } = userData;
    if (!username || !email || !password) {
      toast.warning("Please fill the form completely");
    } else {
      const result = await registerApi(userData);
      console.log(result);
      if (result.status === 201) {
        toast.success(`${username} Registered Succccessfully`);
        setUserData({
          username: "",
          email: "",
          password: "",
        });
        navigate("/login");
        // navigate to login page on successfull registration
      } else if (result.status == 400) {
        toast.error(result.response.data);
      } else {
        toast.error("Something happened");
      }
    }
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = userData;
    if (!email || !password) {
      toast.warning("Please enter the credentials");
    } else {
      const result = await loginApi(userData);
      console.log("Login Result");
      console.log(result);
      if (result.status === 200) {
        sessionStorage.setItem("loggedUser", JSON.stringify(result.data.data));
        sessionStorage.setItem("token", result.data.token);
        setUserData({
          username: "",
          email: "",
          password: "",
        });
        toast.success("User Logged in Successfully");
        navigate("/");
      } else if (result.status === 401) {
        toast.error("Invalid Email  or Password");
      } else {
        toast.error("Something went wrong");
      }
    }
  };
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "150px",
          marginTop: "80px",
        }}
      >
        <div className="container w-75">
          <h5>
            <i className="fa-solid fa-arrow-left me-2 text-warning"></i>
            <Link
              to={"/"}
              className="text-warning"
              style={{ textDecoration: "none", fontWeight: "bolder" }}
            >
              BACK TO HOME
            </Link>
          </h5>
          <div className="bg-success p-4">
            <Row>
              <Col md={6} className="p-4 d-flex justify-content-center">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/001/991/652/original/sign-in-page-flat-design-concept-illustration-icon-account-login-user-login-abstract-metaphor-can-use-for-landing-page-mobile-app-ui-posters-banners-free-vector.jpg"
                  alt=""
                  width="70%"
                />
              </Col>
              <Col md={6} className="p-5 d-flex justify-content-center">
                <form className="w-100">
                  <h5 className="text-center">
                    <i className="fa-brands fa-stack-overflow me-3"></i>Project
                    Fair
                  </h5>
                  {registerForm ? (
                    <>
                      <h6 className="text-center mb-3 mt-3">
                        Sign Up To Your Account
                      </h6>
                      <input
                        type="text"
                        placeholder="Name"
                        className="form-control rounded"
                        onChange={(e) =>
                          setUserData({ ...userData, username: e.target.value })
                        }
                        value={userData.username}
                      />
                    </>
                  ) : (
                    <h6 className="text-center my-3">
                      Sign In To Your Account
                    </h6>
                  )}
                  <div className="my-3">
                    <input
                      type="text"
                      placeholder="Email Id"
                      className="form-control rounded"
                      onChange={(e) =>
                        setUserData({ ...userData, email: e.target.value })
                      }
                      value={userData.email}
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      placeholder="Password"
                      className="form-control rounded"
                      onChange={(e) =>
                        setUserData({ ...userData, password: e.target.value })
                      }
                      value={userData.password}
                    />
                  </div>
                  {registerForm ? (
                    <div className="mt-3 ">
                      <button
                        className="btn btn-warning w-100 rounded"
                        onClick={handleRegister}
                      >
                        Register
                      </button>
                      <p className="mt-3">
                        Already a User? Click Here To{" "}
                        <Link
                          className="ms-2"
                          to={"/login"}
                          style={{ textDecoration: "none", color: "blue" }}
                        >
                          LOGIN
                        </Link>{" "}
                      </p>
                    </div>
                  ) : (
                    <div className="mt-3">
                      <button
                        className="btn btn-warning w-100 rounded"
                        onClick={handleLogin}
                      >
                        Login
                      </button>
                      <p className="mt-3">
                        Not Registered Yet? Click Here To{" "}
                        <Link
                          className="ms-2"
                          to={"/register"}
                          style={{ textDecoration: "none", color: "blue" }}
                        >
                          REGISTER
                        </Link>{" "}
                      </p>
                    </div>
                  )}
                </form>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}

export default Auth;
