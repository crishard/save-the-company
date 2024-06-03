import { FaGrinWink } from "react-icons/fa";
import { HiInformationCircle } from "react-icons/hi";
import { IoIosAlert } from "react-icons/io";
import img from "../assets/images/home.jpg";
import SectionInfo from "../components/home/SectionInfo";
import StartGame from "../components/home/StartGame";
export const Home = () => {
  return (
    <main>
      <section className="text-gray-600 body-font bg-gray-200">
        <div className="container px-5 py-12 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img className="object-cover object-center h-full w-full" src={img} alt="" />
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div className="flex flex-col mb-10 lg:items-start items-center ">
              <IoIosAlert className="text-indigo-500 text-4xl mb-2" />
              <SectionInfo title={"Atenção"} text={"Bem-vindo à SiliconTech Inc., uma empresa de tecnologia líder no mercado. Recentemente, enfrentamos uma crise devido a problemas graves em nosso software principal. Se não agirmos rapidamente, a empresa corre o risco de falir. É hora de entrar em ação e salvar a SiliconTech!"} />
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <HiInformationCircle className="text-indigo-500 text-4xl mb-2" />
              <SectionInfo title={"Informação"} text={"No primeiro nível, você será enviado para o departamento de desenvolvimento de software. Aqui, você encontrará problemas de código em nossa plataforma de e-commerce. Corrija esses erros para garantir que nossos clientes possam fazer compras sem problemas."} />
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <FaGrinWink className="text-indigo-500 text-4xl mb-2" />
              <SectionInfo title={"Hora de começar"} text={"Conforme você avança no jogo, descobrirá segredos sombrios sobre a origem dos erros de código e os interesses ocultos por trás da crise da SiliconTech. Está preparado para enfrentar os desafios e salvar a empresa?"} />
            </div>
          </div>
        </div>

        <StartGame />
      </section>
    </main>
  )
}
