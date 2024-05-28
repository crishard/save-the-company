import Conteudo from "./Conteudo"
import IconCard from "./IconCard"

interface ICardInformationProps {
    left: boolean,
    text: string
}

const CardInformation = ({ left }: ICardInformationProps) => {


    if (left) {
        return (

            <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                <Conteudo title={"The 400 Blows"} text={"Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine."} />
                <IconCard />
            </div>
        )
    }

    return (
        <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
            <IconCard />
            <Conteudo title={"The 400 Blows"} text={"Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine."} />
        </div>
    )
}

export default CardInformation