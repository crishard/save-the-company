import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <main>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img className="object-cover object-center h-full w-full" src="/src/assets/images/home.jpg" alt="" />
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Herói da Empresa: Missão Resgate</h2>
                <p className="leading-relaxed text-base">Sua missão inicial é clara: mergulhar no código-fonte, identificar e corrigir os bugs que estão ameaçando o lançamento do produto. Cada bug resolvido traz o jogador mais perto de garantir o sucesso do projeto e ganhar a confiança de seus colegas de equipe.</p>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">The Catalyzer</h2>
                <p className="leading-relaxed text-base">Conforme o jogador mergulha mais fundo no projeto, ele descobre intrigas dentro da empresa, rivalidades entre equipes e até mesmo suspeitas de sabotagem. Para ter sucesso, o jogador não só precisa ser habilidoso na programação, mas também astuto o suficiente para navegar pelas complexidades do ambiente corporativo.
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Neptune</h2>
                <p className="leading-relaxed text-base">Cada linha de código escrita não apenas move o jogador mais perto de resolver os problemas técnicos, mas também avança a narrativa emocionante que envolve a empresa.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center py-6">
          <div>
            <h1 className="text-gray-900 text-4xl font-bold">Player the game</h1>
            <Link to={"/step/mission1"}>
            <button className="my-6 px-6 py-4 bg-blue-600 rounded text-white font-semibold text-2xl w-full hover:bg-slate-300 hover:text-gray-700 border-2 hover:border-gray-700">Start</button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
