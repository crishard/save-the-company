interface ISubtilteProps {
    subtitle: string,

}
const Subtitle = ({ subtitle }: ISubtilteProps) => {
    return (
        <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">{subtitle}</h2>
        </div>
    )
}

export default Subtitle