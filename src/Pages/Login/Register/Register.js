import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import  {Link, useNavigate} from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase-init'
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

      const [updateProfile, updating] = useUpdateProfile(auth);

      if (loading || updating){
        return <Loading></Loading>
      }

    const handleRegister =async (event) => {
       event.preventDefault();
       const name = event.target.name.value;
       const email = event.target.email.value;
       const password = event.target.password.value;

       await createUserWithEmailAndPassword(email, password);
       await updateProfile({ displayName: name });
       console.log('Updated profile');
       navigate('/')
       
    }

    
    const navigateLogin = () => {
        navigate('/login')
    }
    return (
        <div className='w-50 mx-auto'>
            <h3 className='my-3'>Please Register</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control name='name' type="text" placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control name= 'password' type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3 d-flex ms-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={() => setAgree(!agree)}  className= {  agree ? 'ps-2' : 'ps-2 text-danger'  } type="checkbox" label="Accept Terms and Condition" />
                </Form.Group>
                <Button disabled = {!agree}  variant="dark w-50" type="submit">
                    Register
                </Button>
            </Form>
            <p className='my-3'>New to Personal Trainer! <Link className='text-decoration-none ' to= '/login' onClick={navigateLogin} >Please Login</Link> </p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;