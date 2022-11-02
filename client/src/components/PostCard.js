import React from "react";
import { Button, Card, Icon, Label, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import moment from "moment";

function PostCard({
  blog: {
    description,
    createdAt,
    id,
    authorName,
    likeCount,
    commentCount,
    likes,
  },
}) {
  function likeBlog() {
    console.log("Like the blog");
  }

  function commentOnBlog() {
    console.log("Comment the blog");
  }

  return (
    <Card fluid>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src="https://react.semantic-ui.com/images/avatar/large/molly.png"
        />
        <Card.Header as={Link} to={`/blogs/${id}`}>{authorName}</Card.Header>
        <Card.Meta>
          {moment(createdAt).fromNow(true)}
        </Card.Meta>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button as="div" labelPosition="right" onClick={likeBlog}>
          <Button color="basic red" basic>
            <Icon name="heart" />
            Like
          </Button>
          <Label basic color="basic red" pointing="left">
            {likeCount}
          </Label>
        </Button>
        <Button as="div" labelPosition="right" onClick={commentOnBlog}>
          <Button color="blue" basic>
            <Icon name="comments" />
            Comments
          </Button>
          <Label basic color="blue" pointing="left">
            {commentCount}
          </Label>
        </Button>
      </Card.Content>
    </Card>
  );
}

export default PostCard;
