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

class AddCategory extends React.Component {
    constructor(props) {
        super(props);
        this.getCategoryList();
        this.state = {
            title: '',
            description: '',
            descritpion: '',
            category: [],
            category_id: '',
            msg: '',
        };
    }


    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    getCategoryList = () => {
        axios.get("/categories", { headers: authHeader() })
            .then((response) => {
                this.setState({ category: response.data })
            }
            ).catch((error) => {
                console.log(error)
            })
    }

    addCategry() {
        let formData = new FormData();
        const user = JSON.parse(localStorage.getItem('user'));
        if (this.state.title !== '' && this.state.description !== '') {
            formData.append("title", this.state.title);
            formData.append("descritpion", this.state.description);

            console.log(">>>>>>>>>>>>>>>>" + formData);
            return axios.post("/addCategory", formData, { headers: authHeader() })
                .then((response) => {
                    if (response.status === 200) {
                        this.setState({ title: '' })
                        this.setState({ description: '' })
                    }
                }
                ).catch((error) => {
                    console.log(error)
                })
        }
        else {
            this.setState({
                msg: "please enter all data"
            });
        }

    }

    addDepartment() {
        let formData = new FormData();
        const user = JSON.parse(localStorage.getItem('user'));
        if (this.state.title !== '' && this.state.description !== '') {
            formData.append("title", this.state.title);
            formData.append("description", this.state.description);

            console.log(">>>>>>>>>>>>>>>>" + formData);
            return axios.post("/addDepartment", formData, { headers: authHeader() })
                .then((response) => {
                    if (response.status === 200) {
                        this.setState({ title: '' })
                        this.setState({ description: '' })
                    }
                }
                ).catch((error) => {
                    console.log(error)
                })
        }
        else {
            this.setState({
                msg: "please enter all data"
            });
        }

    }

    addSubCategry() {
        let formData = new FormData();
        const user = JSON.parse(localStorage.getItem('user'));
        if (this.state.title !== '' && this.state.description !== '') {
            formData.append("title", this.state.title);
            formData.append("description", this.state.description);
            formData.append("category_id", this.state.category_id);

            console.log(">>>>>>>>>>>>>>>>" + formData);
            return axios.post("/addSubCategory", formData, { headers: authHeader() })
                .then((response) => {
                    if (response.data.id) {
                        this.setState({ title: '' })
                        this.setState({ description: '' })
                    }
                }
                ).catch((error) => {
                    console.log(error)
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
                            Category
                        </Typography>
                    </Toolbar>
                </AppBar>
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Typography component="h1" variant="h4" align="center">
                            Category Info
                        </Typography>
                        <div className="mg20">
                            <Typography variant="h6" gutterBottom>
                                Category Information
                      </Typography>
                            <Grid container spacing={3}>
                                <Grid item xs={8} sm={4}>
                                    <Label>Title</Label>
                                    <input
                                        required
                                        style={{ padding: 5, borderRadius: 8, borderWidth: 1 }}
                                        id="title"
                                        name="title"
                                        fullWidth
                                        onChange={this.handleChange.bind(this)}
                                        value={this.state.title}
                                        autoComplete="title"
                                        variant="standard"
                                    />
                                </Grid>

                                <Grid item xs={8} sm={4}>
                                    <Label>Description</Label>
                                    <input
                                        required
                                        id="description"
                                        style={{ padding: 5, borderRadius: 8, borderWidth: 1 }}
                                        name="description"
                                        fullWidth
                                        onChange={this.handleChange.bind(this)}
                                        value={this.state.description}
                                        autoComplete="description"
                                        variant="standard"
                                    />
                                </Grid>

                                <Grid item xs={6} sm={3} style={{ marginTop: -15 }}>
                                    <label>Category   : </label>
                                    <Select
                                        name="category_id"
                                        id="demo-simple-select"
                                        onChange={this.handleChange.bind(this)}>
                                        {this.state.category.map((row) =>
                                            <MenuItem value={row.id}>{row.title}</MenuItem>
                                        )}
                                    </Select>
                                </Grid>


                                <div className="col-4" style={{ margin: 5 }}>
                                    <button
                                        className="btn btn-success btn-sm"
                                        onClick={() => this.addCategry()}
                                    >
                                        Add Category
                                </button>
                                </div>

                                <div className="col-4" style={{ margin: 5 }}>
                                    <button
                                        className="btn btn-success btn-sm"
                                        disabled={!this.state.category_id}
                                        onClick={() => this.addSubCategry()}
                                    >
                                        Add SubCategory
                                </button>
                                </div>

                                <div className="col-4" style={{ margin: 5 }}>
                                    <button
                                        className="btn btn-success btn-sm"
                                        onClick={() => this.addDepartment()}
                                    >
                                        Add Department
                                </button>
                                </div>

                            </Grid>
                            <div style={{ color: 'red', fontWeight: 'bold', marginTop: 10 }}>{this.state.msg}</div>
                        </div>

                    </Paper>
                </main>
            </React.Fragment >
        );
    }
}

export default withStyles(useStyles)(AddCategory)