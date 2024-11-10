import React, { useState } from 'react'
import { Button,Form, Container } from 'react-bootstrap'
import {  Link } from 'react-router-dom'
import axiosInstance from '../api/axiosInstance';
import { endPoint } from '../api/api_url';

const Login = () => {
    const [inputState, setState] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState("");

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setState({ ...inputState, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const api = endPoint.user;

        axiosInstance.get(api)
            .then(res => {
                const users = res.data;
                const userExists = users.find(user => user.email === inputState.email);

                if (userExists) {
                    alert('Login Successful');
                } else {
                    setError("Create Account First");
                }
            })
            .catch(err => {
                console.error("Axios Error", err);
                alert('Login Failed. Please try again.');
            });
    };
  return (
    <div
    className="bg-light py-5"
    style={{
        // background: `url('https://static.vecteezy.com/system/resources/previews/017/033/089/non_2x/abstract-background-design-suitable-for-ppt-backgrounds-abstract-ppt-backgrounds-free-vector.jpg') no-repeat center center/cover`,
        height: '80vh',
    }}
>
    <Container className="shadow-lg rounded p-4" style={{ backgroundColor: '#ffffffcc', maxWidth: '500px' }}>
        <h1 className='text-center text-primary mb-4'>Login Form</h1>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                {/* <Form.Label>Enter Your Email:</Form.Label> */}
                <Form.Control
                    type="email"
                    placeholder="Enter Your Email"
                    name='email'
                    onChange={changeHandler}
                    className="border-success"
                />
                {/* {errors.mail && <p className='text-danger text-end'>{errors.mail}</p>} */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                {/* <Form.Label>Password:</Form.Label> */}
                <Form.Control
                    type="password"
                    placeholder="Enter Your Password"
                    name='password'
                    onChange={changeHandler}
                    className="border-success"
                />
                {error && <p className="text-danger">{error}</p>}
                {/* {errors.pwd && <p className='text-danger text-end'>{errors.pwd}</p>} */}
            </Form.Group>

            <Button variant="success" type="submit" className="w-100 mb-3">
                Login
            </Button>
            <div className="text-center">
                <Form.Text className="text-muted">
                    Don't have an account? <Link to="/myregform-page">Sign Up</Link>
                </Form.Text>
            </div>
        </Form>
    </Container>
</div>
  )
}

export default Login