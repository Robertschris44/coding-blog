import React, {useContext} from 'react';
import gql from "graphql-tag";
import { useQuery } from '@apollo/react-hooks';
import { Card, Grid } from 'semantic-ui-react';
import moment from 'moment';
import LikeButton from '../components/LikeButton';

import { AuthContext } from '../context/auth';

function SingleBlog(props) {

    const blogId = props.match.params.blogId;
    const { author } = useContext(AuthContext);
    console.log(blogId);

    const { data: { getBlog } } = useQuery(FETCT_BLOG_QUERY, {
        variables: { 
            blogId
        }
    })
    let postMarkUp;

    if (!getBlog) {
        blogMarkup = <p>Loading Blog ...</p>
    } else {
        const { id, description, createdAt, authorName, comments, likes, likeCount, commentCount } = getBlog;

        blogMarkup = (
            <Grid>
                <Grid.Row>
                    <Grid.Column width={2}>
                        <Image src="https://blogtimenow.com/wp-content/uploads/2014/06/hide-facebook-profile-picture-notification.jpg"
                        size="small"
                    float="right"/>
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <Card>
                            <Card.Content>
                                <Card.Header>{authorName}</Card.Header>
                                <Card.Meta>{moment(createdAt).fromNow()}</Card.Meta>
                                <Card.Description>{ description}</Card.Description>
                            </Card.Content>
                            <hr />
                            <Card.Content extra>
                                <LikeButton author={author} blog={{ id, likeCount, likes }} />
                                <Button 
                                    as="div"
                                    labelPosition="right"
                                    onClick={() => console.log('Comment on blog')}>
                                    <Button basic color="blue">
                                        <Icon name="comments" />
                                    </Button>
                                    <Label basic color="blue" pointing="left">{ commentCount}</Label>
                                </Button>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }




}

const FETCT_BLOG_QUERY = gql`
query($blogId: ID!)`{
        getBlog(blogId: $blogId){
       id description createdAt authorName likeCount 
            likes{
                authorName
            }
            commentCount
           comments{
                id authorName createdAt body
           } 
   } 
}

export default SingleBlog;