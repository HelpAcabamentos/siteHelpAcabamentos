import React,{ Component } from "react";
import "./footer.css"


class Footer extends Component {
    render(){
        return(
            <div className="footer-flex-container" >
                <div className="footer-conteudo">
                    <div className="footer-redes-sociais">
                        <label>Redes Sociais</label>
                    </div>
                    <div className="footer-localizacao">
                            <label>Localização </label> 
                    </div>
                    <div className="footer-insta">
                            <label> Galeria de fotos no Instagram</label>
                    </div>
                </div>
                <div className="footer-direitos">
                    <label> Direitos Reservados</label>
                </div>
            </div>
        )
    }


}
export default Footer;