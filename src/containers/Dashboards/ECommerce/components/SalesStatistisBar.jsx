import React, { PureComponent } from "react";
import { connect } from "react-redux";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { Col, Container, Row } from "reactstrap";
import { Badge, Table } from "reactstrap";
import { AreaChart, Area, Legend } from "recharts";
import { withTranslation } from "react-i18next";
import PropTypes from "prop-types";
import Panel from "../../../../shared/components/Panel";
import TotalProducts from "./TotalProducts";
import getTooltipStyles from "../../../../shared/helpers";
import axios from "axios";
import { range } from "lodash";
import RecentOrders from "./RecentOrders";
import { Button, ButtonToolbar } from "reactstrap";
class SalesStatistisBar extends PureComponent {
  static propTypes = {
    t: PropTypes.func.isRequired,
    themeName: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      yearly: true,
      dataMonthly: [],
      dataWeekly: [],
      dataDaily: [],
      powerFactorMonthly: [],
      powerFactorDaily: [],
      query_date: this.props.query_date,
      date_change: true,
      total_power: "",
      total_power_daily: "",
      user_id: localStorage.getItem("user_id"),
      total_power_weekly: "",
      total_elec_cost_month: "",
      total_power_monthly: "",
      users: [],
    };
    this.getDailyData();
    this.getWeaklyData();
    this.getMonthlyData();
    this.getUsersData();
  }
  seeUserData = (event) => {
    console.log(event.target.value);
    this.setState({ user_id: event.target.value });
    this.getDailyData();
    this.getWeaklyData();
    this.getMonthlyData();
  };
  handleChange = () => {
    this.setState((prevState) => ({ yearly: !prevState.yearly }));
    if (this.state.yearly) {
      this.setState({ total_power: this.state.total_power_weekly });
    } else {
      this.setState({ total_power: this.state.total_power_daily });
    }
    console.log(this.props.query_date);
  };
  getUsersData = () => {
    var path = "/users";
    axios.get(path).then((res) => {
      var data = [];
      for (var i = 0; i < res.data.length; i++) {
        if (res.data[i].role_type_id == 2) {
          data.push(res.data[i]);
        }
      }
      this.setState({ users: data });
    });
  };
  getDailyData = () => {
    var date = this.props.query_date;
    var path = "/userEnergyPerHour/" + this.state.user_id + "?date=" + date;
    axios.get(path).then((res) => {
      var data = [];
      var temp_total = 0;
      var powerFactor = [];
      for (var i = 0; i < res.data.length; i++) {
        data.push({ name: String(res.data[i].time), uv: res.data[i].power });

        temp_total = temp_total + parseInt(res.data[i].power);
        powerFactor.push({
          name: String(res.data[i].time),
          uv: res.data[i].power_factor,
        });
      }
      this.setState({ powerFactorDaily: powerFactor });
      this.setState({ dataDaily: data });
      this.setState({ total_power_daily: temp_total + "kwh/hour" });
      this.setState({ total_power: temp_total + "kwh/hour" });
    });
  };
  getWeaklyData = () => {
    var date = this.props.query_date;
    var path = "/userEnergyPerWeek/" + this.state.user_id + "?date=" + date;
    axios.get(path).then((res) => {
      var data = [];

      for (var i = 0; i < res.data.length; i++) {
        var temp_total = 0;
        data.push({
          name: res.data[i].date.substring(5, 10),
          uv: res.data[i].power,
        });
        temp_total = temp_total + parseInt(res.data[i].power);
      }
      this.setState({ dataWeekly: data });
      this.setState({ total_power_weekly: temp_total + "kwh/day" });
    });
  };
  getMonthlyData = () => {
    var date = this.props.query_date;
    var path = "/userEnergyPerMonth/" + this.state.user_id + "?date=" + date;
    axios.get(path).then((res) => {
      var data = [];
      var powerFactor = [];
      var temp_total = 0;
      var total_cost =0;
      for (var i = 0; i < res.data.length; i++) {
        data.push({
          name: res.data[i].date.substring(8, 10),
          uv: res.data[i].power,
        });
        powerFactor.push({
          name: res.data[i].date.substring(8, 10),
          uv: res.data[i].power_factor,
        });
        temp_total = temp_total + parseInt(res.data[i].power);
        total_cost= temp_total*0.2267;
      }
      this.setState({ powerFactorMonthly: powerFactor });
      this.setState({ dataMonthly: data });
      this.setState({ total_power_monthly: temp_total + "kwh/month" });
      this.setState({total_elec_cost_month: total_cost+" Birr"})
    });
  };
  getData() {
    if (this.props.date_change) {
      this.getDailyData();
      this.getWeaklyData();
      this.getMonthlyData();
    }
  }
  TableUsers() {
      const admin_id = parseInt(localStorage.getItem("user_id"));
      if(admin_id===1){
      return <Panel lg={12} title={"users"}>
        <Table responsive className="table--bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>email</th>
              <th>see usage</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user, index) => (
              <tr>
                <td>{index}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <Button value={user.id} onClick={this.seeUserData}>
                    See Data
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Panel>
      
  }}

  render() {
    const { t, themeName } = this.props;
    const { yearly } = this.state;
    const dataYearly = [
      { name: "Mon", uv: 4000 },
      { name: "Tus", uv: 3000 },
      { name: "Wed", uv: 2000 },
      { name: "Tuh", uv: 2780 },
      { name: "Fri", uv: 1890 },
      { name: "Sat", uv: 2390 },
      { name: "Sun", uv: 3490 },
    ];

    const dataMontly = [
      { name: "01:00", uv: 3654 },
      { name: "02:00", uv: 2578 },
      { name: "03:00", uv: 2000 },
      { name: "04:00", uv: 4383 },
      { name: "05:00", uv: 1890 },
      { name: "06:00", uv: 2390 },
      { name: "07:00", uv: 3490 },
      { name: "08:00", uv: 2000 },
      { name: "09:00", uv: 2780 },
      { name: "10:00", uv: 1890 },
      { name: "11:00", uv: 3578 },
      { name: "12:00", uv: 3644 },
      { name: "13:00", uv: 4000 },
      { name: "14:00", uv: 3000 },
      { name: "15:00", uv: 2000 },
      { name: "16:00", uv: 2780 },
      { name: "17:00", uv: 1890 },
      { name: "18:00", uv: 2390 },
      { name: "19:00", uv: 3490 },
      { name: "20:00", uv: 2000 },
      { name: "21:00", uv: 2780 },
      { name: "22:00", uv: 1890 },
      { name: "23:00", uv: 3578 },
      { name: "24:00", uv: 2390 },
    ];
   

    return (
      <Panel
        md={12}
        lg={12}
        title={t("Energy Consumption")}
        subhead="See how your energy used"
      >
      {
        this.TableUsers()
      }
        <TotalProducts typeData={"Energy Consumption"} total={this.state.total_power} />

        {this.getData()}
        <div dir="ltr">
          <ResponsiveContainer height={260} className="dashboard__area">
            {yearly ? (
              <BarChart
                data={this.state.dataDaily}
                margin={{ top: 20, left: -15 }}
              >
                <XAxis dataKey="name" tickLine={false} label="HOUR" />
                <YAxis tickLine={false} label="kwh" />
                <Tooltip {...getTooltipStyles(themeName, "defaultItems")} />
                <CartesianGrid vertical={false} />
                <Bar dataKey="uv" name="KWh" fill="#4ce1b6" barSize={40} />
              </BarChart>
            ) : (
              <BarChart
                data={this.state.dataWeekly}
                margin={{ top: 20, left: -15 }}
              >
                <XAxis dataKey="name" tickLine={false} label="HOUR" />
                <br />
                <YAxis tickLine={false} label="kwh" />
                <Tooltip {...getTooltipStyles(themeName, "defaultItems")} />
                <CartesianGrid vertical={false} />
                <Bar dataKey="uv" name="kwh" fill="#ff4861" barSize={140} />
              </BarChart>
            )}
          </ResponsiveContainer>
        </div>
        <hr />
        <label htmlFor="sales" className="toggle-btn dashboard__sales-toggle">
          <input
            className="toggle-btn__input"
            type="checkbox"
            name="sales"
            id="sales"
            onChange={this.handleChange}
          />
          <span className="dashboard__sales-toggle-left">Hourly</span>
          <span className="toggle-btn__input-label" />
          <span className="dashboard__sales-toggle-right">Daily</span>
        </label>
        <hr />
        <p>Your Energy Consumption Monthly</p>
        <hr />
        <Row>
          <Col md={6}> <TotalProducts typeData={"Enrgy"} total={this.state.total_power_monthly} /></Col>
          <Col md={6}>  <TotalProducts typeData={"Bill"}  total={this.state.total_elec_cost_month} /></Col>
        </Row>
       
      


        <div dir="ltr">
          <ResponsiveContainer height={260} className="dashboard__area">
            {
              <BarChart
                data={this.state.dataMonthly}
                margin={{ top: 20, left: -15 }}
              >
                <XAxis dataKey="name" tickLine={false} />
                <YAxis tickLine={false} />
                <Tooltip {...getTooltipStyles(themeName, "defaultItems")} />
                <CartesianGrid vertical={false} />
                <Bar dataKey="uv" name="Sales" fill="#4ce1b6" barSize={40} />
              </BarChart>
            }
          </ResponsiveContainer>
        </div>
        <hr />
        <label htmlFor="sales" className="toggle-btn dashboard__sales-toggle">
          <input
            className="toggle-btn__input"
            type="checkbox"
            name="sales"
            id="sales"
            onChange={this.handleChange}
          />
        </label>
        <hr />
        <p>Your daily average power factor</p>
        <hr />
        <div dir="rtl">
          <ResponsiveContainer height={260} className="dashboard__area">
            {
              <AreaChart
                data={this.state.powerFactorDaily}
                margin={{ top: 20, left: -15, bottom: 20 }}
              >
                <XAxis
                  dataKey="name"
                  tickLine={false}
                  reversed={false}
                  label="day"
                />
                <YAxis tickLine={false} orientation={"left"} label="kwh" />
                <Tooltip {...getTooltipStyles(themeName, "defaultItems")} />
                <Legend />
                <CartesianGrid />
                <Area
                  name="power factor"
                  type="monotone"
                  dataKey="uv"
                  fill="#4ce1b6"
                  stroke="#4ce1b6"
                  fillOpacity={0.2}
                />
              </AreaChart>
            }
          </ResponsiveContainer>
        </div>
        <hr />
        <hr />
        <label htmlFor="sales" className="toggle-btn dashboard__sales-toggle">
          <input
            className="toggle-btn__input"
            type="checkbox"
            name="sales"
            id="sales"
            onChange={this.handleChange}
          />
        </label>
        <hr />
        <p>Your monthly average power factor</p>
        <hr />
        <div dir="rtl">
          <ResponsiveContainer height={260} className="dashboard__area">
            {
              <AreaChart
                data={this.state.powerFactorMonthly}
                margin={{ top: 20, left: -15, bottom: 20 }}
              >
                <XAxis
                  dataKey="name"
                  tickLine={false}
                  reversed={false}
                  label="day"
                />
                <YAxis tickLine={false} orientation={"left"} label="kwh" />
                <Tooltip {...getTooltipStyles(themeName, "defaultItems")} />
                <Legend />
                <CartesianGrid />
                <Area
                  name="power factor"
                  type="monotone"
                  dataKey="uv"
                  fill="#4ce1b6"
                  stroke="#4ce1b6"
                  fillOpacity={0.2}
                />
              </AreaChart>
            }
          </ResponsiveContainer>
        </div>
        <hr />
      </Panel>
    );
  }
}

export default connect((state) => ({ themeName: state.theme.className }))(
  withTranslation("common")(SalesStatistisBar)
);
