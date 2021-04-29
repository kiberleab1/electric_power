import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  Bar, CartesianGrid, ComposedChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from 'recharts';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';
import Panel from '../../../../shared/components/Panel';
import OccupancyTooltipContent from './OccupancyTooltipContent';

const data = [
  {
    name: 'Televsion',
    Available: 125,
    Sold: 75,
    Stock: 100,
  },
  {
    name: 'Smartphone',
    Available: 115,
    Sold: 23,
    Stock: 108,
  },
  {
    name: 'Oven',
    Available: 147,
    Sold: 26,
    Stock: 73,
  },
  {
    name: 'Refrigretor',
    Available: 130,
    Sold: 25,
    Stock: 105,
  },
  {
    name: 'Washing Machine',
    Available: 155,
    Sold: 35,
    Stock: 90,
  },
  {
    name: 'Computer',
    Available: 129,
    Sold: 30,
    Stock: 129,
  },
  {
    name: 'Office Machine',
    Available: 145,
    Sold: 48,
    Stock: 133,
  },
];

class Occupancy extends PureComponent {
  static propTypes = {
    t: PropTypes.func.isRequired,
    dir: PropTypes.string.isRequired,
    themeName: PropTypes.string.isRequired,
  };

  toPercent = (decimal, fixed = 0) => `${decimal.toFixed(fixed)}%`;

  render() {
    const { t, dir, themeName } = this.props;

    return (
      <Panel
        xl={5}
        lg={12}
        md={12}
        title={t('Electronics mareket overview')}
        subhead="See how effective your business is"
      >
        <div dir="ltr">
          <ResponsiveContainer height={260}>
            <ComposedChart data={data} margin={{ top: 20, left: -15 }}>
              <XAxis dataKey="name" tickLine={false} padding={{ left: 20 }} reversed={dir === 'rtl'} />
              <YAxis tickLine={false} tickFormatter={this.toPercent} orientation={dir === 'rtl' ? 'right' : 'left'} />
              <Tooltip content={<OccupancyTooltipContent colorForKey={{ Available: '#555555' }} theme={themeName} />} />
              <CartesianGrid vertical={false} />
              <Bar dataKey="Available" name="Stay overs" fill="#f2f4f7" barSize={20} />
              <Line type="linear" name="Sold" dataKey="Sold" stroke="#b8e986" />
              <Line type="linear" name="Stock" dataKey="Stock" stroke="#48b5ff" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <hr />
        <div>
          <Table responsive className="table dashboard__occupancy-table">
            <tbody>
              <tr>
                <td className="td-head">Stock</td>
                <td className="td-blue">100</td>
                <td className="td-blue">108</td>
                <td className="td-blue">73</td>
                <td className="td-blue">105</td>
                <td className="td-blue">90</td>
                <td className="td-blue">129</td>
                <td className="td-blue">53</td>
              </tr>
              <tr>
                <td className="td-head">Sold</td>
                <td className="td-green">75</td>
                <td className="td-green">65</td>
                <td className="td-green">46</td>
                <td className="td-green">35</td>
                <td className="td-green">65</td>
                <td className="td-green">21</td>
                <td className="td-green">34</td>
              </tr>
              <tr>
                <td className="td-head">Stay overs</td>
                <td className="td-gray">3113</td>
                <td className="td-gray">2424</td>
                <td className="td-gray">4545</td>
                <td className="td-gray">4543</td>
                <td className="td-gray">3432</td>
                <td className="td-gray">3211</td>
                <td className="td-gray">2112</td>
              </tr>
              <tr>
                <td className="td-head">Customers</td>
                <td className="td-gray">131</td>
                <td className="td-gray">133</td>
                <td className="td-gray">343</td>
                <td className="td-gray">342</td>
                <td className="td-gray">351</td>
                <td className="td-gray">234</td>
                <td className="td-gray">242</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Panel>
    );
  }
}

export default connect(state => ({ themeName: state.theme.className }))(withTranslation('common')(Occupancy));
