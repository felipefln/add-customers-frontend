import React, { useState } from 'react'
import { Container, Typography, Input, makeStyles, Paper } from '@material-ui/core'
import logoMenor from '../assets/logoMenor.png'

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1)
    },
    paper: {
        padding: theme.spacing(10, 10),
        

    }
}))


const Login = ({ history }) => {
    const classes = useStyles();
    const [name, setName] = useState('')
    const [email, setEmail ] = useState('')
    
    async function handleSubmit(event) {
        //create validation JWT feature
         history.push('/list')
    }

    return (
        <React.Fragment>
            <Container maxWidth="lg">
                
                    <Paper className={classes.paper}>
                        <img src={logoMenor} alt="logo-menor" style={{ width: '20vh'}} />
                        <Typography variant="h4" component="div" style={{ height: '60vh', width: '100vh', paddingTop: '5vh'}}>
                        Hello, let's use the <strong>"Add Customer Tool"</strong>

                            <form onSubmit={handleSubmit} style={{ width: '48vh', paddingTop: '5vh' }}>
                                <Input 
                                    required
                                    fullWidth
                                    type="name" 
                                    id="name" 
                                    placeholder="Name"
                                    value={name}
                                    onChange={event => setName(event.target.value)}
                                />
                               
                                <Input
                                    required 
                                    fullWidth
                                    style={{paddingTop: '5vh'}}
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
                        </Typography>
                    </Paper>
                    
                
            </Container>
        </React.Fragment>
        
    )
} 

export default Login;