interface IConteudoProps {
    title: string,
    text: string
}
const Conteudo = ({ title, text }: IConteudoProps) => {
    return (
        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">{title}</h2>
            <p className="leading-relaxed text-base">{text}</p>
        </div>
    )
}

export default Conteudo