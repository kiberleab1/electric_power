import React, { Component, Link } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Label } from "semantic-ui-react";

class AddressForm extends Component {
  getData = () => {
    return this.state;
  };
  render() {
    const {
      handleChange,
      zone,
      region,
      city,
      woreda,
      kebele,
      housenumber,
      blocknumber,
      subcity,
    } = this.props;
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Address Information
        </Typography>
        <Grid container spacing={3}>
     
          <Grid item xs={12} sm={4}>
            <Label>Region</Label>
            <input
              required
              style={{ padding: 5, borderRadius: 8, borderWidth: 1 }}
              id="region"
              name="region"
              fullWidth
              placeholder="Region"
              value={region}
              onChange={handleChange.bind(this)}
              autoComplete="region"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Label>Zone</Label>
            <input
              required
              style={{ padding: 5, borderRadius: 8, borderWidth: 1 }}
              id="zone"
              name="zone"
              fullWidth
              placeholder="zone"
              value={zone}
              onChange={handleChange.bind(this)}
              autoComplete="zone"
              variant="standard"
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <Label>City</Label>
            <input
              required
              style={{ padding: 5, borderRadius: 8, borderWidth: 1 }}
              id="city"
              name="city"
              placeholder="City"
              value={city}
              onChange={handleChange.bind(this)}
              fullWidth
              autoComplete=""
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Label>Woreda</Label>
            <input
              required
              style={{ padding: 5, borderRadius: 8, borderWidth: 1 }}
              id="woreda"
              name="woreda"
              value={woreda}
              placeholder="Woreda"
              onChange={handleChange.bind(this)}
              fullWidth
              autoComplete="shipping address-level2"
              variant="standard"
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <Label>Kebele</Label>
            <input
              id="kebele"
              style={{ padding: 5, borderRadius: 8, borderWidth: 1 }}
              name="kebele"
              value={subcity}
              placeholder="kebele"
              onChange={handleChange.bind(this)}
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Label>Block Number</Label>
            <input
              required
              style={{ padding: 5, borderRadius: 8, borderWidth: 1 }}
              id="blocknumber"
              name="blocknumber"
              value={blocknumber}
              placeholder="Block Number"
              onChange={handleChange.bind(this)}
              fullWidth
              variant="standard"
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <Label>House Number</Label>
            <input
              required
              style={{ padding: 5, borderRadius: 8, borderWidth: 1 }}
              id="housenumber"
              name="housenumber"
              value={housenumber}
              placeholder="House Number"
              onChange={handleChange.bind(this)}
              fullWidth
              variant="standard"
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}
export default AddressForm;
