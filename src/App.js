import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducers from './store'
import logo from './logo.svg'
import './App.css'
import Products from './components/Products'

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
      <div className='App'>
        <img src={logo} className='App-logo' alt='logo' />
        <Products />
      </div>
    </Provider>
  )
}

export default App
