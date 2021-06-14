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

const steps = ['Supplier Address','Admin Info' ,'Company information'];


class UpdateCompany extends React.Component {
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

            first_name:'',
            last_name:'',
            username:'',
            password_digest:'',
            email:'',
            phone_number: '',
            age:'',
            admin_address_id:null,
            

            name: '',
            email: '',
            phone_number: '',
            description: '',
            agreement_id: '',
            address_id:'',
            admin_id:'',
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
                    return <AddAdminForm handleChange={this.handleChange} 
                    first_name={this.state.first_name}
                    last_name={this.state.last_name}
                    username={this.state.username}
                    password_digest={this.state.password_digest}
                    age={this.state.age}
                    email={this.state.email} 
                    phone_number={this.state.phone_number} />;
                case 2:
                    return <CompanyDetailForm handleChange={this.handleChange} 
                    name={this.state.name}
                    email={this.state.email} 
                    phone_number={this.state.phone_number} 
                    description={this.state.description}
                    agreement_id={this.state.agreement_id}/>;
                default:
                    throw new Error('Unknown step');
            }
        }
    }
    handleChange = (event) => {

        this.setState({ [event.target.name]: event.target.value });

    }
    getCompany = (id) => {
        axios.get("/findSupplier/"+id,{ headers: authHeader() }).then((response)=>{
            
            this.setState({country: response.data.address.country})
            this.setState({region: response.data.address.region})
            this.setState({city: response.data.address.city})
            this.setState({subcity: response.data.address.sub_city})
            this.setState({housenumber: response.data.address.house_number})
            
            this.setState({name: response.data.name})
            this.setState({email: response.data.email})
            this.setState({phone_number: response.data.phone_number})
            this.setState({description: response.data.description})
            this.setState({agreement_id: response.data.agreement_id})
            this.setState({address_id: response.data.address.id})
            this.setState({id: response.data.id})
            this.setState({admin_id:response.data.admin.id})

            this.setState({first_name:response.data.admin.first_name})
            this.setState({last_name:response.data.admin.last_name})
            this.setState({username:response.data.admin.username})
            this.setState({password_digest:response.data.admin.password_digest})
            this.setState({age:response.data.admin.age})
            this.setState({email:response.data.admin.email})
            this.setState({phone_number:response.data.admin.phone_number})
            
        })
    }
    updateAddress = () => {
        let addressFormData = new FormData();
        let adminFormData = new FormData();
        let supplierFormData = new FormData();

        addressFormData.append("country",this.state.country);
        addressFormData.append("region", this.state.region);
        addressFormData.append("city", this.state.city);
        addressFormData.append("sub_city", this.state.subcity);
        addressFormData.append('house_number', this.state.housenumber);
        
        adminFormData.append("first_name", this.state.first_name);
        adminFormData.append("last_name", this.state.last_name);
        adminFormData.append("username", this.state.username);
        adminFormData.append("password_digest", this.state.password_digest);
        adminFormData.append("email", this.state.email);
        adminFormData.append("phone_number", this.state.phone_number);
        adminFormData.append('age',this.state.age);
        adminFormData.append("address_id", this.state.admin_address_id);
        adminFormData.append("type_id", 5);
        adminFormData.append("gender_id", 1);

        supplierFormData.append("name", this.state.name);
        supplierFormData.append("email", this.state.email);
        supplierFormData.append("phone_number", this.state.phone_number);
        supplierFormData.append('description', this.state.description);
        supplierFormData.append('agreement_id', this.state.agreement_id);
        supplierFormData.append("address_id", this.state.address_id);
        supplierFormData.append("admin_id", this.state.admin_id);

        var id=this.state.id
        
        axios.put("/updateAddress/"+this.state.address_id, addressFormData,{ headers: authHeader() })
            .then( (response) => {
                this.setState({admin_address_id:response.data.id})
                console.log("address"+this.state.admin_address_id)
                axios.put("/updateAdmin/"+this.state.admin_id,adminFormData,{ headers: authHeader() })
                    .then(function(res) {
                        axios.put("/updateSupplier/"+id, supplierFormData,{ headers: authHeader() }).then(function (response) {
                            console.log(response)
                    })
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
export default withStyles(useStyles)(UpdateCompany)
