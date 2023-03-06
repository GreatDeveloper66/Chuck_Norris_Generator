import React, { useState } from 'react';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom'

function LoginForm() {

  const [justifyActive, setJustifyActive] = useState('tab1')

  const [ emailLogin, setEmailLogin ] = useState('')
  const [ passwordLogin , setPasswordLogin ] = useState('')
  const [nameRegister, setNameRegister ] = useState('')
  const [usernameRegister, setUsernameRegister ] = useState('')
  const [ emailRegister, setEmailRegister ] = useState('')
  const [ passwordRegister , setPasswordRegister ] = useState('')  

  let navigate = useNavigate()
  

  const handleEmailLoginChange = event => {
    event.preventDefault()
    setEmailLogin(event.target.value)
  }
  const handlePasswordLoginChange = event => {
    event.preventDefault()
    setPasswordLogin(event.target.value)
  }
  const handleNameRegisterChange = event => {
    event.preventDefault()
    setNameRegister(event.target.value)
  }
  const handleUsernameRegisterChange = event => {
    event.preventDefault()
    setUsernameRegister(event.target.value)
  }
  const handleEmailRegisterChange = event => {
    event.preventDefault()
    setEmailRegister(event.target.value)
  }
  const handlePasswordRegisterChange = event => {
    event.preventDefault()
    setPasswordRegister(event.target.value)
  }

  const handleSignIn = event => {
      event.preventDefault()
      console.log(" Email: " + emailLogin + " " + passwordLogin)
      navigate('ChuckNorris')
  }

  const handleSignUp = event => {
    event.preventDefault()
    console.log("Name + " + nameRegister + "Username: + " + usernameRegister + " Email: " + emailRegister + " Password:  " + passwordRegister + " ")
    navigate('ChuckNorris')
    
}


  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  }

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>

        <MDBTabsPane show={justifyActive === 'tab1'}>

          <div className="text-center mb-3">
            <p>Sign in with:</p>

            <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='facebook-f' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='twitter' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='google' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='github' size="sm"/>
              </MDBBtn>
            </div>

            <p className="text-center mt-3">or:</p>
          </div>

          <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' value={ emailLogin }onChange={ handleEmailLoginChange }/>
          <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' value={ passwordLogin } onChange= { handlePasswordLoginChange }/>

          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>
            <MDBBtn className="mb-4 w-100" onClick={ handleSignIn }>Sign in</MDBBtn>
          <p className="text-center">Not a member? <a href="#!">Register</a></p>

        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === 'tab2'}>

          <div className="text-center mb-3">
            <p>Sign un with:</p>

            <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='facebook-f' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='twitter' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='google' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='github' size="sm"/>
              </MDBBtn>
            </div>

            <p className="text-center mt-3">or:</p>
          </div>

          <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text' value = { nameRegister } onChange={ handleNameRegisterChange }/>
          <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='text' value ={ usernameRegister } onChange={ handleUsernameRegisterChange } />
          <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'value={ emailRegister } onChange={ handleEmailRegisterChange }/>
          <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'value={ passwordRegister }onChange={ handlePasswordRegisterChange }/>

          <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
          </div>
            <MDBBtn className="mb-4 w-100" onClick={ handleSignUp }>Sign up</MDBBtn>

        </MDBTabsPane>

      </MDBTabsContent>

    </MDBContainer>
  );
}

export default LoginForm;