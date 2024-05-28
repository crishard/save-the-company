import { Link } from "react-router-dom"
import { Button } from "../../../@/components/ui/button"
import AllInformationThree from "./CardStepThreeComponents/AllInformationThree"

export const CardStepThree = () => {
  return (
    <section className="text-gray-600 body-font" >
      <div className="container px-5 py-16 mx-auto">
        <AllInformationThree />
        <Link to='/fase1'>
          <Button className="flex mx-auto mt-20 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Ir para 1° Fase</Button>

        </Link>

      </div>
    </section >
  )
}
