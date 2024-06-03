import AllInformationThree from "./AllInformationThree"
interface ICardStepThreeProps {
  textLeft: string,
  textRight: string,
  titleLeft: string,
  titleRight: string,
}
export const CardStepThree = ({textLeft, textRight, titleRight, titleLeft}:ICardStepThreeProps) => {
  return (
    <section className="text-gray-600 body-font" >
      <div className="container px-5 py-10 mx-auto">
        <AllInformationThree textLeft={textLeft} textRight={textRight} titleLeft={titleLeft} titleRight={titleRight} />
        
      </div>
    </section >
  )
}
