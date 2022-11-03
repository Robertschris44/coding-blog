import React, { useContext, useState, useRef } from "react";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";
import moment from "moment";
import {
  Button,
  Card,
  Form,
  Grid,
  Image,
  Icon,
  Label,
} from "semantic-ui-react";

import { AuthContext } from "../context/auth";
import LikeButton from "../components/LikeButton";
import DeleteButton from "../components/DeleteButton";

function SingleBlog(props) {
  const blogId = props.match.params.blogId;
  const { author } = useContext(AuthContext);
  const commentInputRef = useRef(null);

  const [comment, setComment] = useState("");

  const {
    data: { getBlog },
  } = useQuery(FETCH_BLOG_QUERY, {
    variables: {
      blogId,
    },
  });

  const [submitComment] = useMutation(SUBMIT_COMMENT_MUTATION, {
    update() {
      setComment("");
      commentInputRef.current.blur();
    },
    variables: {
      blogId,
      body: comment,
    },
  });

  function deleteBlogCallback() {
    props.history.push("/");
  }

  let blogMarkup;
  if (!getBlog) {
    blogMarkup = <p>Loading blog..</p>;
  } else {
    const {
      id,
      description,
      createdAt,
      authorName,
      comments,
      likes,
      likeCount,
      commentCount,
    } = getBlog;

    blogMarkup = (
      <Grid>
        <Grid.Row>
          <Grid.Column width={2}>
            <Image
              src="https://blogtimenow.com/wp-content/uploads/2014/06/hide-facebook-profile-picture-notification.jpg"
              size="small"
              float="right"
            />
          </Grid.Column>
          <Grid.Column width={10}>
            <Card fluid>
              <Card.Content>
                <Card.Header>{authorName}</Card.Header>
                <Card.Meta>{moment(createdAt).fromNow()}</Card.Meta>
                <Card.Description>{description}</Card.Description>
              </Card.Content>
              <hr />
              <Card.Content extra>
                <LikeButton author={author} blog={{ id, likeCount, likes }} />
                <Button
                  as="div"
                  labelPosition="right"
                  onClick={() => console.log("Comment on blog")}
                >
                  <Button basic color="blue">
                    <Icon name="comments" />
                  </Button>
                  <Label basic color="blue" pointing="left">
                    {commentCount}
                  </Label>
                </Button>
                {author && author.authorName === authorName && (
                  <DeleteButton blogId={id} callback={deleteBlogCallback} />
                )}
              </Card.Content>
            </Card>
            {author && (
              <Card fluid>
                <Card.Content>
                  <p>Create a comment</p>
                  <Form>
                    <div className="ui action input fluid">
                      <input
                        type="text"
                        placeholder="Comment.."
                        name="comment"
                        value={comment}
                        onChange={(event) => setComment(event.target.value)}
                        ref={commentInputRef}
                      />
                      <button
                        type="submit"
                        className="ui button teal"
                        disabled={comment.trim() === ""}
                        onClick={submitComment}
                      >
                        Submit
                      </button>
                    </div>
                  </Form>
                </Card.Content>
              </Card>
            )}
            {comments.map((comment) => (
              <Card fluid key={comment.id}>
                <Card.Content>
                  {author && author.authorName === comment.authorName && (
                    <DeleteButton blogId={id} commentId={comment.id} />
                  )}
                  <Card.Header>{comment.authorName}</Card.Header>
                  <Card.Meta>{moment(comment.createdAt).fromNow()}</Card.Meta>
                  <Card.Description>{comment.body}</Card.Description>
                </Card.Content>
              </Card>
            ))}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
  return blogMarkup;
}

const SUBMIT_COMMENT_MUTATION = gql`
  mutation ($blogId: String!, $body: String!) {
    createComment(blogId: $blogId, body: $body) {
      id
      comments {
        id
        body
        createdAt
        authorName
      }
      commentCount
    }
  }
`;

const FETCH_BLOG_QUERY = gql`
  query ($blogId: ID!) {
    getBlog(blogId: $blogId) {
      id
      description
      createdAt
      authorName
      likeCount
      likes {
        authorName
      }
      commentCount
      comments {
        id
        authorName
        createdAt
        body
      }
    }
  }
`;

export default SingleBlog;
