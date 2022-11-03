import React, { useContext } from "react";
import { Button, Card, Icon, Label, Image, Popup } from "semantic-ui-react";
import { Link } from "react-router-dom";
import moment from "moment";

import { AuthContext } from "../context/auth";
import LikeButton from "./LikeButton";
import DeleteButton from "./DeleteButton.js";

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
  const { author } = useContext(AuthContext);

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
        <LikeButton author={author} blog={{ id, likes, likeCount }} />
        <Popup
          content="Comment on blog"
          trigger={
            <Button labelPosition="right" as={Link} to={`/blogs/${id}`}>
              <Button color="blue" basic>
                <Icon name="comments" />
                Comments
              </Button>
              <Label basic color="blue" pointing="left">
                {commentCount}
              </Label>
            </Button>
          }
        />

        {author && author.authorName === authorName && (
          <DeleteButton blogId={id} />
        )}
      </Card.Content>
    </Card>
  );
}

export default PostCard;
