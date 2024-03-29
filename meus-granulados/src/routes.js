import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"; //falou que nao pode importar switch
import Cadastro from './pages/Cadastro';
import Home from './pages/Home';
import Login from './pages/Login';
import Perfil from './pages/Perfil';
import Produtos from './pages/Produtos';

function Routes () {
    return(
        <BrowserRouter> 
            <Switch>
                <Route path='/cadastro' component={Cadastro}/> 
                <Route path='/home' component={Home}/> 
                <Route path='/login' component={Login}/> 
                <Route path='/pefil' component={Perfil}/> 
                <Route path='/produtos' component={Produtos}/> 

            </Switch>
        </BrowserRouter>
    )
}

export default Routes;