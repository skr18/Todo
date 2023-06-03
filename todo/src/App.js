import Home from './Components/Home';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Login from './Components/Login';
import Landing from './Components/Landing';
import Signup from './Components/Signup';
function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Landing/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/sign' element={<Signup/>}/>
        </Routes>
      </Router>
  );
}

export default App;
