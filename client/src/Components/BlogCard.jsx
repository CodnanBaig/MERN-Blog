import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

export const BlogCard = ({data}) => {
  const navigate = useNavigate();

  const readBlog = () => {
    navigate(`/blogs/${data._id}`);
  }

  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={data.photo} />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>
          {data.description}
        </Card.Text>
        <Button onClick={readBlog} variant="primary">Read</Button>
      </Card.Body>
    </Card>
    </div>
  )
}
