import React from 'react';
import { Button, ButtonToolbar } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

const SellBTC = ({ handleSubmit }) => (
  <div className="dashboard__place-order-form">
    <h5 className="bold-text">Exchange GBP</h5>
    <h5 className="dashboard__place-order-form-subhead subhead"></h5>
    <form className="form form--horizontal" onSubmit={handleSubmit}>
      <div className="form__form-group">
        <span className="form__form-group-label">BIRR</span>
        <div className="form__form-group-field">
          <Field
            name="amount"
            component="input"
            type="text"
            placeholder="2,455 732 BIRR"
          />
        </div>
      </div>
      <div className="form__form-group">
        <span className="form__form-group-label">GBP</span>
        <div className="form__form-group-field">
          <Field
            name="total"
            component="input"
            type="text"
            placeholder="GBP 112,454"
          />
        </div>
      </div>
      <ButtonToolbar className="form__button-toolbar">
        <Button color="success" type="submit">Calculate</Button>
      </ButtonToolbar>
    </form>
  </div>
);

SellBTC.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'sell_btc_form', // a unique identifier for this form
})(SellBTC);
