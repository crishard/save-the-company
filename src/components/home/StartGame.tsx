import { Link } from "react-router-dom"

const StartGame = () => {
  return (
    <div className="flex items-center justify-center py-6">
    <div>
      <h1 className="text-gray-900 text-4xl font-bold">Player the game</h1>
      <Link to={"/step/mission1"}>
        <button className="my-6 px-6 py-4 bg-blue-600 rounded text-white font-semibold text-2xl w-full hover:bg-slate-300 hover:text-gray-700 border-2 hover:border-gray-700">Start</button>
      </Link>
    </div>
  </div>
  )
}

export default StartGame