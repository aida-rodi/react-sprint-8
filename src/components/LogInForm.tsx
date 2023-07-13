import { Link } from 'react-router-dom';
import googleLogo from '../assets/google-logo.png'

export function LogInForm(props: { signInWithGoogle: () => void; authing: boolean | undefined; }) {
  return (
    <div className='logInFormDiv'>
      <div className="logInInputsDiv">
        <div className='usernameInputDiv'>
          <input type="text" placeholder='Username' />
        </div>
        <div className='passwordInputDiv'>
          <input type="password" placeholder='Password' />
        </div>
        <button>Sign in</button>
      </div>

      

      <div className='logInDivider'>

      </div>
      <button onClick={() => props.signInWithGoogle()} disabled={props.authing}>
        <img src={googleLogo} className='googleLogo' alt="Google logo" />
      </button>
      <div className='registerNowDiv'></div>
      <Link to={'/signup'}>Don't have an account? Register now.</Link>
    </div>
  );
}
