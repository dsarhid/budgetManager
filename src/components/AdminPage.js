import React, {useEffect, useState} from 'react';
import BugdetModal from './BugdetModal';
import FormInput from './FormInput';
import FormList from './FormList';
import {Col, Row} from  'reactstrap';


const AdminPage = () => {

    /*Definiendo estado y modificador de estado: bugdetValue*/
    const [budgetValue, setBudgetValue] = useState(0);
    const [gasto, setGasto] = useState(0);
    const [nombre, setNombre] = useState(0);

    // {`${budgetValue<100 ? 'p-100' : 'p-500'}`}

    return ( 
    <>
        <p>Presupuesto: ${budgetValue}</p>
        <BugdetModal close={setBudgetValue} sendBudgetValue={setBudgetValue}/>
        <Row>
                <Col md={6} className="px-1">
                    <FormInput sendValueInput={ setGasto } sendNameInput={ setNombre }/>
                </Col>
                <Col md={6} className="px-1">
                    <FormList/>
                </Col>
            </Row>
    </>
    )
}

export default AdminPage;