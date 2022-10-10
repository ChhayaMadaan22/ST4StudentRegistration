import Form from './Form';
import CreateArea from './CreateArea';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' element={<Form/>}></Route>
        <Route path='/create' element={<CreateArea/>}></Route>
      </Routes>
    </Router>

      
    </div>
  );
}

export default App;
