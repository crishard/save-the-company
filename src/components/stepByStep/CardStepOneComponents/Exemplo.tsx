interface IExemploProps {
  exemplo: string
}
const Exemplo = ({ exemplo }: IExemploProps) => {
  return (
    <p className="mt-3 text-indigo-500 inline-flex items-center">{exemplo}</p>
  )
}

export default Exemplo