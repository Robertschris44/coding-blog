import React, { useState } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { Button, Confirm, Icon, Popup } from "semantic-ui-react";

import { FETCH_BLOGS_QUERY } from "../util/graphql";

function DeleteButton({ blogId, commentId, callback }) {
  const [confirmOpen, setConfirmOpen] = useState(false);

  const mutation = commentId ? DELETE_COMMENT_MUTATION : DELETE_BLOG_MUTATION;

  const [deleteBlogOrComment] = useMutation(mutation, {
    update(proxy) {
      setConfirmOpen(false);
      if (!commentId) {
        const data = proxy.readQuery({
          query: FETCH_BLOGS_QUERY,
        });
        data.getBlogs = data.getBlogs.filter((p) => p.id !== blogId);
        proxy.writeQuery({ query: FETCH_BLOGS_QUERY, data });
      }
      if (callback) callback();
    },
    variables: {
      blogId,
      commentId,
    },
  });
  return (
    <>
      <Popup
        content={commentId ? "Delete the comment" : "Delete the post"}
        trigger={
          <Button
            as="div"
            color="red"
            floated="right"
            onClick={() => setConfirmOpen(true)}
          >
            <Icon name="trash" style={{ margin: 0 }} />
          </Button>
        }
      />
      <Confirm
        open={confirmOpen}
        onCancel={() => setConfirmOpen(false)}
        onConfirm={deleteBlogOrComment}
      />
    </>
  );
}

const DELETE_BLOG_MUTATION = gql`
  mutation deleteBlog($blogId: ID!) {
    deleteBlog(blogId: $blogId)
  }
`;

const DELETE_COMMENT_MUTATION = gql`
  mutation deleteComment($blogId: ID!, $commentId: ID!) {
    deleteComment(blogId: $blogId, commentId: $commentId) {
      id
      comments {
        id
        authorName
        createdAt
        body
      }
      commentCount
    }
  }
`;

export default DeleteButton;
