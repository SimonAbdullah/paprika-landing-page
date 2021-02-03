import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { Row } from 'react-bootstrap';


class BootstrapFormGropComponent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="contact">
        <Row>
        <img src ="images/ContactUs.svg"/>
				<h1>تواصل معنا</h1>
				<p className="contactus">عندك مطعم؟ حابب تعمل شي جديد ومميز؟</p>
        </Row>
        </div>
        <Form>
          <Form.Row cen>
            <Col>
              <Form.Control placeholder="رقم الهاتف او البريد الالكتروني" />
            </Col>
            <Col>
              <Form.Control placeholder="اسم مطعمك" />
            </Col>
          </Form.Row>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <label for="exampleFormControlTextarea1">يمكنك تحميل ملف يتضمن صور ومعلومات عن المطعم والوجبات المتوفرة</label>
        </Form>
        <button type="submit" className="btn btn-primary">ارسال</button>
      </React.Fragment>
    );
  }
}
export default BootstrapFormGropComponent;
