import Home from './screens/Home';
import About from './screens/About';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/about' element={<About/>}></Route>
          <Route exact path='/signup' element={<Signup/>}></Route>
          <Route exact path='/login' element={<Login/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
