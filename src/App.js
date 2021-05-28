import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Recipe from './pages/Recipe';
import Register from './pages/Signup'
import Main from './pages/Main';
import LoginPage from './pages/LoginPage';
function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Recipe} />
          <Route exact path="/login" component={ LoginPage} />
          <Route exact path="/register" component={ Register} />
          <Route exact path="/main" component={ Main} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
