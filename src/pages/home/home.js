import React,{Component} from "react";
import "../../component/home/home.css"
import Header from "../../component/header/header.js";
import SliderClientes from "../../component/sliderClientes/slider-clientes.js";
import SliderHome from "../../component/sliderHome/slider-home.js";
import Footer from "../../component/footer/footer.js";

class Home extends Component {

    render(){
        return(
            <div>
                <Header/>
                    <div className="container">
                        <SliderHome/>
                        <SliderClientes/>
                    </div>
                <Footer/>
            </div>
        )
    }


}
export default Home;