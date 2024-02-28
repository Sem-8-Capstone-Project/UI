import ldr from '../../../assets/ldr.jpeg'
const CircuitDiagram = ()=>{
        return(
            <>
                <div class='Circuit-Diagram'>
                    <h3>Circuit Diagram</h3>
                    <div className= 'Image container' style={
                        {
                            backgroundColor: '#DCDCDC'
                        }
                    }>
                        <img className='circuit-image' src={ldr} alt='Circuit diagram'/>
                    </div>
                    
                 </div>

            </>
        )
}

export default CircuitDiagram;