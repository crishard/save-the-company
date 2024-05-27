import Exemplo from "./Exemplo"

interface ITextProps {
    text: string,
    textExemple: string
}

export const Text = ({ text, textExemple }: ITextProps) => {
    return (
        <div className="flex-grow">
            <p className="leading-relaxed text-base">{text}</p>
            <Exemplo exemplo={textExemple} />
        </div>
    )
}
