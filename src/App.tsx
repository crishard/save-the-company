import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import StepByStepMissionFour from "./components/stepByStep/StepByStepMissionFour"
import StepByStepMissionOne from "./components/stepByStep/StepByStepMissionOne"
import StepByStepMissionTwo from "./components/stepByStep/StepByStepMissionTwo"
import StepBystepMissionThree from "./components/stepByStep/StepBystepMissionThree"
import { Home } from "./pages/Home"
import Mission1 from "./pages/Mission1"
import Mission2 from "./pages/Mission2"
import Mission3 from "./pages/Mission3"
import Mission4 from "./pages/Mission4"
import "./styles/global.css"


function App() {

  return (
    <Router>
      <div className="bg-gray-200 h-svh">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/step/mission1" element={<StepByStepMissionOne />} />
          <Route path="/fase1" element={<Mission1 />} />
          <Route path="/step/mission2" element={<StepByStepMissionTwo />} />
          <Route path="/fase2" element={<Mission2 />} />
          <Route path="/step/mission3" element={<StepBystepMissionThree />} />
          <Route path="/fase3" element={<Mission3 />} />
          <Route path="/step/mission4" element={<StepByStepMissionFour />} />
          <Route path="/fase4" element={<Mission4 />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
