import CardInformation from "./CardInformation";

interface IStepThreeProps {
    textLeft: string,
    textRight: string,
    titleLeft: string,
    titleRight: string,
}

const AllInformationThree = ({ textLeft, textRight, titleLeft, titleRight, }: IStepThreeProps) => {
    return (
        <>
            <CardInformation left={true} textLeft={textLeft} textRight={""} titleLeft={titleLeft} titleRight={""}  />
            <CardInformation left={false} textRight={textRight} textLeft={""} titleLeft={""} titleRight={titleRight}  />
            <h2 className="flex justify-center pt-6 text-red-500">Lembre-se, você pode voltar ao passo anterior e rever a explicação</h2>
        </>
    )
}

export default AllInformationThree