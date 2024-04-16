import react,{useContext}from 'react';
import { CounterContext } from '../Context/Counter';


 const Counter = () => {
    const countercontext = useContext(countercontext)
    return(
        <div>
            <button onClick={()=>countercontext.setcount(countercontext.count + 1)}>Increment</button>
            <button onClick={()=>countercontext.setcount(countercontext.count-1)}>Decrement</button>
        </div>
    )

 }
 export default Counter;