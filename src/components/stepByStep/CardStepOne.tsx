import AllInformation from "./CardStepOneComponents/AllInformation"
import Title from "./CardStepOneComponents/Title"

interface ICardStepOneProps {
    title: string,
    textSubtitlePage: string,
    text1: string,
    text2: string,
    text3: string,
    exemplo1: string,
    exemplo2: string,
    exemplo3: string,
    subtitle1: string,
    subtitle2: string,
    subtitle3: string,
}
export const CardStepOne = ({ title, textSubtitlePage, text1, text2, text3, exemplo1, exemplo2, exemplo3, subtitle1, subtitle2, subtitle3 }: ICardStepOneProps) => {
    return (
        <section className="text-gray-600 body-font" >
            <div className="container px-5 pt-16 pb-16 mx-auto">
                <Title textTitle={title} textSubtitle={textSubtitlePage} />
                <div className="flex flex-wrap -m-4">
                    <AllInformation text={text1} subtitle={subtitle1} exemplo={exemplo1} />
                    <AllInformation text={text2} subtitle={subtitle2} exemplo={exemplo2} />
                    <AllInformation text={text3} subtitle={subtitle3} exemplo={exemplo3} />
                </div>
            </div>
        </section >
    )
}
