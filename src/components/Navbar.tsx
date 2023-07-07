import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'

export function Navbar() {
  return (
    <nav>
      <div className='navbarTopDiv'>
        <button className='logoButton'>
          <Link to={'/'}>
            <img src={logo} className='logo' alt="logo" />
          </Link>
        </button>
        <div className='loginAndSignupDiv'>
          <button>LOG IN</button>
          <p className='divider'>//</p>
          <button>SIGN UP</button>
        </div>
      </div>

      <div className='navbarPageNavigationDiv'>
        <button className='navbarHomeButton'>
          <Link to={'/'}>HOME</Link>
        </button>
        <button className='navbarStarshipsButton'>
          <Link to={'/starships'}>STARSHIPS</Link>
        </button>
      </div>
    </nav>
  )
}
