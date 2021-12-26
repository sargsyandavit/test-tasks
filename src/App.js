import React from 'react';
import { Provider } from 'react-redux';
import DialogPage from './Components/Dialog/Dialog';
import Registr from './Components/Registr/RegistrPage';
import ToDoList from './Components/Todo/TodoList';
import store from './Store/Store';

function App() {
  return (
    <div>
      <Provider store={store}>
        <ToDoList/>
        <Registr/>
        {/* <DialogPage/> */}
      </Provider>
    </div>
  );
}

export default App;
