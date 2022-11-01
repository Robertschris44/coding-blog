import React from "react";
import { Card, Icon, Label, Image } from "semantic-ui-react";
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
    <Card>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src="https://react.semantic-ui.com/images/avatar/large/molly.png"
        />
        <Card.Header>{authorName}</Card.Header>
        <Card.Meta>{moment(createdAt).fromNow()}</Card.Meta>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <p> Buttons Here</p>
      </Card.Content>
    </Card>
  );
}

export default PostCard;
