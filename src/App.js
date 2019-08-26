import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducers from './store'
import './App.css'
import ShortView from './components/ShortView'
import DetailView from './components/DetailView'
import DataProvider from './components/DataProvider'
import 'bootstrap/dist/css/bootstrap.min.css'

const __DEV__ = true

const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(thunkMiddleware),
    __DEV__ && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

const App = () => {
  return (
    <Provider store={store}>
      <DataProvider>
        <ShortView />
        <DetailView />
      </DataProvider>
    </Provider>
  )
}

export default App
