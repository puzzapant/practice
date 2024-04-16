import{useContext, usecontext} from "react";
import './App.css';
import Counter from "./Components/Counter";
import { CounterContext } from "./Context/Counter";

function App() {
const counterstate =useContext(CounterContext);
  return (
    <div className='App'>
    <h1>Count:{counterstate.count}</h1>
    <Counter />
    <Counter />
    <Counter />
    <Counter />
    </div>
  )
}

export default App
