import React from 'react';
import { Button, ButtonToolbar } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

const BuyBTC = ({ handleSubmit }) => (
  <div className="dashboard__place-order-form">
    <h5 className="bold-text">Exchange USD</h5>
    <h5 className="dashboard__place-order-form-subhead subhead"></h5>
    <form className="form form--horizontal" onSubmit={handleSubmit}>
      
      <div className="form__form-group">
        <span className="form__form-group-label">BIRR</span>
        <div className="form__form-group-field">
          <Field
            name="amount"
            component="input"
            type="text"
            placeholder="567834 Birr"
          />
        </div>
      </div>
      <div className="form__form-group">
        <span className="form__form-group-label">DOLLAR</span>
        <div className="form__form-group-field">
          <Field
            name="total"
            component="input"
            type="text"
            placeholder="$ 222,565"
          />
        </div>
      </div>
      <ButtonToolbar className="form__button-toolbar">
        <Button color="primary" type="submit">Calculate</Button>
      </ButtonToolbar>
    </form>
  </div>
);

BuyBTC.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'buy_btc_form', // a unique identifier for this form
})(BuyBTC);
