import React, {useState} from 'react';

/*setBudgetValue es una props q envia Admin y que se modifica desde budget modal */
/*Cuando se debe enviar parametros en una funcion se debe ejecutar usando un callback,
sino la funcion que llama onclick se ejecuta cuando se renderiza el componente*/

const BugdetModal = ({sendBudgetValue}) => {
    const [valueInput, setValueInput] = useState('');
    const handleInput= (e)=> {
    setValueInput(e.target.value);  
    } 

    const antonella = () => {
        sendBudgetValue(valueInput)
        setValueInput('')
    }

    return ( 
    <> 
        <label>Ingrese el presupuesto mensual</label>
        <input type="text" value={valueInput} onChange={handleInput} />
        <button onClick={antonella}>Enviar</button>
    </>
    )
}

export default BugdetModal;