import React, { useState } from 'react';
import { Form, Button, Alert, Container, Row, Col } from 'react-bootstrap';


function RegisterForm() {
  
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    // TODO: Submit form
  };
  
  const handleUsernameChange = event => {
    setUsername(event.target.value);
  };
  
  const handleEmailChange = event => {
    setEmail(event.target.value);
  };
  
  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };
  
  const styles = {
    formContainer: {
      backgroundColor: '#F9F9F9',
      padding: '20px',
    },
  };
  

  return (
    <div style={styles.formContainer}>
      <Container>
        <Row>
          <Col xs={12} md={6} lg={4}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" value={username} onChange={handleUsernameChange} />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleEmailChange} />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" value={password} onChange={handlePasswordChange} />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
                {error && <Alert variant="danger">{error}</Alert>}
            </Form>
          </Col>
        </Row>
      </Container>
    </div> 
  )

}

export default RegisterForm