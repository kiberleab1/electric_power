import React from "react";
import { Col, Container, Row } from "reactstrap";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";
import { compose } from "redux";
import ActivityChart from "./components/ActivityChart";
import ActivityRating from "./components/ActivityRating";
import FatBurning from "./components/FatBurning";
import HeartRate from "./components/HeartRate";
import CaloriesBurn from "./components/CaloriesBurn";
import Steps from "./components/Steps";
import Distance from "./components/Distance";
import TopTen from "./components/TodayRunningMap";
import MyCompetitors from "./components/MyCompetitors";
import { RTLProps } from "../../../shared/prop-types/ReducerProps";
import { PureComponent } from "react";
import { CryptoTableProps } from '../../../shared/prop-types/TablesProps';
import { deleteCryptoTableData } from '../../../redux/actions/cryptoTableActions';

class FitnessDashboard extends PureComponent {
  
static propTypes = {
  t: PropTypes.func.isRequired,
  rtl: RTLProps.isRequired,
  cryptoTable: CryptoTableProps.isRequired,
};
onDeleteCryptoTableData = (index, e) => {
  const { dispatch, cryptoTable } = this.props;
  e.preventDefault();
  const arrayCopy = [...cryptoTable];
  arrayCopy.splice(index, 1);
  dispatch(deleteCryptoTableData(arrayCopy));
};
  render() {
    const{
      t,rtl,cryptoTable,
    }=this.props;
    return (
      <Container className="dashboard">
        <Row>
          <Col md={12}>
            <h3 className="page-title">{t("Food and Oil Seeds")}</h3>
          </Col>
        </Row>
        <Row>
          <HeartRate />
          <CaloriesBurn />
          <Steps />
          <Distance />
        </Row>
        <Row>
          <ActivityChart dir={rtl.direction} />

          <ActivityRating dir={rtl.direction} />
        </Row>
        <Row>
          <TopTen
            cryptoTable={cryptoTable}
            onDeleteCryptoTableData={this.onDeleteCryptoTableData}
          />
        </Row>
      </Container>
    );
  }
}

export default connect(state => ({
  cryptoTable: state.cryptoTable.items,
  rtl: state.rtl,
  theme: state.theme,
}))(withTranslation('common')(FitnessDashboard));
