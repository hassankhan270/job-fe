import './App.css';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Home from './page/Home';
import Background from './component/Background';
import Detail from './page/Detail';

function App() {
  return (
    <Router>
      <Background />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/detail/:id'
          element={<Detail />}
        />
      </Routes>
    </Router>
  );
}

export default App;
