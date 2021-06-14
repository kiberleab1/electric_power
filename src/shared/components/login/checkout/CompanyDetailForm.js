import React, { Component, Link } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Label } from 'semantic-ui-react';
import Input from '@material-ui/core/Input';
class CompanyDetailForm extends Component {
  constructor(props) {
    super(props)
  }

  getData = () => {
    return this.state;
  }
  
  render() {
    const { handleChange,fileHandle, name, cemail, phone_number, description, agreement_id, tin_number, vat_registration_number, capital, field_of_business, fax, trade_name } = this.props
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Company Information
      </Typography>
        <Grid container spacing={3}>

          <Grid item xs={12} sm={4} >
            <Label>Name</Label><br/>
            <input
              style={{ padding: 5, borderRadius: 8, borderWidth: 1 }}
              required
              id="name"
              name="name"
              fullWidth
              onChange={handleChange.bind(this)}
              value={name}
              autoComplete="country"
              placeholder="Name"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Label>Email</Label><br/>
            <input
              required
              style={{ padding: 5, borderRadius: 8, borderWidth: 1 }}
              id="cemail"
              name="cemail"
              fullWidth
              value={cemail}
              onChange={handleChange.bind(this)}
              autoComplete="email"
              placeholder="Email"
              variant="standard"
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <Label>Fax</Label><br/>
            <input
              required
              style={{ padding: 5, borderRadius: 8, borderWidth: 1 }}
              id="fax"
              name="fax"
              fullWidth
              value={fax}
              onChange={handleChange.bind(this)}
              autoComplete="fax"
              variant="standard"
              placeholder="Fax"
            />
          </Grid>


          <Grid item xs={12} sm={4}>
            <Label>Phone Number</Label>
            <input
              required
              style={{ padding: 12, borderRadius: 8, borderWidth: 1, borderColor: 'black' }}
              id="phone_number"
              name="phone_number"
              value={phone_number}
              type="number"
              onChange={handleChange.bind(this)}
              fullWidth
              autoComplete="shipping address-level2"
              variant="standard"
              placeholder="phone number"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Label>Capital</Label>
            <input
              required
              id="capital"
              style={{ padding: 12, borderRadius: 8, borderWidth: 1, borderColor: 'black' }}
              name="capital"
              type="number"
              value={capital}
              onChange={handleChange.bind(this)}
              fullWidth
              variant="standard"
              placeholder="capital"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Label>Agreement Id</Label>
            <input
              style={{ padding: 5, borderRadius: 8, borderWidth: 1 }}
              required
              id="agreement_id"
              name="agreement_id"
              value={agreement_id}
              onChange={handleChange.bind(this)}
              fullWidth
              variant="standard"
              placeholder="Agreement ID"
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <Label>Tin Number</Label>
            <input
              required
              style={{ padding: 5, borderRadius: 8, borderWidth: 1 }}
              id="tin_number"
              name="tin_number"
              placeholder="Tin Number"
              value={tin_number}
              onChange={handleChange.bind(this)}
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={4}>

            <Label>Vat Registration Number</Label>
            <input
              required
              style={{ padding: 5, borderRadius: 8, borderWidth: 1 }}
              id="vat_registration_number"
              placeholder="Vat Reg Number"
              name="vat_registration_number"
              value={vat_registration_number}
              onChange={handleChange.bind(this)}
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Label>Field Of Business</Label>
            <input
              required
              style={{ padding: 5, borderRadius: 8, borderWidth: 1 }}
              id="field_of_business"
              name="field_of_business"
              placeholder="Field of Business"
              value={field_of_business}
              onChange={handleChange.bind(this)}
              fullWidth
              variant="standard"
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <Label>Trade Name</Label>
            <input
              required
              style={{ padding: 5, borderRadius: 8, borderWidth: 1 }}
              id="trade_name"
              name="trade_name"
              placeholder="Trade Name"
              value={trade_name}
              onChange={handleChange.bind(this)}
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Label>Description</Label>
            <input
              required
              multiline
              style={{ padding: 5, borderRadius: 8, borderWidth: 1 }}
              rows={4}
              id="outlined-multiline-static"
              name="description"
              value={description}
              onChange={handleChange.bind(this)}
              fullWidth
            />
          </Grid>

        </Grid>
      </React.Fragment>
    );
  }
}
export default CompanyDetailForm;