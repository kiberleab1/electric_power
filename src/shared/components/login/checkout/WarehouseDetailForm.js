import React, { Component, Link } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Label } from 'semantic-ui-react';

class WarehouseDetailForm extends Component {

  getData = ()=>{
    return this.state;
  }
  render(){
    const {handleChange,name,cemail,phone_number}=this.props
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Warehouse address
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
      </Grid>
    </React.Fragment>
  );
}}
export default WarehouseDetailForm;