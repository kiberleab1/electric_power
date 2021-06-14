import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
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
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Box, ListItem } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import Title from '../../admin/dashboard/Title';
import authHeader from '../../components/auth-header';
import { Label } from 'semantic-ui-react';

const useStyles = theme => ({
    appBar: {
        position: 'relative',
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            width: 1000,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        height:500,
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        color: 'black',
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

const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: 15,
        borderRadius: 5,
    },
    colorPrimary: {
        backgroundColor: "#EEEEEE",
    },
    bar: {
        borderRadius: 5,
        backgroundColor: '#1a90ff',
    },
}))(LinearProgress);

class AddDriver extends React.Component {
    constructor(props) {
        super(props);
        this.selectFile = this.selectFile.bind(this);
        this.upload = this.upload.bind(this);
        this.getDepatment()
        this.getWarehouse()

        this.state = {

            country: '',
            region: '',
            woreda: '',
            city: '',
            subcity: '',
            housenumber: '',


            title: '',
            selectedFiles: undefined,
            currentFile: undefined,
            progress: 0,
            message: "",
            msg: '',
            fileInfos: [],

            name: '',
            email: '',
            phone_number: '',
            car_plate_number: '',
            department_id: '',
            admin_id: '',
            address_id: '',
            warehouse_id: '',

            warehouse: [],
            department: [],

        };
    }


