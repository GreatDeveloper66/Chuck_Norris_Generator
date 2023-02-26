import logo from './logo.svg';
import './App.css';
import {Button, Container, Row, Card } from 'react-bootstrap'
import { useState, useEffect } from 'react'

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

let imageArr = [CNImage1,CNImage2,CNImage3,CNImage4,CNImage5,CNImage6,CNImage7,CNImage8,CNImage9,CNImage10]

function App() {
  const [randomInt, setRandomint] = useState(1)
    const [norrisQuote, setNorrisQuote ] = useState("Chuck Norris is the only person who can win a chess game in one move.")
    const [ image, setImages ] = useState(
            imageArr[randomInt]
        
          /*[
            {id: 1, src: CNImage1},
            {id: 2, src: CNImage2},
            {id: 3, src: CNImage3},
            {id: 4, src: CNImage4},
            {id: 5, src: CNImage5},
            {id: 6, src: CNImage6},
            {id: 7, src: CNImage7},
            {id: 8, src: CNImage8},
            {id: 9, src: CNImage9},
            {id: 10, src: CNImage10},
          ]
            */
        
    )

    async function refreshNorris() {
      const response = await fetch('/chucknorrisrandomjoke')
      const jsonResponse = await response.json()
      setNorrisQuote(jsonResponse.value)
      setRandomint(Math.ceil(Math.random(1,10)*10))
      setImages(imageArr[randomInt])
      /*
      this.setState({norrisQuote: jsonResponse.value})
      fetch('/chucknorrisrandomjoke')
        .then(response => {
          response.json()
          console.log(response.json())
        })
        .then(data => {
          console.log(data)
          setNorrisQuote(data)
          setRandomint(Math.ceil(Math.random(1,10)*10))
          setImages(imageArr[randomInt])
        })
        .catch(err => {
          console.log("error is: " + err)
        })
        */
    }

  
  return (
    <div className="App">
      <Container>
        <Row className="justify-content-md-center">
          <Card>
              <Card.Img variant="top" src={image}>

              </Card.Img>
              <Card.Body>
                <Card.Title>
                  Chuck Norris Generator
                </Card.Title>
                <Card.Text id="chuckNorrisQuote">
                  {norrisQuote}
                </Card.Text>
                <Button variant="primary" id="refreshButton" onClick={() => refreshNorris()}>
                  Refresh Chuck Norris Quote
                </Button>
              </Card.Body>
          </Card>
        </Row>
      </Container>
      
    </div>
  );
}

export default App;
/*
<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      */