import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import { Row } from 'react-bootstrap';

class BootstrapCardGroupComponent extends React.Component {
    render() {
        return(
            <React.Fragment>
                <div className="popina">
                <Row>
                    <div className="baba">
                    <Col>
                    <div className="paprica">
                    <img src="images/mobile app download.png"/>
                </div>
                    </Col>
                    </div>
                    <div className="icon">
                    <Col>
                    <div className="store">
                    <p className="praghraf">الان Parica حمل تطبيق</p>
                    <img className="google" src="images/google-play-badg.png"/>
                    <img className="apple" src="images/Available_on_the_App_Store.png"/>
                    <p className="article">Reserve, Eat, Enjoy, Repeat...</p>
                </div>
                    </Col>
                    </div>
                </Row>
                </div>
                <div className="social">
                    <Row>
                        <img className="mail" src="images/email.svg"/>
                        <p className="facebook">info@popina.sy</p>
                        <img className="face" src="images/facebook.svg"/>
                        <p className="email">paprica.sy</p>
                    </Row>
                </div>
            </React.Fragment>

        )
    }
}

export default BootstrapCardGroupComponent;