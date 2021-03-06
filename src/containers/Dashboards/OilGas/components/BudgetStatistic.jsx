/* eslint-disable react/no-array-index-key */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  PieChart, Pie, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Panel from '../../../../shared/components/Panel';

import getTooltipStyles from '../../../../shared/helpers';

const data01 = [{ name: 'Biodiessel', value: 12934, fill: '#4ce1b6' },
  { name: 'CNG', value: 9934, fill: '#70bbfd' },
  { name: 'Ethanol', value: 20432, fill: '#f6da6e' },];

const style = {
  left: 0,
  width: 150,
  lineHeight: '24px',
  position: 'relative',
};

const renderLegend = ({ payload }) => (
  <ul className="dashboard__chart-legend">
    {
      payload.map((entry, index) => (
        <li key={`item-${index}`}><span style={{ backgroundColor: entry.color }} />{entry.value}</li>
      ))
    }
  </ul>
);

renderLegend.propTypes = {
  payload: PropTypes.arrayOf(PropTypes.shape({
    color: PropTypes.string,
    vslue: PropTypes.string,
  })).isRequired,
};

class CommoditiesStat extends PureComponent {
  static propTypes = {
    t: PropTypes.func.isRequired,
    dir: PropTypes.string.isRequired,
    themeName: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
    };
  }

  onMouseMove = (e) => {
    const { dir } = this.props;
    if (e.tooltipPosition) {
      this.setState({ x: dir === 'ltr' ? e.tooltipPosition.x : e.tooltipPosition.x / 10, y: e.tooltipPosition.y });
    }
  };

  render() {
    const { x, y, themeName } = this.state;
    const { t } = this.props;

    return (
      <Panel
        lg={12}
        xl={6}
        md={12}
        title={t('GAS FUEL MARKET SHARE')}
        
      >
        <div className="dashboard__visitors-chart">
          <p className="dashboard__visitors-chart-title">Total Volume Sold <span>17,384</span></p>
          <p className="dashboard__visitors-chart-number">17,384</p>
          <ResponsiveContainer className="dashboard__chart-pie" width="100%" height={220}>
            <PieChart className="dashboard__chart-pie-container">
              <Tooltip position={{ x, y }} {...getTooltipStyles(themeName)} />
              <Pie
                data={data01}
                dataKey="value"
                cy={110}
                innerRadius={70}
                outerRadius={100}
                onMouseMove={this.onMouseMove}
              />
              <Legend layout="vertical" verticalAlign="bottom" wrapperStyle={style} content={renderLegend} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </Panel>
    );
  }
}

export default connect(state => ({ themeName: state.theme.className }))(withTranslation('common')(CommoditiesStat));
