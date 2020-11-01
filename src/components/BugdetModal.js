import React, {useState} from 'react';
import {Button,Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from  'reactstrap';

const BugdetModal = ({sendBudgetValue}) => {
    //Define los props
    const [valueInput, setValueInput] = useState('');
    const [state, setState] = useState({open:true});

//Renderiza error
    const renderError = () =>{
alert("Solo puede ingresar numeros mayores a cero");
    }

//Valida y Setea valor del input 
    const handleInput= (e)=> {
    const valueValide = e.target.value;
    const onlyNumber = /^([0-9])*$/;
    if(valueValide > 0 || onlyNumber.test(valueValide) )
    {
    setValueInput(e.target.value); }
    else{
    renderError();}
    }

   //Cierra modal cuando se ingresa monto en el input
    const closeModal= () => {
    if (state.open)
    {
        state.open=false;
    }
    }

   //Envia valor del input a la pagina principal, limpia el input y cierra el modal
    const sendBugInput = () => {
        sendBudgetValue(valueInput);
        setValueInput('');
        closeModal();
    }



return ( 
<>
<Modal  className="colorModal" isOpen={state.open}>
    <ModalHeader>
    <Label className="text-danger">Ingrese el presupuesto mensual</Label>
    </ModalHeader>
    <ModalBody>
    <Input className="inputColor" type="text" value={valueInput} onChange={handleInput} />
    <Label id="messagge-error"className="small text-danger valideInputValue">Solo se pueden ingresar valores numericos mayores a cero</Label>
    </ModalBody>
    <ModalFooter>
    <Button className="bg-danger" onClick={sendBugInput}>Enviar</Button>
    </ModalFooter>
</Modal>
</>
    )
}

export default BugdetModal;