import React, { useState, useEffect } from "react";
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

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
          <tr key={customer.id}>
            <td>{customer.name}</td>
            <td>{customer.email}</td>
            <td>{customer.cpf}</td>
            <td>{customer.phone}</td>
            <td><button className="btn" onClick={() => removeCustomer(customer.id)}>Remove</button></td>
          </tr>
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
        
        <table className="table">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>CPF</th>
            <th>Phone</th>
          </tr>
          {data ? data.map(d => renderCustomers(d)) : false}
          
        </table>
     
    </div>
  );
};

export default ListCustomers;
