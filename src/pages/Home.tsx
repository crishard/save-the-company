import img from "../assets/images/home.jpg"
import SectionInfo from "../components/home/SectionInfo"
import StartGame from "../components/home/StartGame"
export const Home = () => {
  return (
    <main>
      <section className="text-gray-600 body-font bg-gray-200">
        <div className="container px-5 py-12 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img className="object-cover object-center h-full w-full" src={img} alt="" />
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <SectionInfo title={"Neptune"} text={"Cada linha de código escrita não apenas move o jogador mais perto de resolver os problemas técnicos, mas também avança a narrativa emocionante que envolve a empresa."}/>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <SectionInfo title={"Neptune"} text={"Cada linha de código escrita não apenas move o jogador mais perto de resolver os problemas técnicos, mas também avança a narrativa emocionante que envolve a empresa."}/>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <SectionInfo title={"Neptune"} text={"Cada linha de código escrita não apenas move o jogador mais perto de resolver os problemas técnicos, mas também avança a narrativa emocionante que envolve a empresa."}/>
            </div>
          </div>
        </div>

        <StartGame />
      </section>
    </main>
  )
}
