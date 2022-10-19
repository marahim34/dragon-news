import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const NewsSummaryCart = ({ news }) => {
    const { _id, title, author, details, total_view, image_url } = news;
    return (
        <Card className="">
            <Card.Header>{title}</Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                    {details.length > 250 ?
                        <p>{details.slice(0, 250) + '...'} <Link to={`/news/${_id}`}>Read More</Link></p>
                        :
                        <p>{details}</p>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
    );
};

export default NewsSummaryCart;