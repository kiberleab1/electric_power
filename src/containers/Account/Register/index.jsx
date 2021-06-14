import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import * as firebase from 'firebase/app';
import RegisterForm from '../../../shared/components/login/RegisterForm';

class Register extends PureComponent {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
  };

  state = {
    error: '',
  };

  registerFireBase = (user) => {
    const { history } = this.props;
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then(() => {
        history.push('/log_in');
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  };

  render() {
    const { error } = this.state;
    return (
        <div>
            <RegisterForm  />
        </div>
    );
  }
}

export default withRouter(Register);
