import React from 'react'
import { useState } from 'react'
import Useform from './Useform'
import {Form,Button} from 'react-bootstrap'
import Validation from './Validation'
import {Link,Router,Switch,Route} from 'react-router-dom'
function Registration() {
    const {handleChange,values,handleSubmit,errors} = Useform();
  return (
    <div>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Full Name</Form.Label>
    <Form.Control type="text" placeholder="Enter your Full Name" name='name' value={values.name} onChange={handleChange}/>
  </Form.Group>
  {errors.name && <p>{errors.name}</p>}
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email"  name='email' value={values.email} onChange={handleChange}/>
  </Form.Group>
  {errors.email&& <p>{errors.email}</p>}
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" name='password' value={values.password} onChange={handleChange}/>
  </Form.Group>
  {errors.password && <p>{errors.password}</p>}
  <Form.Group className="mb-3" controlId="formBasicPlace">
    <Form.Label>Place</Form.Label>
    <Form.Control type="text" placeholder="Enter your place" name='place' value={values.place} onChange={handleChange}/>
  </Form.Group>
  {errors.place && <p>{errors.place}</p>}
  <Button variant="primary" type="submit" onClick={event=> window.location.href='/Login'}>
    Register
  </Button>
</Form>
    </div>
  )
}

export default Registration