import imgLogo from '../../assets/img/imgLogo.svg'
import toggleMenu from '../../assets/img/toggleMenu.svg'
import LoginButton from '../LoginButton'
import './style.css'

const Header = () => {
  return (
    <header>
        <nav>
          <img className="imgLogo" src={imgLogo} alt="" />
          <div className="menu">
              <i className="toggleBar">
              <img className="imgLogo" src={toggleMenu} alt="" />
              </i>
              <p>Menu</p>
          </div>
          <input placeholder='Search' className="inputBusca" type="search"/>
          <LoginButton />
        </nav>
        
    </header>
    
  );
}

export default Header