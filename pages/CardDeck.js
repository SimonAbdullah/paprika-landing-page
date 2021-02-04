import React from "react";
import { CardDeck, CardGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";

class BootstrapCardDeckComponent extends React.Component {
  render(){
    return (
      <React.Fragment>
        <h4>احصائيات</h4>
      <CardDeck>
  <Card>
    <Card.Img variant="top" src="images/noun_offers.svg" />
    <Card.Body>
      <Card.Title>34</Card.Title>
      <Card.Text>
        عرض
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="images/noun_mobile user interface.svg" />
    <Card.Body>
      <Card.Title>567</Card.Title>
      <Card.Text>
        زبون
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="images/waiter.svg" />
    <Card.Body>
      <Card.Title>345</Card.Title>
      <Card.Text>
        حجز
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="images/restaurant-cutlery-circular-symbol-of-a-spoon-and-a-fork-in-a-circle.svg" />
    <Card.Body>
      <Card.Title>150</Card.Title>
      <Card.Text>
        مطعم
      </Card.Text>
    </Card.Body>
  </Card>
</CardDeck>
</React.Fragment>
          
    )
  }
}

export default BootstrapCardDeckComponent;