import React, { useState } from 'react'
import { Container, Input, makeStyles } from '@material-ui/core'
import logoEdit from '../assets/logoEdit.png'

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1)
    },
    paper: {
        padding: theme.spacing(10, 10),
        

    }
}))


const Login = ({ history }) => {
    const [name, setName] = useState('')
    const [email, setEmail ] = useState('')
    
    async function handleSubmit(event) {
        //create validation JWT feature
         history.push('/list')
    }

    return (
        <React.Fragment>
            <Container maxWidth="lg">
                
                    <div className="container">
                        <img src={logoEdit} alt="logo-menor" style={{ width: '20vh'}} />
                        <div className="containerForm">
                        Hello, let's use the <strong>"Add Customer Tool"</strong>

                            <form onSubmit={handleSubmit} style={{ width: '48vh', paddingTop: '3vh' }}>
                                <Input 
                                    required
                                    fullWidth
                                    style={{paddingTop: '5vh', color: 'white'}}
                                    type="name" 
                                    id="name" 
                                    placeholder="Name"
                                    value={name}
                                    onChange={event => setName(event.target.value)}
                                />
                               
                                <Input
                                    required 
                                    fullWidth
                                    style={{paddingTop: '5vh', color: 'white'}}
                                    type="email" 
                                    id="email" 
                                    placeholder="E-mail"
                                    value={email}
                                    onChange={event => setEmail(event.target.value)}
                                />
                                <div className="btn-space">
                                    <button className="btn" type="submit">Enter</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    
                
            </Container>
        </React.Fragment>
        
    )
} 

export default Login;