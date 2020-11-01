import React, {useState} from 'react';
import BugdetModal from './BugdetModal';


const AdminPage = () => {
    /*Definiendo estado y modificador de estado: bugdetValue*/
    const [budgetValue, setBudgetValue] = useState(0);

    return ( 
    <div> 
        <p>Presupuesto: ${budgetValue}</p>
        <BugdetModal sendBudgetValue={setBudgetValue}/>    
    </div>
    )
}

export default AdminPage;