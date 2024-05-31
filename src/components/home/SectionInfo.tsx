interface ISectionInfoProps {
    title: string,
    text: string
}
const SectionInfo = ({ title, text}: ISectionInfoProps) => {
    return (
        <div className="flex-grow">
                <h2 className="text-gray-900 text-xl title-font font-medium mb-3">{title}</h2>
                <p className="leading-relaxed text-base">{text}</p>
              </div>
    )
}

export default SectionInfo