    selectFile(event) {
        this.setState({
            selectedFiles: event.target.files,
        });
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    getWarehouse = () => {
        const user = JSON.parse(localStorage.getItem('user'));
        axios.get("/warehouses", { headers: authHeader() })
            .then((response) => {
                console.log(response.data)
                this.setState({ warehouse: response.data })
            }
            ).catch((error) => {
                console.log(error)
            })
    }

    getDepatment = () => {
        const user = JSON.parse(localStorage.getItem('user'));
        axios.get("/departments", { headers: authHeader() })
            .then((response) => {
                console.log(response.data)
                this.setState({ department: response.data })
            }
            ).catch((error) => {
                console.log(error)
            })
    }

    uploadFile() {

    }

    upload() {
        let addressData = new FormData();
        let formData = new FormData();
        

        const user = JSON.parse(localStorage.getItem('user'));
        if (this.state.name !== '' && this.state.email !== '' && this.state.phone_number !== '' && this.state.car_plate_number !== '' && this.state.warehouse_id !== '' && this.state.department_id !== '' && this.state.country !== '' && this.state.region !== '' && this.state.city !== '' && this.state.subcity !== '' && this.state.woreda !== '' && this.state.housenumber !== '') {
            addressData.append("country", this.state.country);
            addressData.append("region", this.state.region);
            addressData.append("city", this.state.city);
            addressData.append("woreda", this.state.woreda);
            addressData.append("sub_city", this.state.subcity);
            addressData.append('house_number', this.state.housenumber);

            formData.append("name", this.state.name);
            formData.append("email", this.state.email);
            formData.append("phone_number", this.state.phone_number);
            formData.append("car_plate_number", this.state.car_plate_number);
            formData.append("warehouse_id", this.state.warehouse_id);
            formData.append("department_id", this.state.department_id);
            formData.append("admin_id", user.admin_id);
            axios.post("/addAddress", addressData).then((response) =>{
                formData.append("address_id", response.data.id);
                axios.post("/addDriver", formData, { headers: authHeader() })
                    .then((respons) => {
                        
                            this.setState({name: ''})
                            this.setState({email: ''})
                            this.setState({phone_number: ''})
                            this.setState({car_plate_number: ''})
                            this.setState({country: ''})
                            this.setState({region: ''})
                            this.setState({city: ''})
                            this.setState({subcity: ''})
                            this.setState({woreda: ''})
                            this.setState({housenumber: ''})
                        
                    }
                    ).catch((error) => {
                        console.log(error)
                    })
            })
        }
        else {
            this.setState({
                msg: "please enter all data"
            });
        }
    }

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <CssBaseline />
                <AppBar position="absolute" color="default" className={classes.appBar}>
                    <Toolbar>
                        <Typography variant="h6" color="inherit" noWrap >
                            Advertisment
                        </Typography>
                    </Toolbar>
                </AppBar>
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Typography component="h1" variant="h4" align="center">
                            Driver Info
                        </Typography>
                        <div className="mg20">
                            <Typography variant="h6" gutterBottom>
                                Driver Information
                      </Typography>
                            <Grid container spacing={3}>
                                <Grid item xs={8} sm={4}>
                                    <Label>Name</Label><br />
                                    <input
                                        required
                                        id="name"
                                        name="name"
                                        placeholder="name"
                                        style={{ padding: 5, borderRadius: 8, borderWidth: 1 }}
                                        fullWidth
                                        onChange={this.handleChange.bind(this)}
                                        value={this.state.name}
                                        autoComplete="title"
                                        variant="standard"
                                    />
                                </Grid>
                                <Grid item xs={8} sm={4}>
                                    <Label>Email</Label><br />
                                    <input
                                        required
                                        id="email"
                                        name="email"
                                        placeholder="email"
                                        style={{ padding: 5, borderRadius: 8, borderWidth: 1 }}
                                        fullWidth
                                        onChange={this.handleChange.bind(this)}
                                        value={this.state.email}
                                        autoComplete="title"
                                        variant="standard"
                                    />
                                </Grid>
                                <Grid item xs={8} sm={4}>
                                    <Label>Phone Number</Label><br />
                                    <input
                                        required
                                        id="title"
                                        name="phone_number"
                                        type="number"
                                        placeholder="+251....."
                                        style={{ padding: 5, borderRadius: 8, borderWidth: 1 }}
                                        fullWidth
                                        onChange={this.handleChange.bind(this)}
                                        value={this.state.phone_number}
                                        autoComplete="title"
                                        variant="standard"
                                    />
                                </Grid>
                                <Grid item xs={8} sm={4}>
                                    <Label>Car Plate Number</Label><br />
                                    <input
                                        required
                                        id="title"
                                        name="car_plate_number"
                                        style={{ padding: 5, borderRadius: 8, borderWidth: 1 }}
                                        fullWidth
                                        onChange={this.handleChange.bind(this)}
                                        value={this.state.car_plate_number}
                                        autoComplete="title"
                                        variant="standard"
                                    />
                                </Grid>

                                <Grid item xs={6} sm={4} >
                                    <Label style={{ marignTop: -10 }}>Warehouse   : </Label>
                                    <Select
                                        name="warehouse_id"
                                        style={{ width: 200, margin: 10, marginTop: 0 }}
                                        label="WareHouse"
                                        placeholder="Warehouse"
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        onChange={this.handleChange.bind(this)}>
                                        {this.state.warehouse.map((row) =>
                                            <MenuItem value={row.id}>{row.name}</MenuItem>
                                        )}
                                    </Select>
                                </Grid>

                                <Grid item xs={6} sm={4}>
                                    <Label style={{ marginTop: -10 }}>Department   : </Label><br />
                                    <Select
                                        name="department_id"
                                        style={{ width: 200, marignLeft: 200, marginTop: 0 }}
                                        label="WareHouse"
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        onChange={this.handleChange.bind(this)}>
                                        {this.state.department.map((row) =>
                                            <MenuItem value={row.id}>{row.title}</MenuItem>
                                        )}
                                    </Select>
                                </Grid>

                                <Grid item xs={12} sm={4}>
                                    <Label>Country</Label><br/>
                                    <input
                                        required
                                        style={{ padding: 5, borderRadius: 8, borderWidth: 1 }}
                                        id="country"
                                        name="country"
                                        fullWidth
                                        onChange={this.handleChange.bind(this)}
                                        value={this.state.country}
                                        autoComplete="country"
                                        placeholder="Country"
                                        variant="standard"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <Label>Region</Label><br/>
                                    <input
                                        required
                                        style={{ padding: 5, borderRadius: 8, borderWidth: 1 }}
                                        id="region"
                                        name="region"
                                        fullWidth
                                        placeholder="Region"
                                        onChange={this.handleChange.bind(this)}
                                        value={this.state.region}
                                        autoComplete="region"
                                        variant="standard"
                                    />
                                </Grid>


                                <Grid item xs={12} sm={4}>
                                    <Label>City</Label><br />
                                    <input
                                        required
                                        style={{ padding: 5, borderRadius: 8, borderWidth: 1 }}
                                        id="city"
                                        name="city"
                                        placeholder="City"
                                        onChange={this.handleChange.bind(this)}
                                        value={this.state.city}
                                        fullWidth
                                        autoComplete="shipping address-level2"
                                        variant="standard"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <Label>Woreda</Label><br/>
                                    <input
                                        required
                                        style={{ padding: 5, borderRadius: 8, borderWidth: 1 }}
                                        id="woreda"
                                        name="woreda"
                                        onChange={this.handleChange.bind(this)}
                                        value={this.state.woreda}
                                        placeholder="Woreda"
                                        fullWidth
                                        autoComplete="shipping address-level2"
                                        variant="standard"
                                    />
                                </Grid>

                                <Grid item xs={12} sm={4}>
                                    <Label>SubCity</Label><br/>
                                    <input
                                        id="subcity"
                                        style={{ padding: 5, borderRadius: 8, borderWidth: 1 }}
                                        name="subcity"
                                        onChange={this.handleChange.bind(this)}
                                        value={this.state.subcity}
                                        placeholder="Sub-city"
                                        fullWidth
                                        variant="standard"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <Label>House Noumber</Label><br/>
                                    <input
                                        required
                                        style={{ padding: 5, borderRadius: 8, borderWidth: 1 }}
                                        id="housenumber"
                                        name="housenumber"
                                        onChange={this.handleChange.bind(this)}
                                        value={this.state.housenumber}
                                        placeholder="House Number"
                                        fullWidth
                                        variant="standard"
                                    />
                                </Grid>

                                <div className="row my-3" >
                                    

                                    <div className="col-4" style={{ marginLeft: 45,marginBottom:10 }}>

                                <div style={{ marign: 30 }}>
                                    <button
                                        className="btn btn-success"
                                        onClick={this.upload}
                                    >
                                        Add Driver
                                </button>

                                </div><br/></div></div>
                                
                            </Grid>
                            <div style={{ color: 'red', fontWeight: 'bold',marignTop:20 }}>{this.state.msg}</div>

                        </div>

                    </Paper>
                </main>
            </React.Fragment >
        );
    }
}

export default withStyles(useStyles)(AddDriver)