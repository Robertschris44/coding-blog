import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";
import "./App.css";

import { AuthProvider } from "./context/auth";
import AuthRoute from "./util/AuthRoute";

import MenuBar from "./components/MenuBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./pages/Footer";



// const pageChanger = () => {
//   if (currentPage === 'Home'){
//     return <Home />
//   }
//   else if (currentPage === 'Login'){
//     return <Login />
//   }
//   else if (currentPage === 'Register'){
//     return <Register />
//   }
// }

function App() {
  return (
    <AuthProvider>
      <Router>
        <Container>
          <MenuBar />
          <Route exact path="/" component={Home} />
          <AuthRoute exact path="/login" component={Login} />
          <AuthRoute exact path="/register" component={Register} />
        </Container>
      </Router>
      <Footer />
    </AuthProvider>
  );
}

export default App;
