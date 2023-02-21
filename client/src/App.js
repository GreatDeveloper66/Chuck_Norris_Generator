//import logo from './logo.svg';
import './App.css';
//import { ChuckNorris } from './ChuckNorris.js'

function App() {
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