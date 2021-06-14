import React, { Component, Link } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Label } from 'semantic-ui-react';

class AddAdminForm extends Component {

  getData = ()=>{
    return this.state;
  }
  render(){
    const {handleChange,first_name,last_name,username,password_digest,email,aphone_number,age}=this.props
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Admin Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Label>First Name</Label><br/>
          <input
            required
            style={{ padding: 5, borderRadius: 8, borderWidth: 1 }}
            id="first_name"
            name="first_name"
            placeholder="First Name"
            fullWidth
            onChange={handleChange.bind(this)}
            value={first_name}
            autoComplete="first_name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
        <Label>Last Name</Label><br/>
          <input
            required
            style={{ padding: 5, borderRadius: 8, borderWidth: 1 }}
            id="last_name"
            name="last_name"
            placeholder="Last Name"
            fullWidth
            value={last_name}
            onChange={handleChange.bind(this)}
            autoComplete="last_name"
            variant="standard"
          />
        </Grid>
       
       
        <Grid item xs={12} sm={4}>
        <Label>username</Label><br/>
          <input
            required
            style={{ padding: 5, borderRadius: 8, borderWidth: 1 }}
            id="username"
            name="username"
            placeholder="username"
            value={username}
            onChange={handleChange.bind(this)}
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
        <Label>Password</Label><br/>
          <input
            id="password_digest"
            style={{ padding: 12, borderRadius: 8, borderWidth: 1,borderColor:'black' }}
            name="password_digest"
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            value={password_digest}
            onChange={handleChange.bind(this)}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
        <Label>Email</Label><br/>
          <input
            required
            style={{ padding: 5, borderRadius: 8, borderWidth: 1 }}
            id="email"
            name="email"
            placeholder="email"
            value={email}
            onChange={handleChange.bind(this)}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
        <Label>Phone Number</Label><br/>
          <input
            required
            style={{ padding: 12, borderRadius: 8, borderWidth: 1,borderColor:'black' }}
            id="phone_number"
            type="number"
            placeholder="+251..."
            name="aphone_number"
            value={aphone_number}
            onChange={handleChange.bind(this)}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
        <Label>Age</Label><br/>
          <input
            required
            style={{ padding: 12, borderRadius: 8, borderWidth: 1,borderColor:'black' }}
            id="age"
            name="age"
            type="number"
            placeholder="Age"
            value={age}
            onChange={handleChange.bind(this)}
            fullWidth
            variant="standard"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}}
export default AddAdminForm;