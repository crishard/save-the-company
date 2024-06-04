import { Fade } from "react-awesome-reveal"
import Subtitle from "./Subtitle"
import { Text } from "./Text"

interface IInformationProps {
    text: string,
    subtitle: string,
    exemplo: string,
}


const AllInformation = ({ text, subtitle, exemplo }: IInformationProps) => {
    return (
        <div className="p-4 md:w-1/3">
            <Fade cascade direction="up" duration={1000} triggerOnce={true}>
                <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                    <Subtitle subtitle={subtitle} />
                    <Text text={text} textExemple={exemplo} />
                </div>
            </Fade>
        </div>
    )
}

export default AllInformation