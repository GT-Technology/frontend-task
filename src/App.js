import React, { Component } from "react";
import {   Container, Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import "./App.css";

const FormErrors = ({formErrors}) =>
  <div className='formErrors'>

    {Object.keys(formErrors).map((fieldName, i) => {
      if(formErrors[fieldName].length > 0){
        return (
          <Alert color="danger" >
            <p key={i}>{fieldName} {formErrors[fieldName]}</p>
          </Alert>
        )
      } else {
        return '';
      }
    })}

  </div>


class App extends Component {

    constructor (props) {
      super(props);
      this.state = {
        ...this.formResetPassword
      };
    }


    formResetPassword = {
        formValid: false,
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
        formErrors: {oldPassword: '', newPassword: '', confirmPassword: ''},
        oldPasswordValid: false,
        newPasswordValid: false,
        confirmPasswordValid: false,
    }


    submitHandler = (e) => {
      e.preventDefault();
      if (this.formIsValid()) {
       // form processing here....
       // reset form
      }
    };

    formIsValid = ( ) => {
      // another validation here
      if (this.state.newPassword != this.state.confirmPassword) {
        return false;
      }
      // another validation here
      if (!this.state.oldPassword && !this.state.newPassword && !this.state.confirmPassword) {
        return false;
      }
      return true;
    }

    handleUserInput = (e) => {
      const name = e.target.name;
      const value = e.target.value;

      this.setState({[name]: value}, () => { this.validateEachField(name, value) });

    }

    validateEachField =  (fieldName, value) => {
      let fieldValidationErrors = this.state.formErrors;
      let oldPasswordValid = this.state.oldPasswordValid;
      let newPasswordValid = this.state.newPasswordValid;
      let confirmPasswordValid = this.state.confirmPasswordValid;
      let flag = false;

      switch(fieldName) {
        case 'oldPassword':
          oldPasswordValid = value.length >= 0;
          fieldValidationErrors.message = oldPasswordValid ? '': '- Old password is required';
          break;
        case 'newPassword':
          newPasswordValid = value.match(/((^[0-9]+[a-z]+)|(^[a-z]+[0-9]+))+[0-9a-z]+$/i) && value.length >= 0;
          fieldValidationErrors.invalid = newPasswordValid ? '':
                '- Password required, min of 8 characters and a mixture of numbers and letters';

          flag = ( this.state.confirmPassword.length !="" && value == this.state.confirmPassword );
          fieldValidationErrors.match = flag ? '': '- Passwords don\'t match';
          confirmPasswordValid =  flag;

          break;
        case 'confirmPassword':
          confirmPasswordValid = (value == this.state.newPassword);
          fieldValidationErrors.match = confirmPasswordValid ? '': '- Passwords don\'t match';
          break;
        default:
          break;
      }

      this.setState({formErrors: fieldValidationErrors,
                    oldPasswordValid: oldPasswordValid,
                    newPasswordValid: newPasswordValid,
                    confirmPasswordValid: confirmPasswordValid,
                  }, this.validateForm);
    }

    validateForm() {
      this.setState({formValid: this.state.oldPasswordValid && this.state.newPasswordValid
              && this.state.confirmPasswordValid });
    }


    render() {

        const { oldPassword, newPassword, confirmPassword } = this.state;

        return (
              <Container className="reset-password">


                <FormErrors formErrors={this.state.formErrors} />

                <Form className="form" onSubmit={this.submitHandler} >
                  <h2 className="form-signin-heading">Change password</h2>

                    <FormGroup >
                      <Label>Old Password</Label>

                      <Input type="password" className="form-control" id="inputPassword"
                            value={oldPassword.value} name="oldPassword"
                            aria-describedby="Old Password" onChange={this.handleUserInput} />
                    </FormGroup>


                    <FormGroup>
                      <Label>New password</Label>

                      <Input type="password" className="form-control" id="inputNewPassword"
                            value={newPassword.value} name="newPassword"
                            aria-describedby="New password" onChange={this.handleUserInput} />

                    </FormGroup>


                    <FormGroup>
                      <Label>Confirm password</Label>

                      <Input type="password" className="form-control" id="inputConfirmPassword"
                          value={confirmPassword.value} aria-describedby="Confirm password"
                            name="confirmPassword" onChange={this.handleUserInput} />
                    </FormGroup>

                  <div>
                     <Button outline color="secondary" className="buttons">Cancel</Button>{' '}
                     <Button color="info" type='submit'  disabled={!this.state.formValid} >Change Password</Button>
                   </div>

                </Form>
              </Container>
            );
        }
    }

export default App;
