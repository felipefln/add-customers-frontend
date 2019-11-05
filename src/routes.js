import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from './components/Login'
import CreateCustomers from './components/CreateCustomers'
import EditCustomers from './components/EditCustomers'
import ListCustomers from './components/ListCustomers'


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/create" exact component={CreateCustomers}/>
                <Route path="/edit" exact component={EditCustomers}/>
                <Route path="/list" exact component={ListCustomers}/>
            </Switch>
        </BrowserRouter>
    );
}