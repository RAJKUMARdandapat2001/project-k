import React, { useState } from 'react';
import { Container, Button, Form } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import { endPoint } from '../api/api_url';
import axiosInstance from '../api/axiosInstance';

const SignUp = () => {
    const [inputState, setState] = useState({
        firstname: "",
        lastname: "",
        // username: "",
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        firstname: "",
        lastname: "",
        // username: "",
        email: "",
        password: "",
    });

    const changeHandler = (event) => {
        const { name, value } = event.target;
        let errMsg = { ...errors };

        switch (name) {
            case "firstname":
                errMsg.firstname = value.length < 4 ? "Min 4 characters" : "";
                break;
            case "lastname":
                errMsg.lastname = value.length < 4 ? "Min 4 characters" : "";
                break;
            case "email":
                errMsg.email = value.length < 5 ? "Min 5 characters" : "";
                break;
            case "password":
                errMsg.password = value.length < 5 ? "Min 5 characters" : "";
                break;
            default:
                break;
        }

        setState({ ...inputState, [name]: value });
        setErrors({ ...errors, ...errMsg });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (Object.values(errors).some(errMsg => errMsg)) {
            alert("Please fix the errors before submitting.");
            return;
        }

        const api = endPoint.user;
        console.log("Submitting data:", inputState);

        axiosInstance.post(api, inputState)
            .then(res => {
                console.log("Registration successful", res.data);
                alert('Registration Successful');
                setState({
                    firstname: "",
                    lastname: "",
                    // username: "",
                    email: "",
                    password: "",
                });
            })
            .catch(err => {
                console.error("Error during registration:", err);
                if (err.response) {
                    // The server responded with a status other than 2xx
                    console.error("Error response data:", err.response.data);
                    console.error("Error response status:", err.response.status);
                    alert(`Registration Failed: ${err.response.data.message || 'Please try again.'}`);
                } else if (err.request) {
                    // The request was made, but no response was received
                    console.error("No response received:", err.request);
                    alert('Registration Failed: No response from server. Please try again.');
                } else {
                    // Something happened in setting up the request
                    console.error("Error message:", err.message);
                    alert(`Registration Failed: ${err.message}`);
                }
            });
    };

    return (
        <div className="bg-light py-5" style={{height: '80vh'}}>
        
        <Container className="shadow-lg rounded p-4" style={{ backgroundColor: '#ffffffcc', maxWidth: '500px' }}>
            <h1 className='text-center text-primary mb-4'>Register Form</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    {/* <Form.Label>First Name</Form.Label> */}
                    <Form.Control
                        type="text"
                        autoComplete='off'
                        name="firstname"
                        placeholder="Enter First Name"
                        value={inputState.firstname}
                        onChange={changeHandler}
                    />
                    {errors.firstname && <p className="text-danger">{errors.firstname}</p>}
                </Form.Group>

                <Form.Group className="mb-3">
                    {/* <Form.Label>Last Name</Form.Label> */}
                    <Form.Control
                        type="text"
                        name="lastname"
                        autoComplete='off'
                        placeholder="Enter Last Name"
                        value={inputState.lastname}
                        onChange={changeHandler}
                    />
                    {errors.lastname && <p className="text-danger">{errors.lastname}</p>}
                </Form.Group>

                <Form.Group className="mb-3">
                    {/* <Form.Label>Email</Form.Label> */}
                    <Form.Control
                        type="text"
                        autoComplete='off'
                        name="email"
                        placeholder="Enter Email"
                        value={inputState.email}
                        onChange={changeHandler}
                    />
                    {errors.email && <p className="text-danger">{errors.email}</p>}
                </Form.Group>

                <Form.Group className="mb-3">
                    {/* <Form.Label>Password</Form.Label> */}
                    <Form.Control
                        type="password"
                        name="password"
                        autoComplete='off'
                        placeholder="Enter Password"
                        value={inputState.password}
                        onChange={changeHandler}
                    />
                    {errors.password && <p className="text-danger">{errors.password}</p>}
                </Form.Group>

                <Button variant="success" type="submit">
                    Sign Up
                </Button>
                <p>
                    Already Have An Account? <Link to="/loginpage">Login here</Link>
                </p>
            </Form>
        </Container>
        </div>
    );
};

export default SignUp;