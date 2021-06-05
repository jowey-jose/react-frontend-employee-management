import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';

// Root Component.
// Uses jsx, similar to javascript, recommened for react app development. Makes react code simpler and neat.
function App() {
  return (
    <div>
      <Router> 
            {/* Header and Footer are Created Outside the Switch Because They are Applicable to all Components */}
            <HeaderComponent/>
              <div className="container">
                
                <Switch>
                    <Route path = "/" exact component = {ListEmployeeComponent}></Route>
                    <Route path = "/employees" component = {ListEmployeeComponent}></Route>
                    <Route path = "/add-employee" component = {CreateEmployeeComponent}></Route>
                </Switch>
              </div> 
            <FooterComponent/>
      </Router>

    </div>
  );
}

export default App;
 