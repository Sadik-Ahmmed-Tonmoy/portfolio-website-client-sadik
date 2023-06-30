import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import Swal from 'sweetalert2';
import { useLocation, useNavigate, } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../AuthProvider/AuthProvider';

const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext)

  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || "/";


  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result);
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Logged In',
          showConfirmButton: false,
          timer: 1500
        })
        // saveUserToDBCollection(result.user)
        // navigate(from, {replace: true})
        // // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // // The signed-in user info.
        // const user = result.user;
        // console.log(result);

      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The AuthCredential type that was used.
      });
  }

  return (
    <div className='text-center'>
      <button onClick={handleGoogleLogin}><FcGoogle className='h-12 w-36' /></button>
    </div>
  );
};

export default SocialLogin;