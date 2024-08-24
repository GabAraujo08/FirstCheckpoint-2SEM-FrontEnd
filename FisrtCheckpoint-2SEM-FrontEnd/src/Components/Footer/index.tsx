

import imgLogo from '../../assets/img/imgLogo.svg'
import './style.css'


const Footer = () => {
    return (
        <footer>
            <img src={imgLogo} alt="" />
            <div className="navigationFooter">
                <div className="column">
                    <h3>COMPANY</h3>
                    <a href="#">About Us</a>
                    <a href="#">Partnerships</a>
                    <a href="#">FAQ</a>
                </div>
                <div className="column">
                    <h3>COMPANY</h3>
                    <a href="#">About Us</a>
                    <a href="#">Partnerships</a>
                    <a href="#">FAQ</a>
                </div>
                <div className="column">
                    <h3>COMPANY</h3>
                    <a href="#">About Us</a>
                    <a href="#">Partnerships</a>
                    <a href="#">FAQ</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer