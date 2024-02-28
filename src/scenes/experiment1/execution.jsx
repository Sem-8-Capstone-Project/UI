import Topabar from "../../components/topbar";
import Title from "../../components/experiments/title";
import { useState } from "react";
import axios from "axios";
const SensitivityAnalysisExecution = () => {
    const [active, isActive] = useState(false);
    console.log(active)
    const handleOnclick = async()=>{

        if(!active){
            axios.get('https://vast-apes-melt.loca.lt').then((response)=> {
              console.log(response)
            }).catch((error)=>{
              console.log(error);
            })
            isActive((cur)=>!cur);
        }
        else{
          axios.post('https://forty-lines-wink.loca.lt/light/actions/led1_off').then((response)=> {
              console.log(response)
            }).catch((error)=>{
              console.log(error);
            })
          isActive((cur)=>!cur);
        }
        
    }
  return (
    <>
      <Topabar />
      <Title title="Sensitivity-Analysis using LED" />
      <section className="virtual-execution-container">
        <div className="led-buttons">
          <div className="led 1">
           LED 1 {" "}
            <div className="toggle-switch">
              <input
                type="checkbox"
                className="checkbox"
                name='LED 1'
                id='LED 1'
              />
              <label className="label" htmlFor='LED 1' onClick={handleOnclick}>
                <span className="inner" />
                <span className="switch" />
              </label>
            </div>
          </div>
          <div className="led 2">
           LED 2 {" "}
            <div className="toggle-switch">
              <input
                type="checkbox"
                className="checkbox"
                name='LED 2'
                id='LED 2'
              />
              <label className="label" htmlFor='LED 2' onClick={handleOnclick}>
                <span className="inner" />
                <span className="switch" />
              </label>
            </div>
          </div>
          
          
        </div>
      </section>
    </>
  );
};

export default SensitivityAnalysisExecution;
