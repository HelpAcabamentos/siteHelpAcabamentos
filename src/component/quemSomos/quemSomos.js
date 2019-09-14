import React,{Component} from "react";
import "./quemSomos.css";
import Teste from "../../images/teste.jpg";


class QuemSomos extends Component {

    render(){
        return(
                <div className="quem-somos-flex">
                    <div className="quem-somos-textos">
                        <div className="quem-somos-texto">
                        Longe de ser uma única e última atividade trabalhosa ,
                        mais a  construção em larga escala é um repto da multitarefa humana.
                        Tendo que qualificar profissionais. Normalmente,
                        o trabalho é controlado por um gerente de projeto,
                        e supervisionado por um gerente de construção,
                        engenheiro ou arquiteto do projeto. 
                        Para a execução bem sucedida de um projeto, um planejamento eficaz é essencial. 
                        As pessoas envolvidas com o projeto e execução da infra-estrutura em questão deve considerar a Mão De Obra ensencial, organizada e limpa. 
                        E  bem sucedido a programação e o orçamento.  Segurança no canteiro de obras,  disponibilização de equipe treinada e flexivel.
                        Para atingirmos um nível alto de excelência em qualidade e satisfação de ambas as partes não é conveniente atrasos de materiais e mão de obra.

                        </div>
                    </div>
                    <div className="quem-somos-foto">
                        <img className="quem-somos-img" src={Teste}></img>
                    </div>
                </div>
        )
    }


}
export default QuemSomos;