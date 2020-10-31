import "./App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Location from './Components/Location'
import Services from './Components/Services'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/services">
          <Services/>
        </Route>
        <Route path="/">
          <Location />
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
