import React, {useReducer, useState} from "react";

import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/cjs/Container";
import Button from "react-bootstrap/cjs/Button";
import { Row, Col } from 'react-bootstrap';

const InputForm = () => {
    const [FirstName, SetFirstName] = useState('')
    const [SecondName, SetSecondNAme] = useState('')
    const [ThirdName, SetThirdName] = useState('')
    const [LastName, SetLastName] = useState('')
    const [PhoneNumber, SetPhoneNumber] = useState('')
    const [IBANNumber, SetIBANNumber] = useState('')
    const Picture = React.createRef()

    const submitHandler = event => {
        event.preventDefault();
        let formData = {
            FirstName, SecondName, ThirdName, LastName, PhoneNumber, IBANNumber, Picture
        }
        console.log(formData)
    }

    return (
        <Container>
        <Form>
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="First Name" value={FirstName} onChange={event => SetFirstName(event.target.value)} />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>Second Name</Form.Label>
                        <Form.Control type="text" placeholder="Second Name" value={SecondName} onChange={event => SetSecondNAme(event.target.value)} />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>Third Name</Form.Label>
                        <Form.Control type="text" placeholder="Third Name" value={ThirdName} onChange={event => SetThirdName(event.target.value)}/>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Last Name" value={LastName} onChange={event => SetLastName(event.target.value)} />
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="number" placeholder="Phone Number" value={PhoneNumber} onChange={event => SetPhoneNumber(event.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>IBAN Numberr</Form.Label>
                <Form.Control type="text" placeholder="IBAN Number" value={IBANNumber} onChange={event => SetIBANNumber(event.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.File id="portrait" label="Your Picture" ref={Picture} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={submitHandler}>
                Submit
            </Button>
        </Form>
        </Container>
    )
}

export default InputForm;