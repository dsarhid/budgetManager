import React, { useState } from 'react';

const FormInput = ({ sendValueInput }) => {
    const [nameInput, setNameInput] = useState();
    const [valueInput, setValueInput] = useState();
    const [hasError, setHasError] = useState(false);
    const data = { nameInput, valueInput }
      
      function getListaFromLS() {
        let lista;
        if(localStorage.getItem('Lista') === null) {
            lista = [];
        } else {
            lista = JSON.parse(localStorage.getItem('Lista'));
        }
        return lista;
      }

    const handleSubmit = (e) => {
        e.preventDefault();
        let lista;
        lista = getListaFromLS();
        lista.push(data);
        localStorage.setItem('Lista', JSON.stringify(lista));
        
    }

//Renderiza error
    const renderError = () =>{
        setHasError(true)
    }

//Valida y Setea valor del input 
    const handleInput = (e)=> {
        const valueValide = e.target.value;
        const onlyNumber = /^([1-9])*$/;
        if(valueValide > 0 || onlyNumber.test(valueValide) ){
            setValueInput(e.target.value);
            setHasError(false)
        }
        else{
        renderError();}
    }

    //Envia valor del input a la pagina principal
    const sendInputForms = () => {
        sendValueInput(valueInput);
    }

    return (
        <>
        <h2>Ingresar gasto</h2>
            <div className="border border-light p-4 mt-3 mx-4">
                    <form onSubmit = {handleSubmit}>
                        <label>Ingrese el nombre del gasto:</label>
                        <div>
                            <input
                                type="text"
                                placeholder="Nombre"
                                value={nameInput}
                                className="col-12"
                                required
                                onChange = {(e) => setNameInput(e.target.value)}
                            />
                        </div>
                        <label>Ingrese el monto gastado:</label>
                        <div>
                            <input
                                type="text"
                                placeholder="Monto"
                                value={valueInput}
                                className="col-12"
                                required
                                onChange = {handleInput}
                            />
                            <label className={`hasError${hasError ? '-active' : ''}`}>Solo se pueden ingresar valores numericos mayores a cero</label>
                        </div>
                        <div>
                            <button type="submit" value="ingresar" className="mt-3 btn btn-danger" onClick={sendInputForms}>Ingresar</button>
                        </div>
                    </form>
            </div>
        </>
    );
}

export default FormInput;