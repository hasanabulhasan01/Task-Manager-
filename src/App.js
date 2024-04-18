import './App.css';
// import Users from './components/Users'
import Router from './config/router'
import { store, persistor } from './store'
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

function App() {
  return (
    <>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <Router />
    </PersistGate>
    </Provider>
    </>
  );
}

export default App;
