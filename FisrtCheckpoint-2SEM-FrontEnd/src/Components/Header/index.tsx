import imgLogo from '../../assets/img/imgLogo.svg'
import './style.css'

const Header = () => {
  return (
    <header>
        <nav>
        <img className="imgLogo" src={imgLogo} alt="" />
        <div className="menu">
            <i className="toggleBar">
            
            </i>
            <p>Menu</p>
        </div>
        <input className="inputBusca" type="search"/>
        <button className="btnLogin">Login</button>
        </nav>
        
    </header>
    
  );
}

export default Header