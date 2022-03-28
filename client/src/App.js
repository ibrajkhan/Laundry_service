import React from 'react';
import './App.css';

import Login from './components/signin/signin components/login';
import Register from './components/signin/signin components/register';

import ProductCreating from './components/Orders/ProductCreating';
import ExistingOrderParent from './components/existingOrders/ExistingOrderParent';
import ErrorComponent from './ErrorComponent';
import {BrowserRouter,Route,Switch} from "react-router-dom";

function App() {
  return (
    <section className="App"> 
      <BrowserRouter>
      {/* <Header/> */}
      <Switch>
      <Route path='/' exact component={Login}/>
      <Route path='/register' exact component={Register}/>
      <Route path='/order' exact component={ProductCreating}/>
      <Route path='/orders' exact component={ExistingOrderParent}/>
      <Route path='*' exact component={ErrorComponent}/> 

      </Switch>
      {/* <Footer/> */}
      {/* <FooterTwo/> */}
      </BrowserRouter>
    </section>
  );
}

export default App;
