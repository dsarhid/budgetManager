import React, {useEffect, useState} from 'react';
import BugdetModal from './BugdetModal';
import FormInput from './FormInput';
import FormList from './FormList';
import {Col, Row} from  'reactstrap';


const AdminPage = () => {

    /*Definiendo estado y modificador de estado: bugdetValue*/
    const [budgetValue, setBudgetValue] = useState(localStorage.getItem("presupuesto") || 0);
    const [valueInput, setValueInput] = useState(0);
    const [colorMensual, setColorMensual] = useState('');
    const [colorActual, setColorActual] = useState('');

    let resta = (localStorage.getItem("resta"));
    resta = (resta - valueInput);
    let resultado = (budgetValue - (resta)*-1);
    

    useEffect(() => {
        localStorage.setItem("resta", (resta));
      });

    // Renderizado de colores
    useEffect(() => {
        if(budgetValue>=500){
            setColorMensual('Green');
        }
        else{
            if(budgetValue>=100){
                setColorMensual('Yellow');
            }
            else{
                setColorMensual('Red');
            }
        }
    });

    useEffect(() => {
        if(resultado>=500){
            setColorActual("Green");
        }
        else{
            if(resultado>=100){
                setColorActual("Yellow");
            }
            else{
                setColorActual("Red");
            }
        }
    });
    

    console.log(budgetValue);
    return ( 
    <>
        <p style={{color: colorMensual}}>Presupuesto Mensual: ${budgetValue}</p>
        <p style={{color: colorActual}}>Presupuesto Restante: ${resultado}</p>
        <BugdetModal sendBudgetValue={setBudgetValue} budgetValue={budgetValue}/>
        <Row>
                <Col md={6} className="px-1">
                    <FormInput sendValueInput={ setValueInput } />
                </Col>
                <Col md={6} className="px-1">
                    <FormList/>
                </Col>
            </Row>
    </>
    )
}

export default AdminPage;