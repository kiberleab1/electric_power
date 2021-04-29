import React from 'react';
import { Badge, Table } from 'reactstrap';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Panel from '../../../../shared/components/Panel';

const RecentOrders = ({ t }) => (
  <Panel lg={12} title={t('dashboard_commerce.recent_orders')}>
    <Table responsive className="table--bordered">
      <thead>
        <tr>
          <th>#</th>
          <th>Invoice</th>
          <th>Customer Name</th>
          <th>Product</th>
          <th>Quantity</th>
          <th>Date</th>
          <th>Location</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>In-123356</td>
          <td>Frehiwet Amelak</td>
          <td>Xiaomi Mi 6</td>
          <td>1</td>
          <td>2021/12/25</td>
          <td>Jimma</td>
          <td><Badge color="success">In Progress</Badge></td>
        </tr>
        <tr>
          <td>2</td>
          <td>In-254875</td>
          <td>Damen Assefa</td>
          <td>Apple iPhone 6 Plus</td>
          <td>1</td>
          <td>2021/12/13</td>
          <td>Harer</td>
          <td><Badge color="primary">Completed</Badge></td>
        </tr>
        <tr>
          <td>3</td>
          <td>In-877868</td>
          <td>Gossa Simegn</td>
          <td>Xiaomi Mi 6</td>
          <td>1</td>
          <td>2021/12/13</td>
          <td>Addis Ababa</td>
          <td><Badge color="success">In Progress</Badge></td>
        </tr>
        <tr>
          <td>4</td>
          <td>In-619876</td>
          <td>Dawit Mola</td>
          <td>Apple iPhone 5 S</td>
          <td>1</td>
          <td>2021/12/07</td>
          <td>Bahirdar</td>
          <td><Badge color="primary">Completed</Badge></td>
        </tr>
        <tr>
          <td>5</td>
          <td>In-218778</td>
          <td>Kirubel Mesele</td>
          <td>Apple iPhone 6 Plus</td>
          <td>1</td>
          <td>2021/12/05</td>
          <td>Gonder</td>
          <td><Badge color="primary">Completed</Badge></td>
        </tr>
        <tr>
          <td>6</td>
          <td>In-626268</td>
          <td>Mola Abay</td>
          <td>Apple iPhone 7 Plus</td>
          <td>1</td>
          <td>2021/12/01</td>
          <td>Modjo</td>
          <td><Badge color="primary">Completed</Badge></td>
        </tr>
      </tbody>
    </Table>
  </Panel>
);

RecentOrders.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(RecentOrders);
