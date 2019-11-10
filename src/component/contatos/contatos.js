import React,{Component} from "react";
import "./contatos.css";


class Contatos extends Component {

    render(){
        return(
                <div className="contatos-container-flex">
                    <div className="contatos-mapa">
                        <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1637.3526078685975!2d-46.97866451664836!3d-22.88634542849414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8d0212d05b0e5%3A0x626999d7349f97d9!2sHelp%20Acabamentos%20e%20Constru%C3%A7%C3%B5es!5e0!3m2!1spt-BR!2sbr!4v1566697365992!5m2!1spt-BR!2sbr" 
                        frameborder="0"  
                        allowfullscreen=""
                        style={{ width: "100%", height: "400px"}}></iframe>
                        </div>
                    <div className="contatos-info">
                        <label> R. Cons Antônio Prado, 1810 </label>
                        <label>Telefone:  (19) 3381-3973</label>
                        <label>Email: helpacabamentos@gmail.com </label>
                    </div>
                </div>
        )
    }


}
export default Contatos;