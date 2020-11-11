import React , { Component } from 'react';
import { BrowserRouter , Switch , Route } from 'react-router-dom';
import GlobalStyles from './styles/Global.css'

import App from './App';
import Signup from './components/Signup';
import Details from './components/Details';

class Routes extends Component {
  
    render() {
        return(
            <div id='global'>
                <img src="https://i.imgur.com/9xnibRx.png" alt="buyco-logo" id='logo'></img>
                <BrowserRouter>
                    <Switch>
                        <Route path='/' component={App} exact />
                        <Route path='/signup' component={Signup} />
                        <Route path='/details' component={Details} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
  
export default Routes