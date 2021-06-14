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

class AddAdvertisment extends React.Component {
    constructor(props) {
        super(props);
        this.selectFile = this.selectFile.bind(this);
        this.upload = this.upload.bind(this);
        this.uploadBanner = this.uploadBanner.bind(this);

        this.state = {
            title: '',
            selectedFiles: undefined,
            currentFile: undefined,
            progress: 0,
            message: "",
            msg: '',
            fileInfos: [],
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

    uploadBannerFile(file, onUploadProgress) {
        let formData = new FormData();
        formData.append("file", file);
        return axios.post("/addBanner", formData, { headers: authHeader(), onUploadProgress, })
            .then((response) => {
                if (response.status === 200) {
                }
            }
            ).catch((error) => {
                console.log(error)
            })
    }

    uploadFile(file, onUploadProgress) {
        let formData = new FormData();
        const user = JSON.parse(localStorage.getItem('user'));
        if (this.state.title !== '') {
            formData.append("title", this.state.title);
            formData.append("file", file);
            formData.append("admin_id", user.admin_id);

            console.log(">>>>>>>>>>>>>>>>" + formData);
            return axios.post("/addAdvertisment", formData, { headers: authHeader(), onUploadProgress, })
                .then((response) => {
                    if (response.status === 200) {
                        this.setState({ title: '' })
                        this.setState({ selectedFiles: undefined })
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

    upload() {
        let currentFile = this.state.selectedFiles[0];

        this.setState({
            progress: 0,
            currentFile: currentFile,
        });

        this.uploadFile(currentFile, (event) => {
            this.setState({
                progress: Math.round((100 * event.loaded) / event.total),
            });
        })
            // .then((response) => {
            //     this.setState({
            //         message: response.data.message,
            //     });
            // })
            // .then((files) => {
            //     this.setState({
            //         fileInfos: files.data,
            //     });
            // })
            // .catch(() => {
            //     this.setState({
            //         progress: 0,
            //         message: "upload the file!",
            //         currentFile: undefined,
            //     });
            // });

        this.setState({
            selectedFiles: undefined,
        });
    }

    uploadBanner() {
        let currentFile = this.state.selectedFiles[0];

        this.setState({
            progress: 0,
            currentFile: currentFile,
        });

        this.uploadBannerFile(currentFile, (event) => {
            this.setState({
                progress: Math.round((100 * event.loaded) / event.total),
            });
        })
            .then((response) => {
                this.setState({
                    message: response.data.message,
                });
            })
            .then((files) => {
                this.setState({
                    fileInfos: files.data,
                });
            })
            .catch(() => {
                this.setState({
                    progress: 0,
                    message: "upload the file!",
                    currentFile: undefined,
                });
            });

        this.setState({
            selectedFiles: undefined,
        });
    }

    render() {
        const { classes } = this.props;
        const {
            selectedFiles,
            currentFile,
            progress,
            message,
            fileInfos,
        } = this.state;

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
                            Adevertisment Info
                        </Typography>
                        <div className="mg20">
                            <Typography variant="h6" gutterBottom>
                                Title for Advertisment Only
                      </Typography>
                            <Grid container spacing={3}>
                                <Grid item xs={8} sm={4}>
                                    <Label>Title</Label>
                                    <input
                                        required
                                        id="title"
                                        name="title"
                                        style={{ padding: 5, borderRadius: 8, borderWidth: 1 }}
                                        fullWidth
                                        onChange={this.handleChange.bind(this)}
                                        value={this.state.title}
                                        autoComplete="title"
                                        variant="standard"
                                    />
                                </Grid>
                            </Grid>
                            <div>
                                {currentFile && (
                                    <div className="progress">
                                        <div
                                            className="progress-bar progress-bar-info progress-bar-striped"
                                            role="progressbar"
                                            aria-valuenow={progress}
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                            style={{ width: progress + "%" }}
                                        >
                                            {progress}%
                </div>
                                    </div>
                                )}

                                <label className="btn btn-default">
                                    <input type="file" onChange={this.selectFile} />
                                </label>
                                <br/>
                                <button
                                    style={{marginTop:10}}
                                    className="btn btn-success"
                                    disabled={!selectedFiles}
                                    onClick={this.upload}
                                >
                                    Upload Adevertisment
                                </button>

                                <button
                                style={{marginTop:10,marginLeft:5}}
                                    className="btn btn-success"
                                    disabled={!selectedFiles}
                                    onClick={this.uploadBanner}
                                >
                                    Upload Banner
                                </button>

                                <div className="alert alert-light" role="alert">
                                    {message}
                                </div>
                            </div>
                            <div style={{ color: 'red', fontWeight: 'bold' }}>{this.state.msg}</div>
                        </div>

                    </Paper>
                </main>
            </React.Fragment >
        );
    }
}

export default withStyles(useStyles)(AddAdvertisment)