import { Fragment } from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import Header from './Components/layout/Header'
function App() {

  return (
  <Fragment>
    <Provider store={store}>
      <Header/>
    </Provider>
  </Fragment>
  )
}

export default App
