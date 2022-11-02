import React from "react";
import { ValuesOfCorrectTypeRule } from "graphql";

import { Button, Form } from "semantic-ui-react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

import { useForm } from "../util/hooks";

function PostForm() {
  const { values, onChange, onSubmit } = useForm(createBlogCallback, {
    description: "",
  });

  const [createBlog, { error }] = useMutation(CREATE_BLOG_MUTATION, {
    variables: values,
    update(_, result) {
      console.log(result);
      values.description = "";
    },
  });

  function createBlogCallback() {
    createBlog();
  }
  return (
    <Form onSubmit={onSubmit}>
      <h2>Create a blog:</h2>
      <Form.Field>
        <Form.Input
          placeholder="Coding Blog"
          name="description"
          onChange={onChange}
          value={values.body}
        />
        <Button type="submit" color="teal">
          Submit
        </Button>
      </Form.Field>
    </Form>
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
