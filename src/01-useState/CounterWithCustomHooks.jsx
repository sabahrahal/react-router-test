import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHooks = () => {

    const { counter, increment, drecrement, reset } = useCounter(); 

  return (
    <>
        <h1>Counter with Hook : { counter }</h1>
        <hr />

        <button className="btn btn-primary" onClick={ () => increment(2) }>+1</button>
        <button className="btn btn-warning" onClick={ () => drecrement(2) }>-1</button>
        <button className="btn btn-danger"  onClick={ reset }>reset</button>
    </>
  )
}
