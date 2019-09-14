import React,{Component} from "react";
import "../../component/home/home.css"
import Header from "../../component/header/header.js";
import Footer from "../../component/footer/footer.js";
import QuemSomos from "../../component/quemSomos/quemSomos.js";

class Somos extends Component {

    render(){
        return(
            <div>
                <Header/>
                    <div className="container">
                        <QuemSomos/>
                    </div>
                <Footer/>
            </div>
        )
    }


}
export default Somos;