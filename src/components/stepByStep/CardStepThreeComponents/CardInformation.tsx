import Conteudo from "./Conteudo";
import IconCard from "./IconCard";

interface ICardInformationProps {
    left: boolean,
    textLeft: string,
    textRight: string,
    titleLeft: string,
    titleRight: string,

}

const CardInformation = ({ left, textLeft, textRight, titleRight, titleLeft }: ICardInformationProps) => {


    if (left) {
        return (

            <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                <Conteudo title={titleLeft} text={textLeft} />
                <IconCard  />
            </div>
        )
    }

    return (
        <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
            <IconCard />
            <Conteudo title={titleRight} text={textRight} />
        </div>
    )
}

export default CardInformation