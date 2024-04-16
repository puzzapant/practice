import {createContext,useState} from "react"; //createcontext le context create grxa 

 export const CounterContext = createContext(null); //countercontext aauta context banako

 export const CounterProvider = (props)=>{
    const[count ,setcount] = useState(0);
    return(
        <CounterContext.Provider value={{count,setcount}}>
            {props.children}
        </CounterContext.Provider>
    )
 }