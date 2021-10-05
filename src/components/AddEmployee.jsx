import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { addEmployee } from '../Service/api';
import { useHistory } from "react-router-dom";

const initialValues = {
  name: '',
  email: '',
  phone: '',
  empId: '',
  address1: '',
  address2: ''
}

const AddEmployee = () => {

  const [employee, setEmployee] = useState(initialValues);
  const { name, email, phone, empId, address1, address2 } = employee;
  let history = useHistory();

  const onChangeHandler = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  }
  
  const addEmployeeDetails = async () => {
    await addEmployee(employee);
    goback();
  }

  const goback =()=>{
    history.push('/all');
  }

  return (
    <div>
      <Container>
        <h1 className="text-center my-4">Add New Employee</h1>
        <Form className='mt-3 p-4 rounded-3 shadow-lg'>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Name</Form.Label>
              <Form.Control className type="text" placeholder="Enter name" onChange={(e) => { onChangeHandler(e) }} name='name' value={name} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridId">
              <Form.Label>Employee Id</Form.Label>
              <Form.Control type="number" placeholder="Employee Id" onChange={(e) => { onChangeHandler(e) }} name='empId' value={empId} />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control className type="email" placeholder="Enter email" onChange={(e) => { onChangeHandler(e) }} name='email' value={email} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPhoneNumber">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="number" placeholder="Number" onChange={(e) => { onChangeHandler(e) }} name='phone' value={phone} />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address 1</Form.Label>
            <Form.Control placeholder="1234 Main St" onChange={(e) => { onChangeHandler(e) }} name='address1' value={address1} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" onChange={(e) => { onChangeHandler(e) }} name='address2' value={address2} />
          </Form.Group>

          <div className="d-flex justify-content-between">
            <Button className='col rounded-0 rounded-start' variant="primary" type="submit" size='lg' onClick={() => addEmployeeDetails()} >Add</Button>
            <Button className='col rounded-0 rounded-end' variant="danger" type="submit" size='lg' onClick={() => goback()} >Cancel</Button>
          </div>
        </Form>
      </Container>
    </div>
  )
}

export default AddEmployee;