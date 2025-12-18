import { useState } from "react";

function Counter(){
    const [count,setCount] = useState(0);

    return(

        <div>
            <h2 data-testid="counter-value">Contador: {count}</h2>

            <button onClick={()=>setCount(count+1)}>
                Incrementar
            </button>

            <button onClick={()=>setCount(count-1)}>
                Decrementar
            </button>

            {count < 0  && (
                <p data-testid="negative-warning">
                    El contador es negativo
                </p>
            )}
        </div>

    );
}
export default Counter;