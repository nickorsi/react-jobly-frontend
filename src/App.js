import { BrowserRouter } from "react-router-dom";
import  Navigation  from './Navigation'
import RoutesList from './RoutesList'
import './App.css';

/** Renders Jobly App and Navigation componenet
 *
 * Props: None
 *
 * State: None
 *
 * App -> {Navigation, RoutesList}
 */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <RoutesList />
      </BrowserRouter>
    </div>
  );
}

export default App;
