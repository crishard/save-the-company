import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { Home } from "./components/Home"
import { Mission1 } from "./components/Mission1"
import StepByStepMissionOne from "./components/stepByStep/StepByStepMissionOne"
import "./styles/global.css"


function App() {

  return (
    <Router>
      <div className="bg-gray-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/step/mission1" element={<StepByStepMissionOne />} />
          <Route path="/mission1" element={<Mission1 />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
