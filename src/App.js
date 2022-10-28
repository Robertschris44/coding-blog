import './App.css';
// import { Container, Row, Col } from 'react-bootstrap';
import LoginForm from './components/Login';
import NavBar from './components/NavBar';
// import Home from './components/Home';

function App() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <LoginForm />
        {/* <Home /> */}
      </main>
    </div>
  );
}

export default App;
