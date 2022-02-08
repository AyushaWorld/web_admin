import './App.css';
import SignIn from './components/SignIn';
import {Switch, Route} from 'react-router-dom';
import ShowBanner from './components/ShowBanner';

function App() {
  return (
    <>
       {/* <SignIn /> */}
      <Switch>
        <Route path="/register" component={ShowBanner} />

        <Route exact path="/" component={SignIn} />
      </Switch>
    </>
  )
}

export default App;
