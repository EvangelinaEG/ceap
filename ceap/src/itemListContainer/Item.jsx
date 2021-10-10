import React from 'react'
import { Card, Button } from 'react-bootstrap'
import './item.scss';
export const Item = ({id, descripcion, precio, img, categoria}) => {

  
    return (
        <div>
           <Card style={{ width: '18rem' }} className='m-3'>
            <Card.Img variant="top" src={ img } />
            <Card.Body>
                <Card.Title>{ descripcion }</Card.Title>
                <Card.Text>
                $ { precio }
                </Card.Text>
                <Card.Text>
                { categoria }
                </Card.Text>
                <Button variant="primary">Lo Quiero !</Button>
            </Card.Body>
            </Card>
        </div>
    )
}
