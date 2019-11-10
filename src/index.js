import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import Home from "./pages/home/home";
import Somos from "./pages/quemSomos/quemSomos";
import Contato from "./pages/contatos/contatos";
import Galeria from "./pages/galeria/galeriaFotos";
import { BrowserRouter, Switch, Route } from 'react-router-dom';



ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/quem-somos" component={Somos} />
            <Route path="/contatos" component={Contato} />
            <Route path="/galeria-de-fotos" component={Galeria} />
        </Switch>
    </ BrowserRouter>
    , document.getElementById('root'));