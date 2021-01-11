// libraries
import { useState } from "react";
import {
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  
} from "reactstrap";

// styles
import "../styles/Contact.css";

const Contact = () => {
  // states
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (fname.length < 3) {
      setShowError(true);
      setShowSuccess(false);
    } else if (lname.length < 3) {
      setShowError(true);
      setShowSuccess(false);
    } else if (!email.includes("@")) {
      setShowError(true);
      setShowSuccess(false);
    } else if (message.length < 1) {
      setShowError(true);
      setShowSuccess(false);
    } else {
      setShowSuccess(true);
      setShowError(false);
    }

    setTimeout(() => {
      setShowError(false);
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <div className='contact d-flex justify-content-center align-items-center'>
      <Form onSubmit={(e) => handleSubmit(e)} className='container py-5'>
        <FormGroup row>
          <Col sm={10} className='offset-sm-2 col-12'>
            {showSuccess && (
              <div
                className='contact-alert mb-2'
                style={{ backgroundColor: "green" }}
              >
                Successfully submitted the form!
              </div>
            )}

            {showError && (
              <div
                className='contact-alert mb-2'
                style={{ backgroundColor: "red" }}
              >
                Please fill all the fields!!
              </div>
            )}
          </Col>
          <Label for='firstnameInput' sm={2}>
            First Name
          </Label>
          <Col sm={10}>
            <Input
              type='text'
              name='firstname'
              id='firstNameInput'
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for='lastnameInput' sm={2}>
            Last Name
          </Label>
          <Col sm={10}>
            <Input
              type='text'
              name='lastname'
              id='lastNameInput'
              value={lname}
              onChange={(e) => setLname(e.target.value)}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for='emailinput' sm={2}>
            Email
          </Label>
          <Col sm={10}>
            <Input
              type='email'
              name='email'
              id='emailinput'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for='messageInput' sm={2}>
            Message
          </Label>
          <Col sm={10}>
            <Input
              type='textarea'
              name='message'
              id='messageInput'
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Col>
        </FormGroup>
        <div className='offset-sm-2 col-sm-10 col-12 p-0'>
          <Button className='w-100 contact-btn'>Submit</Button>
        </div>
      </Form>
    </div>
  );
};

export default Contact;
