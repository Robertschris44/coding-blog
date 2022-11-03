import React from "react";

import { Button, Form } from "semantic-ui-react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

import { useForm } from "../util/hooks";
import { FETCH_BLOGS_QUERY } from "../util/graphql";

function PostForm() {
  const { values, onChange, onSubmit } = useForm(createBlogCallback, {
    description: "",
  });

  const [createBlog, { error }] = useMutation(CREATE_BLOG_MUTATION, {
    variables: values,
    update(proxy, result) {
      const data = proxy.readQuery({
        query: FETCH_BLOGS_QUERY,
      });
      data.getBlogs = [result.data.createBlog, ...data.getBlogs];
      proxy.writeQuery({ query: FETCH_BLOGS_QUERY, data });
      values.description = "";
    },
  });

  function createBlogCallback() {
    createBlog();
  }
  return (
    <>
      <Form onSubmit={onSubmit}>
        <h2>Create a blog:</h2>
        <Form.Field>
          <Form.Input
            placeholder="Coding Blog"
            name="description"
            onChange={onChange}
            value={values.body}
            error={error ? true : false}
          />
          <Button type="submit" color="teal">
            Submit
          </Button>
        </Form.Field>
      </Form>
      {error && (
        <div className="ui error message">
          <ul className="list">
            <li>{error.graphQLErrors[0].message}</li>
          </ul>
        </div>
      )}
    </>
  );
}

const CREATE_BLOG_MUTATION = gql`
  mutation createBlog($description: String!) {
    createBlog(description: $description) {
      id
      description
      createdAt
      authorName
      likes {
        id
        authorName
        createdAt
      }
      likeCount
      comments {
        id
        body
        authorName
        createdAt
      }
      commentCount
    }
  }
`;

export default PostForm;
