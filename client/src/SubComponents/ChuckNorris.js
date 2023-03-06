import {Button, Container, Row, Card, Table } from 'react-bootstrap'
import { useState, useEffect } from 'react'

let CNImage1 = require("../images/chuck_norris/chuck-norris1.jpg")
let CNImage2 = require("../images/chuck_norris/chuck-norris2.jpg")
let CNImage3 = require("../images/chuck_norris/chuck-norris3.jpg")
let CNImage4 = require("../images/chuck_norris/chuck-norris4.jpg")
let CNImage5 = require("../images/chuck_norris/chuck-norris4.jpg")
let CNImage6 = require("../images/chuck_norris/chuck-norris6.jpg")
let CNImage7 = require("../images/chuck_norris/chuck-norris7.jpg")
let CNImage8 = require("../images/chuck_norris/chuck-norris8.jpg")
let CNImage9 = require("../images/chuck_norris/chuck-norris9.jpg")
let CNImage10 = require("../images/chuck_norris/chuck-norris10.jpg")

let imageArr = [CNImage1,CNImage2,CNImage3,CNImage4,CNImage5,CNImage6,CNImage7,CNImage8,CNImage9,CNImage10]

function ChuckNorris() {
  const [randomInt, setRandomint] = useState(1)
    const [norrisQuote, setNorrisQuote ] = useState("Chuck Norris is the only person who can win a chess game in one move.")
    const [ image, setImages ] = useState(imageArr[randomInt])
    const [ chuckNorrisCards, setChuckNorrisCards ] = useState([])

    async function refreshNorris() {
      const response = await fetch('/chucknorrisrandomjoke')
      const jsonResponse = await response.json()
      setNorrisQuote(jsonResponse.value)
      setRandomint(Math.ceil(Math.random(1,10)*10))
      setImages(imageArr[randomInt])
    }

    function saveChuckNorrisCard() {
      const newCards = chuckNorrisCards.slice(0)
      newCards.push({"norrisQuote": norrisQuote, "image": image})
      setChuckNorrisCards(newCards)
    }

    function deleteChuckNorrisCard(index) {
      const newCards = [...chuckNorrisCards]
      newCards.splice(index,1)
      setChuckNorrisCards(newCards)
    }

  
  return (
    <div className="App">
      <Container>
        <Row className="justify-content-md-center">
          <Card>
              <Card.Img variant="top" src={image} onClick={() => saveChuckNorrisCard()}>

              </Card.Img>
              <Card.Body>
                <Card.Title>
                  Chuck Norris Generator
                </Card.Title>
                <Card.Text id="chuckNorrisQuote" onClick={() => saveChuckNorrisCard()}>
                  {norrisQuote}
                </Card.Text>
                <Button variant="primary" id="refreshButton" onClick={() => refreshNorris()}>
                  Refresh Chuck Norris Quote
                </Button>
              </Card.Body>
          </Card>
        </Row>
        <Row className="justify-content-md-center">
          <Table>
            <thead>
              <tr>
                <th>Chuck Norris Photo</th>
                <th>Chuck Norris Quote</th>
                <th>Delete</th>
                <th>Up</th>
                <th>Down</th>
              </tr>
            </thead>
            <tbody>
            {
            chuckNorrisCards.map((elem) => (
              <tr>
                <td><img src={elem.image} alt="missing"></img></td>
                <td>{elem.norrisQuote}</td>
                <td><button>Delete</button></td>
                <td><button>Up</button></td>
                <td><button>Down</button></td>
              </tr>
            ))}

              </tbody>
          </Table>
          
        </Row>
      </Container>
      
    </div>
  );
}

export default ChuckNorris;
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