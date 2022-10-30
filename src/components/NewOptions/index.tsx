import { Informations, TesteContainer, Vizinhos } from "./styles";

export function NewOptionsComponent() {
    return(
        <TesteContainer>
            <Informations>
            <img src="NewOptions.png"/>
                <span className="numberInformation">15</span>
                <span className="textInformation">Novas opções de lazer para agendar</span>
            </Informations>
            <Vizinhos>
                <a>Ver agenda →</a>
            </Vizinhos>
        </TesteContainer>
    )

}