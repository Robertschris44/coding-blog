import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Button, Label, Icon, Popup } from "semantic-ui-react";

function LikeButton({ author, blog: { id, likeCount, likes } }) {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (author && likes.find((like) => like.authorName === author.authorName)) {
      setLiked(true);
    } else setLiked(false);
  }, [author, likes]);

  const [likeBlog] = useMutation(LIKE_BLOG_MUTATION, {
    variables: { blogId: id },
  });

  const likeButton = author ? (
    liked ? (
      <Button color="teal">
        <Icon name="heart" />
      </Button>
    ) : (
      <Button color="teal" basic>
        <Icon name="heart" />
      </Button>
    )
  ) : (
    <Button as={Link} to="/login" color="teal" basic>
      <Icon name="heart" />
    </Button>
  );

  return (
    <Button as="div" labelPosition="right" onClick={likeBlog}>
      <Popup content={liked ? "Unlike" : "Like"} trigger={likeButton} />

      <Label basic color="teal" pointing="left">
        {likeCount}
      </Label>
    </Button>
  );
}

const LIKE_BLOG_MUTATION = gql`
  mutation likeBlog($blogId: ID!) {
    likeBlog(blogId: $blogId) {
      id
      likes {
        id
        authorName
      }
      likeCount
    }
  }
`;

export default LikeButton;
