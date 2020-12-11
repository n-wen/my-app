import './App.css';
import LoginPage from './page/login';
import store from './store/store';
import {StoreProvider} from 'easy-peasy';

function App() {
  return (
    <div className="App">
      <StoreProvider store={store}>
      <LoginPage></LoginPage>
      </StoreProvider>
    </div>
  );
}

export default App;
