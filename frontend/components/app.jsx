import React from 'react'
import {Route} from 'react-router-dom'
import {AuthRoute, ProtectedRoute} from '../util/route_util'

import GreetingContainer from './greeting/greeting_container'
import LoginFormContainer from './session_forms/login_form_container'
import SignupFormContainer from './session_forms/signup_form_container'
import SearchContainer from './lookouts/search_container'
import LookoutFormContainer from './lookouts/lookout_form_container'

const App = () => (
  <div>
    <header>
      <h1>Lookout Maps</h1>
      <GreetingContainer />
    </header>
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <Route exact path='/' component={SearchContainer} />
    <ProtectedRoute path='/lookouts/new' component={LookoutFormContainer} />
  </div>
);

export default App;