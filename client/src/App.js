import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";
import "./App.css";

import { AuthProvider } from "./context/auth";
import AuthRoute from "./util/AuthRoute";

import MenuBar from "./components/MenuBar";
import Home from "./pages/Home";
<<<<<<< HEAD
import Login from "./pages/Login"
=======
import Login from "./pages/Login";
>>>>>>> main
import Register from "./pages/Register";



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
<<<<<<< HEAD
    <Router>
      <Container>
        <MenuBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Container>
      <Login />
    </Router>

    // {pageChanger()}

=======
    <AuthProvider>
      <Router>
        <Container>
          <MenuBar />
          <Route exact path="/" component={Home} />
          <AuthRoute exact path="/login" component={Login} />
          <AuthRoute exact path="/register" component={Register} />
        </Container>
      </Router>
    </AuthProvider>
>>>>>>> main
  );
}

export default App;
