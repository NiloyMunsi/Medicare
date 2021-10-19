import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword,updateProfile} from "firebase/auth";


const Email = () => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const [name, setName] = useState('');
    const auth = getAuth();



    const handleRegestation = e => {
        e.preventDefault();
    
        if (isLogin) {
          processLogin(email, pass);
        }
        else {
          registerNewUser(email, pass);
        }
    
      }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = e => {
        setPass(e.target.value);
    }
    const togoleLogin = e => {
        setIsLogin(e.target.checked)
    }
    const handleName = e => {
        setName(e.target.value);
    }

    const processLogin = (email, pass) => {
        signInWithEmailAndPassword(auth, email, pass)
          .then(result => {
            const user = result.user;
            console.log(user);
            setError('');
          })
          .catch(error => {
            setError(error.message);
          })
    }
      const setUserName = (name) => {
      updateProfile(auth.currentUser, { displayName: name })
      .then(result => { })
  }

      const registerNewUser = (email, pass) => {
        createUserWithEmailAndPassword(auth, email, pass)
          .then(result => {
            const user = result.user;
            console.log(user);
              setError('');
              setUserName()
          })
          .catch(error => {
            setError(error.message);
          })
    }
    
    
    return (
        <div className="mx-5 my-3 text-start">

        
            <h1>Please {isLogin ? 'Login' : 'Register'}!</h1>
            <Form.Label>Your Name</Form.Label>
            <Form.Control onSubmit={handleName} type="text" placeholder="Enter Name"  required/>
  <br />
            <Form onSubmit={handleRegestation}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" required />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" required/>
  </Form.Group>
  <Form.Group onChange={togoleLogin} className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Already Registered ?" />
                </Form.Group>
                <div className="text-danger mb-3">{ error}</div>
  <Button className="btn btn-warning" type="submit">
    {isLogin?'Login':'Register'}
  </Button>
</Form>
        </div>
    );
};

export default Email;