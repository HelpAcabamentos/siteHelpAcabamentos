import React,{Component} from "react";
import "./header.css"
import { Link } from "react-router-dom";

//img
import logo from "../../images/logo.png"


class Header extends Component {

    render(){
        return(
            <div className="nav-bar">
                    <div className="logo">
                    <Link to="/">
                        <img src={logo}/>
                    </Link>
                    </div>
                <div className="nav-bar-container-menu">
                    <div className="nav-bar-home">
                        <Link to="/"><h1>Home</h1></Link>
                    </div>
                    <div className="nav-bar-quem-somos">
                        <Link to="/quem-somos"><h1>Quem Somos</h1></Link>
                    </div>
                    <div className="nav-bar-fotos">
                        <Link to="/galeria-de-fotos"><h1>Galeria de Fotos</h1></Link>
                    </div>
                    <div className="nav-bar-contatos">
                        <Link to="/contatos"><h1>Contatos</h1></Link>
                    </div>
                </div>
            </div>
        )
    }


}
export default Header;