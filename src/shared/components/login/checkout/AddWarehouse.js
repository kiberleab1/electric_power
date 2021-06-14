import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm';
import WarehouseDetailForm from './WarehouseDetailForm';
import Review from './Review';
import axios from 'axios';
import authHeader from '../../components/auth-header';
import AddAdminForm from './AddAdminForm'

const useStyles = theme => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    width: 900,
    marginLeft: -140,
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
});

const steps = ['Warehouse information', 'Warehouse Admin', 'Address information'];


class AddWarehouse extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeStep: 0,
      country: '',
      region: '',
      city: '',
      subcity: '',
      woreda: '',
      housenumber: '',

      first_name: '',
      last_name: '',
      username: '',
      password_digest: '',
      email: '',
      aphone_number: '',
      age: '',

      name: '',
      cemail: '',
      phone_number: '',

      msg:'',
    }
  }
  getStepContent = (step) => {
    {
      switch (step) {
        case 0:
          return <WarehouseDetailForm handleChange={this.handleChange}
            name={this.state.name}
            cemail={this.state.cemail}
            phone_number={this.state.phone_number}
          />;

        case 1:
          return <AddAdminForm handleChange={this.handleChange}
            first_name={this.state.first_name}
            last_name={this.state.last_name}
            username={this.state.username}
            password_digest={this.state.password_digest}
            age={this.state.age}
            email={this.state.email}
            aphone_number={this.state.aphone_number} />;
        case 2:
          return <AddressForm handleChange={this.handleChange}
            country={this.state.country}
            region={this.state.region}
            city={this.state.city}
            subcity={this.state.subcity}
            housenumber={this.state.housenumber} />;

        default:
          throw new Error('Unknown step');
      }
    }
  }
  handleChange = (event) => {

    this.setState({ [event.target.name]: event.target.value });

  }
  postAddress = () => {
    var address_id = ''
    var payload = {
      "country": this.state.country,
      "region": this.state.region,
      "city": this.state.city,
      "sub_city": this.state.subcity,
      "woreda": this.state.woreda,
      'house_number': this.state.housenumber,
    }
    var warehousePayload = {
      "name": this.state.name,
      "email": this.state.cemail,
      "phone_number": this.state.phone_number,
      "address_id": 2,
      "admin_id": 6
    }

    var AdminPayload = {
      "first_name": this.state.first_name,
      "last_name": this.state.last_name,
      "username": this.state.username,
      "password_digest": this.state.password_digest,
      "email": this.state.email,
      "phone_number": this.state.aphone_number,
      'age': this.state.age,
      "address_id": 2,
      "type_id": 2,
      "gender_id": 1
    }

    axios.post("/addAddress", payload, { headers: authHeader() }).then(function (response) {
      { AdminPayload.address_id = response.data.id }
      axios.post("/registeAdmin", AdminPayload, { headers: authHeader() }).then(function (res) {
        { warehousePayload.address_id = response.data.id }
        { warehousePayload.admin_id = res.data.id }
        axios.post("/addWarehouse", warehousePayload, { headers: authHeader() }).then(function (response) { })
      })
    })
  }

  handleNext = () => {
    if(this.state.activeStep === 1 && this.state.last_name !== '' && this.state.first_name !== '' && this.state.username !== '' && this.state.password_digest !== '' && this.state.email !== '' && this.state.aphone_number !== '' && this.state.age !== ''){
      this.setState({ activeStep: this.state.activeStep + 1 });
      this.setState({
        msg:""
      });
    } 
    else if(this.state.activeStep === 2 && this.state.country !== '' && this.state.country !== '' && this.state.country !== '' && this.state.city !== '' && this.state.woreda !== '' && this.state.subcity !== '' && this.state.region !== '' && this.state.housenumber !== ''){
      this.setState({ activeStep: this.state.activeStep + 1 });
      this.setState({
        msg:""
      });
    }
    else if(this.state.activeStep === 0 && this.state.name !== '' && this.state.phone_number && this.state.cemail !== ''){
      this.setState({ activeStep: this.state.activeStep + 1 });
      this.setState({
        msg:""
      });
    }
    else{
      this.setState({
        msg:"please enter all data"
      });
    } 
  };

  handleBack = () => {
    this.setState({ activeStep: this.state.activeStep - 1 });
  };
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="absolute" color="default" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap >
              Warehouse
          </Typography>
          </Toolbar>
        </AppBar>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Add Warehouse
          </Typography>
            <Stepper activeStep={this.state.activeStep} className={classes.stepper}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {this.state.activeStep === steps.length ? (
                <React.Fragment>
                  {
                    this.postAddress()
                  }
                </React.Fragment>
              ) : (
                  <React.Fragment>
                    {this.getStepContent(this.state.activeStep)}
                    <div className={classes.buttons}>
                      {this.state.activeStep !== 0 && (
                        <Button onClick={this.handleBack} className={classes.button}>
                          Back
                        </Button>
                      )}

                      <Button
                        variant="contained"
                        onClick={this.handleNext}
                        className={classes.button}
                      >
                        {this.state.activeStep === steps.length - 1 ? 'Submit Warehouse' : 'Next'}
                      </Button>
                    </div>
                    <div style={{color:'red',fontWeight:'bold'}}>{this.state.msg}</div>
                  </React.Fragment>
                )}
            </React.Fragment>
          </Paper>

        </main>
      </React.Fragment >
    );
  }
}
export default withStyles(useStyles)(AddWarehouse)
