import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'

const Navbar = () => {
  return (
    <nav>
      <div className='navbarTopDiv'>
        <button className='logoButton'>
          <Link to={'/'}>
            <img src={logo} className='logo' alt="Star Wars logo" />
          </Link>
        </button>
        <div className='loginAndSignupDiv'>
          <button>
            <Link to={'/login'}>LOG IN</Link>            
          </button>
          <p className='divider'>//</p>
          <button>
            <Link to={'/signup'}>SIGN UP</Link>
          </button>
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

export default Navbar
