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
import CompanyDetailForm from './CompanyDetailForm';
import Review from './Review';
import axios from 'axios';
import authHeader from '../../components/auth-header';
import WarehouseDetailForm from './WarehouseDetailForm';

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

const steps = ['Warehouse Address', 'Warehouse information'];


class UpdateWarehouse extends React.Component {
    constructor(props) {
        super(props)
        const sup  = this.props.location.state
        this.getCompany(sup.id);
        console.log("id>>>>>>>>>>>>>>>"+sup.id);
        this.state = {
            activeStep: 0,
            country: '',
            region: '',
            city: '',
            subcity: '',
            housenumber: '',

            name: '',
            email: '',
            phone_number: '',
            description: '',
            agreement_id: '',
            address_id:'',
            id: ''
        }
    }
    getStepContent = (step) => {
        {
            switch (step) {
                case 0:
                    return <AddressForm handleChange={this.handleChange} country={this.state.country} region={this.state.region}
                        city={this.state.city} subcity={this.state.subcity} housenumber={this.state.housenumber}
                    />;
                case 1:
                    return <WarehouseDetailForm handleChange={this.handleChange} name={this.state.name}
                        email={this.state.email} phone_number={this.state.phone_number} />;

                default:
                    throw new Error('Unknown step');
            }
        }
    }
    handleChange = (event) => {

        this.setState({ [event.target.name]: event.target.value });

    }
    getCompany = (id) => {
        axios.get("/findWarehouse/"+id,{ headers: authHeader() }).then((response)=>{
            
            this.setState({country: response.data.address.country})
            this.setState({region: response.data.address.region})
            this.setState({city: response.data.address.city})
            this.setState({subcity: response.data.address.sub_city})
            this.setState({housenumber: response.data.address.house_number})
            
            this.setState({name: response.data.name})
            this.setState({email: response.data.email})
            this.setState({phone_number: response.data.phone_number})
            this.setState({address_id: response.data.address.id})
            this.setState({id: response.data.id})
            
        })
    }
    updateAddress = (id) => {
        var address_id = ''
        var payload = {
            "country": this.state.country,
            "region": this.state.region,
            "city": this.state.city,
            "sub_city": this.state.subcity,
            'house_number': this.state.housenumber,

        }
        var companyPayload = {
            "name": this.state.name,
            "email": this.state.email,
            "phone_number": this.state.phone_number,
            'description': this.state.description,
            'agreement_id': this.state.agreement_id,
            "address_id": 'asd',
            "admin_id": 8
        }
        var id=this.state.id
        axios.put("/updateAddress/"+this.state.address_id, payload,{ headers: authHeader() }).then(function (response) {

            { companyPayload.address_id = response.data.id }
            axios.put("/updateSupplier/"+id, companyPayload,{ headers: authHeader() }).then(function (response) {
                console.log(response)
            })
        })


    }

    handleNext = () => {
        this.setState({ activeStep: this.state.activeStep + 1 });
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
                            Company name
          </Typography>
                    </Toolbar>
                </AppBar>
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Typography component="h1" variant="h4" align="center">
                            Update Company
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
                                        this.updateAddress()
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
                                                {this.state.activeStep === steps.length - 1 ? 'Submit Company' : 'Next'}
                                            </Button>
                                        </div>
                                    </React.Fragment>
                                )}
                        </React.Fragment>
                    </Paper>

                </main>
            </React.Fragment >
        );
    }
}
export default withStyles(useStyles)(UpdateWarehouse)
