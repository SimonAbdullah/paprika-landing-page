import React from "react";
import { CardGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";

class BootstrapCardGroupComponent extends React.Component {
  render(){
    return (
      <React.Fragment>
        <img src ="images/Services.svg"/>
        <h2>خدماتنا</h2>
      <CardGroup>
  <Card>
    <Card.Img variant="top" src="images/discount.svg" />
    <Card.Body>
      <Card.Title>تابع مطعمك المفضل</Card.Title>
      <Card.Text>
        دور على المكان يلي بناسبك شوف شو بقدم وجبات ومشروبات وحلويات اختار يلي بيعجبك واتركنا نحجزلك
      </Card.Text>
    </Card.Body>

  </Card>
  <Card>
    <Card.Img variant="top" src="images/reserve.svg" />
    <Card.Body>
      <Card.Title>نقي ونحنا منحجزلك</Card.Title>
      <Card.Text>
      دور على المكان يلي بناسبك شوف شو بقدم وجبات ومشروبات وحلويات اختار يلي بيعجبك واتركنا نحجزلك
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Img variant="top" src="images/search.svg" />
    <Card.Body>
      <Card.Title>ابحث عن مكانك المفضل</Card.Title>
      <Card.Text>
      دور على المكان يلي بناسبك شوف شو بقدم وجبات ومشروبات وحلويات اختار يلي بيعجبك واتركنا نحجزلك
      </Card.Text>
    </Card.Body>
    
  </Card>
</CardGroup>
</React.Fragment>
    )
  }
}

export default BootstrapCardGroupComponent;