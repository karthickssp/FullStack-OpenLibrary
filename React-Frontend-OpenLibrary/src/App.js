import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
import ListBook from './Elements/ListBook';
import CreateBook from './Elements/CreateBook';
import UpdateBook from './Elements/UpdateBook';
import ViewBook from './Elements/ViewBook';
function App() {
  return (
    <div className="App">
      <Route>
        <BrowserRouter>
          <switch>
 -            <Route path = "/" exact component = {Login}></Route>
              <Route path = "/register" component = {Register}></Route>
              <Route path = "/books" exact component = {ListBook}></Route>
              <Route path = "/book" component = {CreateBook}></Route>
              <Route path = "/add-book/:id" component = {UpdateBook}></Route>
              <Route path = "/view-book/:id" component = {ViewBook}></Route>
          </switch>
        </BrowserRouter>
      </Route>
    </div>
  );
}

export default App;
