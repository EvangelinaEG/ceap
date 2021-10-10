import React from 'react'
import { Card, Button } from 'react-bootstrap'

export const Item = ({id, descripcion, precio, img, categoria}) => {

  
    return (
        <div>
           <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={ img } />
            <Card.Body>
                <Card.Title>C{ descripcion }</Card.Title>
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
