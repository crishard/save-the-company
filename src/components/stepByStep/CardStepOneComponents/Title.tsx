import { Fade } from "react-awesome-reveal"

interface ITitleProps {
    textTitle: string,
    textSubtitle: string
}
const Title = ({ textSubtitle, textTitle }: ITitleProps) => {
    return (
        <div className="flex flex-col text-center w-full mb-20">
            <Fade cascade direction="down" duration={1000} triggerOnce={true}>
                <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">{textSubtitle}</h2>
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">{textTitle}</h1>
            </Fade>
        </div>
    )
}

export default Title