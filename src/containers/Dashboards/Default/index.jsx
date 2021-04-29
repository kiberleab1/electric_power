import React, { PureComponent } from "react";
import { Col, Container, Row } from "reactstrap";
import { compose } from "redux";
import { connect } from "react-redux";
import { withTranslation } from "react-i18next";
import PropTypes from "prop-types";
import NewOrders from "./components/Visits";
import TotalPageViews from "./components/TotalPageViews";
import NewUsers from "./components/NewUsers";
import NewCommodities from "./components/BounceRate";
import ABTestingAnalytics from "./components/ABTestingAnalytics";
import SalesStatistic from "./components/SalesStatistic";
import VisitorsSessions from "./components/VisitorsSessions";
import BounceRateArea from "./components/BounceRateArea";
import AudienceByCountry from "./components/AudienceByCountry";
import CommoditiesStat from "./components/BudgetStatistic";
import BestSellingRegions from "./components/BestSellingRegions";
import GoalsCompletion from "./components/GoalsCompletion";
import { RTLProps } from "../../../shared/prop-types/ReducerProps";
import { deleteNewOrderTableData } from '../../../redux/actions/newOrderTableActions';
import { NewCommoditiesTableProps, NewOrderTableProps } from '../../../shared/prop-types/TablesProps';

class DefaultDashboard extends PureComponent {
  static propTypes = {
    newOrder: NewOrderTableProps.isRequired,
    newCommodities: NewCommoditiesTableProps.isRequired,
    dispatch: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
    rtl: RTLProps.isRequired,
  };

  onDeleteRow = (index, e) => {
    const { dispatch, newOrder } = this.props;

    e.preventDefault();
    const arrayCopy = [...newOrder];
    arrayCopy.splice(index, 1);
    dispatch(deleteNewOrderTableData(arrayCopy));
  };
  render() {
    const { t, newOrder, rtl,newCommodities } = this.props;
    return (
      <Container className="dashboard">
        <Row>
          <Col md={12}>
            <h3 className="page-title">{t("GOLD and COMMODITIES")}</h3>
          </Col>
        </Row>
        <Row>
          <NewOrders newOrder={newOrder} onDeleteRow={this.onDeleteRow} />
          <NewCommodities newOrder={newCommodities} onDeleteRow={this.onDeleteRow} />
        </Row>
        <Row>
          <ABTestingAnalytics dir={rtl.direction} />
        
          <VisitorsSessions dir={rtl.direction} />
          <CommoditiesStat dir={rtl.direction} />
       
        </Row>
      </Container>
    );
  }
}
export default connect((state) => ({
  newOrder: state.newOrder.items,
  newCommodities: state.newCommodities.items,
  rtl: state.rtl,
}))(withTranslation("common")(DefaultDashboard));
