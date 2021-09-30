import React, { useState,useEffect } from 'react';
import { Button, Card, Image,Container } from 'semantic-ui-react'

export default function ProductList() {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
      //axios.get(`https://61546bdc2473940017efae4d.mockapi.io/fakeData`)
          .then((response) => {
              setAPIData(response.data);
          })
  }, [])

  const setData = (data) => {
    let { id, title, price, description,image } = data;
    localStorage.setItem('ID', id);
    localStorage.setItem('Title', title);
    localStorage.setItem('Price', price);
    localStorage.setItem('Description', description)
    localStorage.setItem('Image', image)
 }


    return (
        
      <Container>
      <Card.Group>

{APIData.map((data) => {
return (
          <Card>
          <Card.Content>
          <Image
            floated='center'
            size='medium'
            src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
            // src= {data.image}
          />
          <Card.Header>{data.Title}</Card.Header>
          <Card.Meta>{data.Price}</Card.Meta>

          </Card.Content>
          <Card.Content extra>
          <div className='ui two buttons'>
          <Link to='/shopping_cart'>
            <Button basic color='green' onClick={() => setData(data)}>
              Add to Cart
            </Button>
            </Link>
          </div>
          </Card.Content>
          </Card>
)})}
</Card.Group>
</Container>
    )
}