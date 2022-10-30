import { Informations, TesteContainer, Vizinhos } from "./styles";

export function NewResidentsComponent() {
    return(
        <TesteContainer>
            <Informations>
            <img src="new-residents.png"/>
                <span className="numberInformation">8</span>
                <span className="textInformation">Novos moradores do prédio</span>
            </Informations>
            <Vizinhos>
                <a>Ver vizinhos →</a>
            </Vizinhos>
        </TesteContainer>
    )

}