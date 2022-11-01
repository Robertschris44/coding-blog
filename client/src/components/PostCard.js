import React from "react";
import { Card, Icon, Label, Image } from "semantic-ui-react";
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
  return (
    <Card fluid>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src="https://react.semantic-ui.com/images/avatar/large/molly.png"
        />
        <Card.Header>{authorName}</Card.Header>
        <Card.Meta as={Link} to={`/blogs/${id}`}>
          {moment(createdAt).fromNow(true)}
        </Card.Meta>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <p> Buttons Here</p>
      </Card.Content>
    </Card>
  );
}

export default PostCard;
