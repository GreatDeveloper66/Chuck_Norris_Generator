import { Component } from 'react'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import CNImage1 from "./images/chuck_norris/chuck-norris1.jpg"
import CNImage2 from "./images/chuck_norris/chuck-norris2.jpg"
import CNImage3 from "./images/chuck_norris/chuck-norris3.jpg"
import CNImage4 from "./images/chuck_norris/chuck-norris4.jpg"
import CNImage5 from "./images/chuck_norris/chuck-norris5.jpg"
import CNImage6 from "./images/chuck_norris/chuck-norris6.jpg"
import CNImage7 from "./images/chuck_norris/chuck-norris7.jpg"
import CNImage8 from "./images/chuck_norris/chuck-norris8.jpg"
import CNImage9 from "./images/chuck_norris/chuck-norris9.jpg"
import CNImage10 from "./images/chuck_norris/chuck-norris10.jpg"




export class ChuckNorris extends Component {
    constructor(props) {
        super(props)
        this.state = { 
                        randomInt: 1, 
                        norrisQuote: "Chuck Norris is the only person who can win a chess game in one move.",
                        imageSrc: CNImage1
                    }
        this.newRandom = this.newRandom.bind(this)
        this.newNorrisQuote = this.newNorrisQuote.bind(this)
        this.newQuote = this.newQuote.bind(this)
        this.imageStrings = [
            CNImage1,CNImage2,CNImage3,CNImage4,CNImage5,CNImage6,CNImage7,CNImage8,CNImage9,CNImage10
        ]
    }

    newRandom() {
        const newRandomInt = Math.ceil(Math.random(1,10)*10)
        const imageLink = this.imageStrings[newRandomInt]
        this.setState({randomInt: newRandomInt, imageSrc: imageLink})
    }

    async newNorrisQuote() {
        const response = await fetch('/chucknorrisrandomjoke')
        const jsonResponse = await response.json()
        this.setState({norrisQuote: jsonResponse.value})
    }

    newQuote() {
        this.newRandom()
        this.newNorrisQuote()
    }

    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs lg="2">
                        <Card>
                            <Card.Img variant="top" src={this.state.imageSrc} alt="Card Img Top" id="chuckNorrisImage" />
                            <Card.Body>
                                <Card.Title>Chuck Norris Generator</Card.Title>
                                <Card.Text id="chuckNorrisQuote">
                                    {this.state.norrisQuote}
                                </Card.Text>
                                <Button variant="primary" id="refreshButton" onClick={this.newQuote}>Refresh Chuck Norris Quote</Button>
                            </Card.Body>
                        </Card>
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

      async function getChuckNorrisQuote() {
    const response = await fetch('/chucknorrisrandomjoke')
    const jsonResponse = await response.json()
    console.log(jsonResponse)
    const fact = jsonResponse.value
    

    document.getElementById("chuckNorrisQuote").innerHTML = fact
    const randNum = Math.ceil(Math.random(1,10)*10)
    console.log(randNum)
    document.getElementById("chuckNorrisImage").src=`/images/chuck_norris/chuck-norris${randNum}.jpg`
    
}

window.addEventListener("load", event => {
    getChuckNorrisQuote()
    document.getElementById("refreshButton").addEventListener("click", () => {
        getChuckNorrisQuote()
    })
    

})



      */



