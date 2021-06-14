import React, { PureComponent } from "react";
import { Col, Container, Row } from "reactstrap";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TotalProducts from "./components/TotalProducts";
import TotalProfit from "./components/TotalProfit";
import OrdersToday from "./components/OrdersToday";
import Subscriptions from "./components/Subscriptions";
import TopSellingProducts from "./components/TopSellingProducts";
import BasicCard from "./components/BasicCard";
import SalesStatistic from "./components/SalesStatistic";
import RecentOrders from "./components/RecentOrders";
import ProductSales from "./components/ProductSales";
import Orders from "./components/NewOrders";
import SalesStatistisBar from "./components/SalesStatistisBar";
import MyTodos from "./components/MyTodos";
import Emails from "./components/Emails";
import SalesReport from "./components/SalesReport";
import ShortReminders from "./components/ShortReminders";
import { deleteNewOrderTableData } from "../../../redux/actions/newOrderTableActions";
import { NewNewOrderTableProps } from "../../../shared/prop-types/TablesProps";
import { RTLProps } from "../../../shared/prop-types/ReducerProps";
import DatePicker from "react-datepicker";
class ECommerceDashboard extends PureComponent {
  static propTypes = {
    newOrder: NewNewOrderTableProps.isRequired,
    dispatch: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
    rtl: RTLProps.isRequired,
    selectedDate: new Date(),
  };
  constructor(props){
    super(props)
    this.state={
      query_date: "2020/05/05" ,//this.formatDate(String(new Date()).slice(4,15)),
      date_change: true,
    }
  }

  onDeleteRow = (index, e) => {
    const { dispatch, newOrder } = this.props;

    e.preventDefault();
    const arrayCopy = [...newOrder];
    arrayCopy.splice(index, 1);
    dispatch(deleteNewOrderTableData(arrayCopy));
  };
 handleChange =(data)=>{
   const { t, newOrder, rtl,selectedDate } = this.props;
   console.log(this.formatDate(String(data).slice(4,15)))
   console.log(data)
  // this.setState({selectedDate,data})
  // this.childTwo.current.getData()
  this.setState({date_change:true})
  // this.formatDate()
  this.setState({query_date:this.formatDate(String(data).slice(4,15))})
 }

formatDate=(date)=> {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [year,month,day].join('/');
}
  render() {
    const { t, newOrder, rtl,selectedDate } = this.props;

    return (
      <Container className="dashboard" style={{ backgroundColor: "#F1F3F6" }}>
        <Row>
          <Col md={16}>
            <h3 className="page-title">{t("DashBoard")}</h3>
          </Col>
        </Row>
        <Row>
       
          <Col>
            <p> Choose ur Date</p>
            <DatePicker selected={selectedDate}  onChange={(date)=>this.handleChange(date)}/>
          </Col>
        </Row>
     

        <Row>
          <SalesStatistisBar ref={this.childTwo} query_date={this.state.query_date} date_change={this.state.date_change} />
          {
            this.setState({date_change:false})
          }
        </Row>
      </Container>
    );
  }
}

export default connect((state) => ({
  newOrder: state.newNewOrder.items,
  rtl: state.rtl,
  selectedDate: new Date(),
}))(withTranslation("common")(ECommerceDashboard));
