import React, { useContext, useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

import { AuthContext } from "../context/auth";
import { useForm } from "../util/hooks";

function Login(props) {
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState({});
  const { onChange, onSubmit, values } = useForm(loginAuthorCallback, {
    authorName: "",
    password: "",
  });

  const [loginAuthor, { loading }] = useMutation(LOGIN_AUTHOR, {
    update(_, { data: { login: authorData } }) {
      context.login(authorData);
      props.history.push("/");
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: values,
  });

  function loginAuthorCallback() {
    loginAuthor();
  }

  return (
    <div className="form-container">
      <Form onSubmit={onSubmit} noValidate className={loading ? "loading" : ""}>
        <h1>Login</h1>
        <Form.Input
          label="Authorname"
          placeholder="Authorname.."
          name="authorName"
          type="text"
          value={values.authorName}
          error={errors.authorName ? true : false}
          onChange={onChange}
        />

        <Form.Input
          label="Password"
          placeholder="Password.."
          name="password"
          type="password"
          value={values.password}
          error={errors.password ? true : false}
          onChange={onChange}
        />

        <Button type="submit" primary>
          Login
        </Button>
      </Form>
      {Object.keys(errors).length > 0 && (
        <div className="ui error message">
          <ul className="list">
            {Object.values(errors).map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

const LOGIN_AUTHOR = gql`
  mutation login($authorName: String!, $password: String!) {
    login(
      authorName: $authorName

      password: $password
    ) {
      id
      email
      authorName
      createdAt
      token
    }
  }
`;

export default Login;
