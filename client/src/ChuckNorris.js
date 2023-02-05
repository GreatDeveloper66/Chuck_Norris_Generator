import { Component } from 'react'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

export class ChuckNorris extends Component {
    constructor(props) {
        super(props)
        this.state = { 
                        randomInt: 1, 
                        norrisQuote: "Chuck Norris is the only person who can win a chess game in one move.",
                        imageSrc: `/images/chuck_norris/chuck-norris1.jpg`
                    }
    }

    newRandom() {
        const newRandomInt = Math.ceil(Math.random(1,10)*10)
        this.setState({randomInt: newRandomInt, imageSrc: `/images/chuck_norris/chuck-norris${newRandomInt}`})
    }

    async newNorrisQuote() {
        const response = await fetch('http://localhost:5000/chucknorrisrandomjoke')
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
                            <Card.Img variant="top" src="{this.state.imageSrc}" alt="Card Img Top" id="chuckNorrisImage" />
                            <Card.Body>
                                <Card.Title>Chuck Norris Generator</Card.Title>
                                <Card.Text id="chuckNorrisQuote">
                                    {this.state.norrisQuote}
                                </Card.Text>
                                <Button variant="primary" id="refreshButton" onClick={this.newQuote}></Button>
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



