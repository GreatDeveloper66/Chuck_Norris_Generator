import { Component } from 'react'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

class ChuckNorris extends Component {
    constructor(props) {
        super(props)
        this.state = { randomInt: 1 }
    }

    newRandom() {
        this.setState({randomInt: Math.floor(Math.random() * 10)})
    }

    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs lg="2">
                        
                    </Col>
                </Row>

            </Container>    
        )
           
        
    }
}
    
/*
 <div class="container">
                <div class="row justify-content-md-center">
                <div class="col-lg-4">
                    <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="..." alt="Card image cap" id="chuckNorrisImage" />
                        <div class="card-body">
                        <h5 class="card-title">Chuck Norris Generator</h5>
                        <p class="card-text" id="chuckNorrisQuote">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary" id="refreshButton">Refresh</a>
                    </div>
            </div>
        </div>
      </div>
      */



