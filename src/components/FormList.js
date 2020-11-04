import React, { useEffect, useState } from 'react';
import {Card, CardBody} from  'reactstrap';

const FormList = ( ) => {

    let listaLs = JSON.parse(localStorage.getItem('Lista'));
    if(!listaLs) {
        listaLs = [];
    }

    const [lista, setListas] = useState(listaLs);

    useEffect(() => {
        let listaLs = JSON.parse(localStorage.getItem('Lista'));

        if (listaLs) {
        localStorage.setItem('Lista', JSON.stringify(lista))
        } else {
        localStorage.setItem('Lista', JSON.stringify([]));
        }
    }, [lista]);

      return (
        <>
        <h3>Lista de gastos</h3>
            <div> 
            {
              listaLs.map((l) => {
                return (
                    <Card color="dark">
                        
                        <CardBody className="p-2 my-1 border border-light">
                            <div>
                                Nombre: {l.nameInput}
                            </div>
                            <div>
                                Monto: ${l.valueInput}
                            </div>
                        </CardBody>
                    </Card>
                )
              })
            }
          </div>
            
        </>
      );
      
}

export default FormList;
