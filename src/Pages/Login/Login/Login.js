import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import auth from '../../../firebase-init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css'

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if(loading || sending){
        return <Loading></Loading>
    }

    let errorElement;
    if (error) {

        errorElement = <div>
            <p className='text-danger'>Error: {error.message}</p>
        </div>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
       if (email){
        await sendPasswordResetEmail(email);
        toast('Sent email');
       }
       else{
        toast('please enter your email address')
       }
    }

    const navigateRegister = () => {
        navigate('/register')
    }
    return (
        <div className='w-75 mx-auto login'>
            <h3 className='my-3 p-3'>Please Login</h3>
            <Form onSubmit={handleSubmit} >
                <Form.Group className="mb-3 w-75 mx-auto" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3 w-75 mx-auto" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Enter Password" />
                </Form.Group>
                <Button variant="dark w-50 " type="submit">
                    Login
                </Button>
            </Form>
            {errorElement}
            <p className='my-3'>New to Personal Trainer! <Link className='text-decoration-none' to='/register' onClick={navigateRegister} >Please Register</Link> </p>
            <p>Forget Password! <button className='btn btn-link text-decoration-none ' type='reset' onClick={resetPassword} >Reset Password</button> </p>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;