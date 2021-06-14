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
import AddAdminForm from './AddAdminForm'
import CompanyDetailForm from './CompanyDetailForm';
import Review from './Review';
import axios from 'axios';
import authHeader from '../../components/auth-header';

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

const steps = ['Admin Information', 'Admin Address'];


class AddCompany extends React.Component {
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
      phone_number: '',
      age: '',
      address_id: '',

      
      isDisabled: true,
      msg:'',
    }
  }
  getStepContent = (step) => {
    {
      switch (step) {
        case 1:
          return <AddressForm handleChange={this.handleChange}
            country={this.state.country}
            region={this.state.region}
            city={this.state.city}
            subcity={this.state.subcity}
            housenumber={this.state.housenumber} />;
        case 0:
          return <AddAdminForm handleChange={this.handleChange}
            first_name={this.state.first_name}
            last_name={this.state.last_name}
            username={this.state.username}
            password_digest={this.state.password_digest}
            age={this.state.age}
            email={this.state.email}
            phone_number={this.state.phone_number} />;
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
      "woreda": this.state.woreda,
      "sub_city": this.state.subcity,
      'house_number': this.state.housenumber,
    }

    var AdminPayload = {
      "first_name": this.state.first_name,
      "last_name": this.state.last_name,
      "username": this.state.username,
      "password_digest": this.state.password_digest,
      "email": this.state.email,
      "phone_number": this.state.phone_number,
      'age': this.state.age,
      "address_id": this.state.address_id,
      "type_id": 3,
      "gender_id": 1
    }


    axios.post("/addAddress", payload, { headers: authHeader() }).then(function (res) {
      { AdminPayload.address_id = res.data.id }
      axios.post("/registeAdmin", AdminPayload, { headers: authHeader() }).then(function (response) {
      })
    })
  }

  enableComponents =() =>{
    
  }
  handleNext = () => {
    if(this.state.activeStep === 0 && this.state.last_name !== '' && this.state.first_name !== '' && this.state.username !== '' && this.state.password_digest !== '' && this.state.email !== '' && this.state.phone_number !== '' && this.state.age !== ''){
      this.setState({ activeStep: this.state.activeStep + 1 });
      this.setState({
        msg:""
      });
    } 
    else if(this.state.activeStep === 1 && this.state.country !== '' && this.state.country !== '' && this.state.country !== '' && this.state.city !== '' && this.state.woreda !== '' && this.state.subcity !== '' && this.state.region !== '' && this.state.housenumber !== ''){
      this.setState({ activeStep: this.state.activeStep + 1 });
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
              Admin
          </Typography>
          </Toolbar>
        </AppBar>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Add Admin
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
                        {this.state.activeStep === steps.length - 1 ? ('Submit Admin') : ('Next')}
                        
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
export default withStyles(useStyles)(AddCompany)
