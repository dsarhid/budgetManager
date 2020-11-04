import React, {useState, useEffect} from 'react';
import {Button,Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from  'reactstrap';

const BugdetModal = ({sendBudgetValue, budgetValue}) => {
//Define los props
    const [valueInput, setValueInput] = useState();
    const [status, setStatus] = useState({open:true});
    const [hasError, setHasError] = useState(false);
    const [modal, setModal] = useState(budgetValue === 0);
    
    

    useEffect(() => {
        const data = localStorage.getItem("presupuesto");
        if (data) {
            setValueInput(JSON.parse(data));
        }
      }, []);
    
    useEffect(() => {
        localStorage.setItem("presupuesto", JSON.stringify(valueInput));
      });

//Renderiza error
    const renderError = () =>{
        setHasError(true)
    }

//Valida y Setea valor del input 
    const handleInput= (e)=> {
    const valueValide = e.target.value;
    const onlyNumber = /^([1-9])*$/;
    if(valueValide > 0 || onlyNumber.test(valueValide) )
    {
    setValueInput(e.target.value);
    setHasError(false) }
    
    else{
    renderError();
    }
    }
    

//Cierra modal cuando se ingresa monto en el input
    const closeModal= () => {
        if (status.open){
                status.open=false;
        }
    }

//Envia valor del input a la pagina principal y cierra el modal
    const sendBugInput = () => {
        sendBudgetValue(valueInput);
        closeModal();
    }

return ( 
<>
<Modal  className="colorModal" isOpen={status.open}>
    <ModalHeader>
    <Label className="text-danger">Ingrese el presupuesto mensual</Label>
    </ModalHeader>
    <ModalBody>
    <Input className="inputColor" type="text" value={valueInput} onChange={handleInput} />
    <Label className={`hasError${hasError ? '-active' : ''}`}>Solo se pueden ingresar valores numericos mayores a cero</Label>
    </ModalBody>
    <ModalFooter>
    <Button className="bg-danger" onClick={sendBugInput}>Enviar</Button>
    </ModalFooter>
</Modal>
</>
    )
}

export default BugdetModal;