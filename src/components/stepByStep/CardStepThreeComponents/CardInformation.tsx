import { Fade } from "react-awesome-reveal";
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
                <Fade duration={1500} triggerOnce={true} direction="right">
                    <Conteudo title={titleLeft} text={textLeft} />
                </Fade>
                <Fade duration={1500} triggerOnce={true} direction="right">

                    <IconCard />
                </Fade>
            </div>
        )
    }

    return (
        <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
            <Fade duration={1500} triggerOnce={true} direction="left">
                <IconCard />
            </Fade>
            <Fade duration={1500} triggerOnce={true} direction="left">
                <Conteudo title={titleRight} text={textRight} />
            </Fade>
        </div>
    )
}

export default CardInformation