import './App.css';
// import { Container, Row, Col } from 'react-bootstrap';
import LoginForm from './components/Login';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <LoginForm />
      </main>
    </div>
  );
}

export default App;
