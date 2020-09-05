import React from "react";
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';
import axios from "axios";

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
    picture: yup.object()
        .required('This field is required')
})

const IBANvalidation = (values, props) => {
    let error;
    if (!values) {
        error='required'
    } else if (!/^[a-z0-9]+$/i.test(values)) {
        error='invalid IBAN number'
    }
    return error
}

const InputForm = () => {
    return (
        <Container>
        <Formik 
        initialValues={{
            firstName:'',
            secondName:'',
            thirdName:'',
            lastName:'',
            phoneNumber:'',
            IBANNumber:'',
            picture: React.createRef(),
        }}
        validationSchema={formSchema}
        onSubmit={(values) =>{
            axios.post('', values)
                .then(res => {
                    alert('Thank you for regestoring')
                })
                .catch(err => {
                    alert('something went wrog please try again')
                })
        }}
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
                            onBlur={handleBlur}
                            isInvalid={touched.firstName && errors.firstName}
                             />
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
                            onBlur={handleBlur}       
                            isInvalid={touched.secondName && errors.secondName}

                             />
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
                        onBlur={handleBlur}
                        isInvalid={touched.thirdName && errors.thirdName}
                        />
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
                        onBlur={handleBlur}
                        isInvalid={touched.lastName && errors.lastName}
                         />
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
                    onBlur={handleBlur}
                    isInvalid={touched.phoneNumber && errors.phoneNumber}
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
                    onBlur={handleBlur}
                    isInvalid={touched.IBANNumber && IBANvalidation(values.IBANNumber) }
                />
                <Form.Control.Feedback type='invalid'><div>{IBANvalidation(values.IBANNumber)}</div></Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
                <Form.File  
                accept={'image/*'}
                id="portrait" 
                label="Your Picture" 
                ref={values.picture} 
            />
            </Form.Group>
            <Button 
            variant="primary" 
            type="submit"
            disabled={!isValid}
            >
                Submit
            </Button>
        </Form>
      )}
        </Formik>
        </Container>
    )
}

export default InputForm;