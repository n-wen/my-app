import './App.css';
import LoginPage from './page/login';
import store from './store/store';
import {StoreProvider} from 'easy-peasy';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from './page/userlist';

function App() {
  return (
    <div className="App">
      <StoreProvider store={store}>
        <Router>
          <Switch>
            <Route path="/userlist">
              <UserList></UserList>
            </Route>
            <Route path="/">
              <LoginPage></LoginPage>
            </Route>
          </Switch>
        </Router>
      </StoreProvider>
    </div>
  );
}

export default App;
