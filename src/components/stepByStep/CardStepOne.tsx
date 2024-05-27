import AllInformation from "./CardStepOneComponents/AllInformation"
import Title from "./CardStepOneComponents/Title"
export const CardStepOne = () => {
    return (
        <section className="text-gray-600 body-font" >
            <div className="container px-5 pt-24 pb-16 mx-auto">
                <Title textTitle={"Primeiro Passo: Declaração de Variáveis"} textSubtitle={"CHEGOU A HORA DO SHOW"} />
                <div className="flex flex-wrap -m-4">
                    <AllInformation text={"Utilizar nomes que reflitam o propósito da variável facilita a leitura e a compreensão do código por outras pessoas, além de ajudar na manutenção futura."} subtitle={"Escolha de nomes significativos:"} exemplo={'Exemplo: idade é mais claro que "i"'} />
                    <AllInformation text={"Declarar variáveis no escopo adequado: Variáveis locais são acessíveis apenas dentro do bloco de código onde foram definidas, enquanto variáveis globais podem ser acessadas por qualquer parte do programa."} subtitle={"Definição do escopo"} exemplo={''} />
                    <AllInformation text={"Declarar o tipo de dado adequado para a variável (inteiro, string, booleano, etc.) é importante para garantir que as operações realizadas com a variável sejam válidas e para aproveitar melhor os recursos de memória."} subtitle={"Inicialização e tipo de dados:"} exemplo={''} />
                </div>
            </div>
        </section >
    )
}
