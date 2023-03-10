import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase-init';
import google1 from '../../../images/social/google1.png'
import Loading from '../../Shared/Loading/Loading';
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    let errorElement ;
     
    if(loading){
        return <Loading></Loading>
    }

    if (error) {
      
      errorElement = <div>
            <p className='text-danger'>Error: {error.message}</p>
          </div>
      }
      
      if(user){
        navigate('/')
      }

    return (
        <div>
            <div className='d-flex align-items-center '>
                <div style={{height: '1px'}} className='w-50 bg-dark'></div>
                <p className = 'mt-2 px-2'>or</p>
                <div style={{height: '1px'}} className='w-50 bg-dark'></div>
            </div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-dark w-50 my-2'>
                    <img style={{height:'20px'}} src= {google1} alt="" />
                    <span className='px-1'>Google Sign In</span>
                 </button>
            </div>
        </div>
    );
};

export default SocialLogin;