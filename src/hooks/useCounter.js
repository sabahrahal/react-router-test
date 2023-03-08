import { useState } from "react"

export const useCounter = ( initalValue = 10 ) => {

    const [counter, setCounter] = useState( initalValue )

    const increment = (value = 1) => {
        setCounter( counter + value );
    }

    const drecrement = (value = 1) => {
        setCounter( counter - value );
    }

   const reset = () => {
        setCounter( initalValue );
    }   

    return {
        counter,
        increment,
        drecrement,
        reset

    }

}