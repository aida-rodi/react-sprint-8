import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
import { LogInForm } from '../components/LogInForm';

function LogIn() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [authing, setAuthing] = useState(false);

  const signInWithGoogle = async () => {
    setAuthing(true);

    signInWithPopup(auth, new GoogleAuthProvider())
      .then((response) => {
        console.log(response.user.uid);
        navigate('/starships');
      })
      .catch((error) => {
        console.log(error);
        setAuthing(false);
      });
  };

  return (
    <>
      <Navbar />
      <LogInForm
        authing={authing}
        signInWithGoogle={signInWithGoogle}
      ></LogInForm>
    </>
  );
}

export default LogIn;
