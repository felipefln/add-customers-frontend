import React, { useState } from 'react'
import api from '../services/api'
import { Paper, Typography, Input } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';



const CreateCustomer = ({ history }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [cpf, setCPF] = useState('')
    const [phone, setPhone] = useState('')
    const [success, setSuccess ] = useState(false)

    const create = (event) => {
        event.preventDefault()
        let id = 1;
        id ++;     
        api.post('/customers', {
            id,
            name,
            email,
            cpf,
            phone,
        }).then(res => {
            setSuccess(true)
        })
    }
    if (success) {
        history.push('/list')
    }
    
    return (
        <Paper className="formCreate">
            <Typography variant="h1" component="div"  style={{width: '100vh', paddingTop: '5vh'}}>
                <div className="titleCreate" >
                    <p align="center">Please, add customers or client preference:</p>
                </div>
                
                <form onSubmit={create} className="inputForm">
                    <Input
                        required
                        onChange={event => setName(event.target.value)}
                        placeholder="Name"
                        value={name}
                        inputProps={{
                          'aria-label': 'description',
                        }} 
                    />
                    <Input
                        required
                        placeholder="E-mail"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                        inputProps={{
                          'aria-label': 'description',
                        }} 
                    />
                    <Input
                        required
                        placeholder="CPF"
                        value={cpf}
                        onChange={event => setCPF(event.target.value)}
                        inputProps={{
                          'aria-label': 'description',
                        }} 
                    />
                    <Input
                        required
                        placeholder="Phone"
                        value={phone}
                        onChange={event => setPhone(event.target.value)}
                        inputProps={{
                          'aria-label': 'description',
                        }} 
                    />
               
                     <div className="btn-space">
                        <button className="btn" type="submit">
                            <AddIcon />
                        </button>
                    </div>
                </form>
                
            </Typography>
        </Paper>
    )
} 

export default CreateCustomer;