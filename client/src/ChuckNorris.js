import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

function chuckNorris() {

}


/*
let CNImage1 = require("./images/chuck_norris/chuck-norris1.jpg")
let CNImage2 = require("./images/chuck_norris/chuck-norris2.jpg")
let CNImage3 = require("./images/chuck_norris/chuck-norris3.jpg")
let CNImage4 = require("./images/chuck_norris/chuck-norris4.jpg")
let CNImage5 = require("./images/chuck_norris/chuck-norris4.jpg")
let CNImage6 = require("./images/chuck_norris/chuck-norris6.jpg")
let CNImage7 = require("./images/chuck_norris/chuck-norris7.jpg")
let CNImage8 = require("./images/chuck_norris/chuck-norris8.jpg")
let CNImage9 = require("./images/chuck_norris/chuck-norris9.jpg")
let CNImage10 = require("./images/chuck_norris/chuck-norris10.jpg")
//let imageArr = [CNImage1,CNImage2,CNImage3,CNImage4,CNImage5,CNImage6,CNImage7,CNImage8,CNImage9,CNImage10]
*/
/*let CNImage1 = require("./images/chuck_norris/chuck-norris1.jpg")
function ChuckNorris() {
    const [randomInt, setRandomint] = useState(1)
    const [norrisQuote, setNorrisQuote ] = useState("Chuck Norris is the only person who can win a chess game in one move.")
    const [ images, setImages ] = useState(
        [
            {id: 1, src: './images/chuck_norris/chuck-norris1.jpg'},
            {id: 2, src: './images/chuck_norris/chuck-norris2.jpg'},
            {id: 3, src: './images/chuck_norris/chuck-norris3.jpg'},
            {id: 4, src: './images/chuck_norris/chuck-norris4.jpg'},
            {id: 5, src: './images/chuck_norris/chuck-norris5.jpg'},
            {id: 6, src: './images/chuck_norris/chuck-norris6.jpg'},
            {id: 7, src: './images/chuck_norris/chuck-norris7.jpg'},
            {id: 8, src: './images/chuck_norris/chuck-norris8.jpg'},
            {id: 9, src: './images/chuck_norris/chuck-norris9.jpg'},
            {id: 10, src: './images/chuck_norris/chuck-norris10.jpg'},
        ]
    )
    //const [imageSrc, setImageSrc ] = useState(CNImage1)
    
    useEffect(() => {
        fetch('/chucknorrisrandomjoke')
            .then(response => response.json())
            .then(data => {
                setNorrisQuote(data)
                /*
                const image = imageArr[randomInt]
                console.log("IMAGE IS: " + image)
                setImageSrc(image)
                console.log("imageSrc: " + imageSrc)
                */
               /*
            }).catch(err => {
                console.log("fetch error: " + err)
            })
        })

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col xs lg="2">
                    <Card>
                    
                    <img key={images[1].id} src={images[1].src}></img>
                        <Card.Body>
                            <Card.Title>Chuck Norris Generator</Card.Title>
                            <Card.Text id="chuckNorrisQuote">
                                {norrisQuote}
                            </Card.Text>
                            <Button variant="primary" id="refreshButton" onClick={() => setRandomint(Math.ceil(Math.random(1,10)*10))}>Refresh Chuck Norris Quote</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>    
    )
}

export { ChuckNorris }


/*
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

        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs lg="2">
                        <Card>
                            <Card.Img variant="top" src={this.state.imageSrc} alt="Card Img Top" id="chuckNorrisImage" />
                            <Card.Body>
                                <Card.Title>Chuck Norris Generator</Card.Title>
                                <Card.Text id="chuckNorrisQuote">
                                    {norrisQuote}
                                </Card.Text>
                                <Button variant="primary" id="refreshButton" onClick={this.newQuote}>Refresh Chuck Norris Quote</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>    
        )
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

<Card.Img variant="top" key={images[1].id}src={images[1].src} alt="Card Img Top" id="chuckNorrisImage" />

      */



