import * as React from "react";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import AddressForm from "./AddressForm";
import AddAdminForm from "./AddAdminForm";
import CompanyDetailForm from "./CompanyDetailForm";
import axios from "axios";

import { Label } from "recharts";

const useStyles = (theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: "20px",
    marginRight: "20px",
    [theme.breakpoints.up("md")]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    width: 900,
    marginLeft: -140,
    marginTop: "20px",
    marginBottom: "20px",
    padding: "20px",
    [theme.breakpoints.up("md")]: {
      marginTop: "20px",
      marginBottom: "20px",
      padding: "20px",
    },
  },
  stepper: {
    padding: "30px 0px 50px",
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: "20px",
    marginLeft: "20px",
  },
});

const steps = ["Address information", "User Information", "Company Address"];

class AddCompany extends React.Component {
  constructor(props) {
    super(props);
    //this.selectFiles = this.selectFiles.bind(this);
    this.state = {
      activeStep: 0,
      zone: "",
      region: "",
      city: "",
      kebele: "",
      woreda: "",
      housenumber: "",
      blocknumber: "",

      first_name: "",
      last_name: "",
      username: "",
      password_digest: "",
      email: "",
      aphone_number: "",
      age: "",

      name: "",
      cemail: "",
      phone_number: "",
      description: "",
      agreement_id: "",
      tin_number: "",
      vat_registration_number: "",
      trade_name: "",
      capital: "",
      field_of_business: "",
      fax: "",

      //selectedFiles: undefined,
      progressInfos: [],
      message: [],

      fileInfos: [],
      errors: "",
      msg: "",
    };
  }

  getStepContent = (step) => {
    {
      switch (step) {
        case 0:
          return (
            <AddressForm
              handleChange={this.handleChange}
              zone={this.state.zone}
              region={this.state.region}
              city={this.state.city}
              kebele={this.state.kebele}
              woreda={this.state.woreda}
              housenumber={this.state.housenumber}
              blocknumber={this.state.blocknumber}
            />
         
          );
        case 1:
          return (
            <AddAdminForm
              handleChange={this.handleChange}
              first_name={this.state.first_name}
              last_name={this.state.last_name}
              username={this.state.username}
              password_digest={this.state.password_digest}
              age={this.state.age}
              email={this.state.email}
              aphone_number={this.state.aphone_number}
            />
          );
        case 2:
          return (
            <CompanyDetailForm
            handleChange={this.handleChange}
            name={this.state.name}
            cemail={this.state.cemail}
            phone_number={this.state.phone_number}
            description={this.state.description}
            agreement_id={this.state.agreement_id}
            tin_number={this.state.tin_number}
            vat_registration_number={this.state.vat_registration_number}
            trade_name={this.state.trade_name}
            capital={this.state.capital}
            field_of_business={this.state.field_of_business}
            fax={this.state.fax}
          />
          );
        default:
          throw new Error("Unknown step");
      }
    }
  };
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

 /* selectFiles(event) {
    this.setState({
      progressInfos: [],
      selectedFiles: event.target.files,
    });
  }*/

  postAddress = () => {
    var address_id = "";
    var payload = {
      zone: this.state.zone,
      region: this.state.region,
      city: this.state.city,
      kebele: this.state.kebele,
      woreda: this.state.woreda,
      block_number: this.state.blocknumber,
      house_number: this.state.housenumber,
    };

    var AdminPayload = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      username: this.state.username,
      password_digest: this.state.password_digest,
      email: this.state.email,
      phone_number: this.state.phone_number,
      age: this.state.age,
      address_id: 2,
      type_id: 3,
      gender_id: 1,
    };

    let formData = new FormData();
   /* for (const key of Object.keys(this.state.selectedFiles)) {
      formData.append("photo[]", this.state.selectedFiles[key]);
    }*/
    formData.append("name", this.state.name);
    formData.append("email", this.state.cemail);
    formData.append("phone_number", this.state.phone_number);
    formData.append("description", this.state.description);
    formData.append("agreement_id", this.state.agreement_id);
    formData.append("tin_number", this.state.tin_number);
    formData.append(
      "vat_registration_number",
      this.state.vat_registration_number
    );
    formData.append("trade_name", this.state.trade_name);
    formData.append("capital", this.state.capital);
    formData.append("field_of_business", this.state.field_of_business);
    formData.append("fax", this.state.fax);

    axios.post("/addAddress", payload).then(function(res) {
      {
        AdminPayload.address_id = res.data.id;
      }
      formData.append("address_id", res.data.id);
      axios.post("/registeAdmin", AdminPayload).then(function(resp) {
        formData.append("admin_id", resp.data.id);
        axios
          .post("/addSupplier", formData)
          .then((response) => {
            this.setState({ msg: "Supplier Added" });
          })
          .catch((error) => {
            // this.setState({msg:"Task Failed"})
          });
      });
    });
  };

  handleNext = () => {
    if (
      this.state.activeStep === 1 &&
      this.state.last_name !== "" &&
      this.state.first_name !== "" &&
      this.state.username !== "" &&
      this.state.password_digest !== "" &&
      this.state.email !== "" &&
      this.state.aphone_number !== "" &&
      this.state.age !== ""
    ) {
      this.setState({ activeStep: this.state.activeStep + 1 });
      this.setState({
        msg: "",
      });
    } else if (
      this.state.activeStep === 0 &&
      this.state.region !== "" &&
      this.state.kebele !== "" &&
      this.state.blocknumber !== "" &&
      this.state.city !== "" &&
      this.state.woreda !== "" &&
      this.state.zone !== "" &&
      this.state.region !== "" &&
      this.state.housenumber !== ""
    ) {
      this.setState({ activeStep: this.state.activeStep + 1 });
      this.setState({
        msg: "",
      });
    } else if (
      this.state.activeStep === 2 &&
      this.state.name !== "" &&
      this.state.phone_number &&
      this.state.cemail !== "" &&
      this.state.fax !== "" &&
      this.state.field_of_business !== "" &&
      this.state.trade_name !== "" &&
      this.state.vat_registration_number !== "" &&
      this.state.tin_number !== "" &&
      this.state.capital !== "" &&
      this.state.agreement_id !== "" &&
      this.state.description !== "" 
     // this.state.selectedFiles !== undefined
    ) {
      this.setState({ activeStep: this.state.activeStep + 1 });
      this.setState({
        msg: "",
      });
    } else {
      this.setState({
        msg: "please enter all data ",
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
            <Typography variant="h6" color="inherit" noWrap>
              Register New User
            </Typography>
          </Toolbar>
        </AppBar>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Add New User
            </Typography>
            <Stepper
              activeStep={this.state.activeStep}
              className={classes.stepper}
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>

            <React.Fragment>
              <div className="row my-3"></div>
              {this.state.activeStep === steps.length ? (
                <React.Fragment>{this.postAddress()}</React.Fragment>
              ) : (
                <React.Fragment>
                  {this.getStepContent(this.state.activeStep)}
                  <div className={classes.buttons}>
                    {this.state.activeStep !== 0 && (
                      <Button
                        onClick={this.handleBack}
                        className={classes.button}
                      >
                        Back
                      </Button>
                    )}

                    <Button
                      variant="contained"
                      onClick={this.handleNext}
                      className={classes.button}
                    >
                      {this.state.activeStep === steps.length - 1
                        ? "Submit Company"
                        : "Next"}
                    </Button>
                  </div>
                  <div style={{ color: "red", fontWeight: "bold" }}>
                    {this.state.msg}
                  </div>
                </React.Fragment>
              )}
            </React.Fragment>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}
export default withStyles(useStyles)(AddCompany);
