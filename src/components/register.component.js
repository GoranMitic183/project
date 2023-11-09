// import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
// import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import {
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCardFooter,
  MDBValidation,
  MDBBtn,
  MDBIcon,
  // MDBSpinner,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
// import classes from './register.module.css'

export const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    email: "",
  });

  const navigate = useNavigate();

  // const register = useMutation({
  //   mutationFn: async (formData) => {
  //     const response = await axios.post(
  //       "http://localhost:3001/register",
  //       formData
  //     );
  //     if (register.isError) {
  //       return toast.error("The value you entered is not valid,try again!");
  //     }
  //     if (register.isSuccess) {
  //       navigate("/home");
  //       toast.success("Successfull registation!");
  //       return response.user;
  //     }
  //   },
  // });

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (formData.password !== formData.confirmPassword) {
  //     return toast.error("Password should match");
  //   }
  //   await register.mutate(formData);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      return toast.error("Passwords should match!");
    }

    try {
      const response = await fetch("http://localhost:3001/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        return toast.error("The value you entered is not valid, try again!");
      }

      const data = await response.json();

      navigate("/home");
      toast.success("Successful registration!");
      return data;
    } catch (error) {
      console.error("Error: ", error);
      toast.error("An error occurred during registration.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "450px",
          alignContent: "center",
          marginTop: "120px",
        }}
      >
        <MDBCard alignment="center" style={{ opacity: "0.8" }}>
          <MDBIcon fas icon="user-circle" className="fa-2x" />
          <h5>Sign Up</h5>
          <MDBCardBody>
            <MDBValidation
              onSubmit={handleSubmit}
              noValidate
              className="row g-3"
            >
              <div className="col-md-6">
                <MDBInput
                  label="First Name"
                  type="text"
                  value={formData.firstName}
                  name="firstName"
                  onChange={handleInputChange}
                  required
                  // invalid
                  validation="Please provide first name"
                />
              </div>
              <div className="col-md-6">
                <MDBInput
                  label="Last Name"
                  type="text"
                  value={formData.lastName}
                  name="lastName"
                  onChange={handleInputChange}
                  required
                  // invalid
                  validation="Please provide last name"
                />
              </div>
              <div className="col-md-12">
                <MDBInput
                  label="Email"
                  type="email"
                  value={formData.email}
                  name="email"
                  onChange={handleInputChange}
                  required
                  // invalid
                  validation="Please provide email"
                />
              </div>
              <div className="col-md-12">
                <MDBInput
                  label="Password"
                  type="password"
                  value={formData.password}
                  name="password"
                  onChange={handleInputChange}
                  required
                  // invalid
                  validation="Please provide password"
                />
              </div>
              <div className="col-md-12">
                <MDBInput
                  label="Password Confirm"
                  type="password"
                  value={formData.confirmPassword}
                  name="confirmPassword"
                  onChange={handleInputChange}
                  required
                  // invalid
                  validation="Please provide confirm password"
                />
              </div>
              <div className="col-12">
                <MDBBtn style={{ width: "100%" }} className="mt-2">
                  {/* {register.isLoading && (
                    <MDBSpinner
                      size="sm"
                      role="status"
                      tag="span"
                      className="me-2"
                    />
                  )} */}
                  Register
                </MDBBtn>
              </div>
            </MDBValidation>
          </MDBCardBody>
          <MDBCardFooter>
            <Link to="/login">
              <p>Already have an account ? Sign In</p>
            </Link>
          </MDBCardFooter>
        </MDBCard>
      </div>
    </>
  );
};
