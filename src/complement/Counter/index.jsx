import React, {useState} from "react";

function Counter({ setShowMessage }){
    const [count, setCount] = useState(0);

    const increment = () => { // fonction pour incrementer le compteur
        setCount(count+ 1); // maj du compteur pour ajouter 1
    };

    const decrement = () => { // fonction pour decrementer
        if (count > 0){ 
            setCount(count - 1);
        }else {
            setShowMessage(true); // Affiche le message lorsque le compteur est décrémenté à zéro
            setTimeout(() => setShowMessage(false), 3000); // Cache le message après 3 secondes
          }
    };

    return (
        <div>
            <h2>Counter : {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default Counter;