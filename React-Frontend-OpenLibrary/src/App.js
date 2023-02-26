import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';

function App() {
  return (
    <div className="App">
      <Route>
        <BrowserRouter>
          <switch>
          </switch>
        </BrowserRouter>
      </Route>
    </div>
  );
}

export default App;
