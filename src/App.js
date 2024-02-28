import Homepage from "./scenes/homepage";
import { Route , Routes} from 'react-router-dom';
import Experiment1 from './scenes/experiment1';
import SensitivityAnalysisExecution from "./scenes/experiment1/execution";
function App() {
  return (
    <>
      <div>
        <Routes>
            <Route path='/' element = {<Homepage/>} />
            <Route path='/sensitivity-analysis' element = {<Experiment1/>}/>
            <Route path='/sensitivity-analysis/execution' element = {<SensitivityAnalysisExecution/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
