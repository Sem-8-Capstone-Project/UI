import Topabar from "../../components/topbar";
import Title from "../../components/experiments/title";
import Aim from "../../components/experiments/Sensitivity-Analysis/aim";
import Objectives from "../../components/experiments/Sensitivity-Analysis/objectives";
import Theory from "../../components/experiments/Sensitivity-Analysis/theory";
import CircuitDiagram from "../../components/experiments/Sensitivity-Analysis/circuitDiagram";
import { useNavigate } from "react-router-dom";

import "./styles.css";



const Experiment1 = ()=>{
    const navigate = useNavigate();
    const handleOnclick = async()=>{
        try{
            const response = await fetch('http://localhost:5000/start',{
              method: 'GET',
              credentials: "include"
            })
            if(response.status===200 || response.status==='200'){
              navigate('/sensitivity-analysis/execution');
            }
            else{
              alert("Please Try Again after 5 minutes");
            }
            
          }catch(e){
            console.log(e);
          }
    }
        return (
            <>
                <Topabar/>
                <Title title="Sensitivity-Analysis using LED"/>
                <section className="experiment-details">
                    <Aim/>
                    <Objectives/>
                    <Theory/>
                    <CircuitDiagram/>
                    <div className="virtual-execution-button" style={{
                        textAlign : "right",
                        marginRight :"10px",
                        marginTop : "10px"
                    }}>
                            <button className="virtual-button" onClick={handleOnclick} style={{
                                backgroundColor: "#6CB4EE",
                                height: "40px",
                                borderRadius: "5px",
                                fontFamily: 'Helvetica'
                            }}>
                                Go to virtual Execution
                            </button>
                    </div>
                </section>
            </>
        )
}

export default Experiment1;