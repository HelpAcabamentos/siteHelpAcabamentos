import React,{Component} from "react";
import "../../component/home/home.css"
import Header from "../../component/header/header.js";
import Footer from "../../component/footer/footer.js";
import Galeria from "../../component/galeriaDeFotos/galeriaFotos.js";

class Contato extends Component {
    
    render(){
        return(
            <div>
                <Header/>
                    <div className="container">
                        <Galeria/>
                    </div>
                <Footer/>
            </div>
        )
    }


}
export default Contato;