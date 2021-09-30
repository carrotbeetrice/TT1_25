import React, { useState,useEffect } from 'react';
import { Button, Card, Image,Container } from 'semantic-ui-react'

export default function ProductList() {


    return (
        
        <Container>
              <Card.Group>
    <Card>
      <Card.Content>
        <Image
          floated='center'
          size='medium'
          src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
        />
        <Card.Header>Product title</Card.Header>
        <Card.Meta>Price</Card.Meta>
  
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Add to Cart
          </Button>
          <Button basic color='red'>
            Favorite
          </Button>
        </div>
      </Card.Content>
    </Card>
    
  </Card.Group>
  </Container>
    )
}