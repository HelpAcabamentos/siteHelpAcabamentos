import React,{Component} from "react";
import PropTypes from 'prop-types';
import "./galeriaFotos.css";
import Casas from "./listagem/casas";
import Piscinas from "./listagem/piscinas";
import Telhados from "./listagem/telhados";
import Servicos from "./listagem/servicos";

//imgs// 
import Casa from "../../images/casas/01.jpg";
import Piscina from "../../images/piscinas/2.jpg";
import Telhado from "../../images/telhados/3.jpg";
import Servico from "../../images/servicos/servicos1.jpg";


class Galeria extends Component {

    constructor(props) {
        super(props);
        this.state = {
            casas: false,
            piscinas: false,
            telhados: false,
            servicos: false,
            images: this.props.images,
        };
    }

    onClickCasas = () => {
        const { casas } = this.state; 
        this.setState({
            casas: !casas,
        })
    }

    onClickPiscinas = () => {
        const { piscinas } = this.state; 
        this.setState({
            piscinas: !piscinas,
        })
    }

    onClickTelhados = () => {
        const { telhados } = this.state; 
        this.setState({
            telhados: !telhados,
        })
    }

    onClickServicos = () => {
        const { servicos } = this.state; 
        this.setState({
            servicos: !servicos,
        })
    }

    render() {
        return (
            <div className="galeria-container-flex" >
                <div className="galeria-thumb-casas">
                    <img src={Casa} onClick={this.onClickCasas}/> 
                        {this.state.casas && <Casas/> }
                    <h2>Casas</h2>
                </div>
                <div className="galeria-thumb-piscinas">
                    <img src={Piscina} onClick={this.onClickPiscinas}/> 
                        {this.state.piscinas && <Piscinas/> }
                    <h2>Piscinas</h2>
                </div>
                <div className="galeria-thumb-telhados">
                    <img src={Telhado} onClick={this.onClickTelhados}/> 
                        {this.state.telhados && <Telhados/> }
                    <h2>Telhados</h2>
                </div>
                <div className="galeria-thumb-servicos">
                    <img src={Servico} onClick={this.onClickServicos}/> 
                        {this.state.servicos && <Servicos/> }
                    <h2>Serviços Realizados</h2>
                </div>
            </div>
        );
    }

}

Galeria.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            thumbnail: PropTypes.string.isRequired,
            srcset: PropTypes.array,
            caption: PropTypes.string,
            thumbnailWidth: PropTypes.number.isRequired,
            thumbnailHeight: PropTypes.number.isRequired,
            isSelected: PropTypes.bool
        })
    ).isRequired
};

Galeria.defaultProps = {
    images: ([
        {
            src: "https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_b.jpg",
            thumbnail: "https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_n.jpg",
            thumbnailWidth: 240,
            thumbnailHeight: 320,
            caption: "8H (gratisography.com)",
            thumbnailCaption: "8H"
        },
        {
            src: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg",
            thumbnail: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 190,
            caption: "286H (gratisography.com)",
            thumbnailCaption: "286H"
        },
        {
            src: "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg",
            thumbnail: "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 148,
            caption: "315H (gratisography.com)",
            thumbnailCaption: "315H"
        },
        {
            src: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg",
            thumbnail: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 213,
            caption: "201H (gratisography.com)",
            thumbnailCaption: "201H"
        },
        {
            src: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg",
            thumbnail: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_n.jpg",
            thumbnailWidth: 248,
            thumbnailHeight: 320,
            caption: "Big Ben (Tom Eversley - isorepublic.com)",
            thumbnailCaption: "Big Ben"
        },
        {
            src: "https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_b.jpg",
            thumbnail: "https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 113,
            caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)",
            thumbnailCaption: (<span style={{color: "darkred"}}>Red Zone - <i>Paris</i></span>)
        },
        {
            src: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg",
            thumbnail: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_n.jpg",
            thumbnailWidth: 313,
            thumbnailHeight: 320,
            caption: "Wood Glass (Tom Eversley - isorepublic.com)",
            thumbnailCaption: "Wood Glass"
        },
        {
            src: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg",
            thumbnail: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 213,
            caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)",
            thumbnailCaption: "Flower Interior Macro"
        }
    ])
};
export default Galeria;