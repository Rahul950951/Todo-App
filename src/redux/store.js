import { createStore } from 'redux';
import { Provider } from 'react-redux';
import taskReducer from './reducers';

const store = createStore(taskReducer);

const StoreProvider = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

export default StoreProvider;
