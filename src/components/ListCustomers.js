import React, { useState, useEffect } from "react";
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { Alert } from 'reactstrap';

import api from "../services/api";


const ListCustomers = ({ history }) => {
  const [data, setData] = useState([]);
  const [ success, setSuccess ] = useState(false)

  useEffect(() => {
    (async () => {
      const response = await api.get("/customers");

      setData(response.data);
    })();
  }, []);

  const redirectCreate = () => {
      history.push('/create')
  }

  const removeCustomer = id => {
    
    api
      .delete('/customers/'+id)
      .then(res => {
        const customersFilters = data.filter(c => c.id !== id)
        setData(customersFilters) && 
        setSuccess(true)
      })
  }
  
  
  const renderCustomers = customer => {
    
   
    return (
      <div>
          <tr key={customer.id}>
            <td>{customer.name}</td>
            <td>{customer.email}</td>
            <td>{customer.cpf}</td>
            <td>{customer.phone}</td>
            <td>
              <Fab color="primary" aria-label="add" align="right" onClick={() => removeCustomer(customer.id)}>
                  <AddIcon />
              </Fab>
            </td>
          </tr>
      </div>
    )
  }

  if(data.length > 0 ) {
    return (
        <table className="table">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>CPF</th>
              <th>Phone</th>
            </tr>
            {data.map(d => renderCustomers(d))}
          
        </table>
    )
  }
  if(data.length === 0) {
    return (
      <div className="containerAlert">
        <Alert color="secondary">List customer none!</Alert>
        
          <Fab color="primary" aria-label="add" align="right" onClick={() => redirectCreate()}>
            <AddIcon />
          </Fab>
        
        
      </div>

    )
  }

  if (success) {
    return history.push('/list')
  }
    
  return (
    <div className="container">
        <div className="titleList">
            <p>List Customers</p>
            <Fab color="primary" aria-label="add" align="right" onClick={() => redirectCreate()}>
                <AddIcon />
            </Fab>
        </div>
       
    </div>
  );
};

export default ListCustomers;
