import logo from './logo.svg';
import './App.css';
import ContactList from './components/container/contact_list';
import Clock from './components/container/clock';
import Square from './components/pure/square';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';

import LoginPage from './pages/login/LoginPage';
import TaskDashBoard from './pages/dashboard/TaskDashBoard';
import RegisterPage from './pages/register/RegisterPage';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        {/* <ContactList></ContactList> */}
        {/* <Clock></Clock> */}
        {/* </header> */}
        {/* <Square></Square> */}
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registro" element={<RegisterPage />} />
          <Route path="/dashboard" element={<TaskDashBoard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
