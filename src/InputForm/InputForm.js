import React from "react";
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';

const formSchema = yup.object().shape({
    firstName: yup.string()
        .min(2, 'Name is Too short')
        .max(15, 'Name is Too long')
        .required('This field is required'),
    secondName: yup.string()
        .min(2, 'Name is Too short')
        .max(15, 'Name is Too long')
        .required('This field is required'),
    thirdName: yup.string()
        .min(2, 'Name is Too short')
        .max(15, 'Name is Too long')
        .required('This field is required'),
    lastName: yup.string()
        .min(2, 'Name is Too short')
        .max(15, 'Name is Too long')
        .required('This field is required'),
    phoneNumber: yup.number()
        .required('This field is required'),
    IBANNumber: yup.string()
        .required('This field is required')
        .trim()
})

const InputForm = () => {

    return (
        <Container>
        <Formik initialValues={{
            firstName:'',
            secondName:'',
            thirdName:'',
            lastName:'',
            phoneNumber:'',
            IBANNumber:'',
            picture: React.createRef(),
        }}
        validationSchema={formSchema}
        onSubmit={console.log}
        >
             {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            name='firstName' 
                            placeholder="First Name" 
                            value={values.firstName} 
                            onChange={handleChange}
                            isInvalid={errors.firstName} />
                        <Form.Control.Feedback type='invalid'>{errors.firstName}</Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>Second Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            name='secondName' 
                            placeholder="Second Name" 
                            value={values.secondName} 
                            onChange={handleChange}
                            isInvalid={errors.secondName} />
                        <Form.Control.Feedback type='invalid'>{errors.secondName}</Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>Third Name</Form.Label>
                        <Form.Control 
                        type="text" 
                        name='thirdName' 
                        placeholder="Third Name" 
                        value={values.thirdName} 
                        onChange={handleChange} 
                        isInvalid={errors.thirdName}/>
                        <Form.Control.Feedback type='invalid'>{errors.thirdName}</Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control 
                        type="text" 
                        name='lastName' 
                        placeholder="Last Name" 
                        value={values.lastName} 
                        onChange={handleChange} 
                        isInvalid={errors.lastName} />
                        <Form.Control.Feedback type='invalid'>{errors.lastName}</Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                    type="number"
                    name='phoneNumber'
                    placeholder="Phone Number"
                    value={values.phoneNumber}
                    onChange={handleChange}
                    isInvalid={errors.phoneNumber}
                />
                <Form.Control.Feedback type='invalid'>{errors.phoneNumber}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
                <Form.Label>IBAN Number</Form.Label>
                <Form.Control
                    type="text"
                    name='IBANNumber'
                    placeholder="IBAN Number"
                    value={values.IBANNumber}
                    onChange={handleChange}
                    isInvalid={errors.IBANNumber}
                />
                <Form.Control.Feedback type='invalid'>{errors.IBANNumber}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
                <Form.File id="portrait" label="Your Picture" ref={values.picture} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
      )}
        </Formik>
        </Container>
    )
}

export default InputForm;