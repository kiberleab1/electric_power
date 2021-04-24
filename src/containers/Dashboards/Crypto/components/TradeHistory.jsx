import React from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';
import Panel from '../../../../shared/components/Panel';

const TradeHistory = ({ t }) => (
  <Panel
    xl={4}
    lg={5}
    md={12}
    xs={12}
    title={t('Exchange History')}
    subhead="Exchange rate by commercial banks"
  >
    <Table responsive striped>
      <thead>
        <tr>
          <th>Coin</th>
          <th>Buying</th>
          <th>Selling</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><p className="bold-text dashboard__btc">USD</p></td>
          <td>41.3165</td>
          <td>42.1428</td>
        </tr>
        <tr>
          <td><p className="bold-text dashboard__eth">GBP</p></td>
          <td>54.2261</td>
          <td>55.3106</td>
        </tr>
        <tr>
          <td><p className="bold-text dashboard__neo">Euro</p></td>
          <td>48.4973</td>
          <td>49.4672</td>
        </tr>
        <tr>
          <td><p className="bold-text dashboard__ste">CAD</p></td>
          <td>29.6287</td>
          <td>30.2213</td>
        </tr>
        <tr>
          <td><p className="bold-text dashboard__eos">SAR</p></td>
          <td>9.9698</td>
          <td>10.1692</td>
        </tr>
        <tr>
          <td><p className="bold-text dashboard__lit">AED</p></td>
          <td>10.1787</td>
          <td>10.3823</td>
        </tr>
      </tbody>
    </Table>
  </Panel>
);

TradeHistory.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(TradeHistory);
